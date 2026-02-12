import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
    displayedText = '';
    roles: string[] = [];
    currentRoleIndex = 0;
    private langChangeSub?: Subscription;
    private timeoutId: any;

    constructor(private translate: TranslateService) { }

    ngOnInit() {
        this.loadRoles();
        this.langChangeSub = this.translate.onLangChange.subscribe(() => {
            this.loadRoles();
        });
    }

    ngOnDestroy() {
        if (this.langChangeSub) {
            this.langChangeSub.unsubscribe();
        }
        this.stopTyping();
    }

    private loadRoles() {
        this.translate.get('HERO.ROLES').subscribe((roles: string[]) => {
            if (roles && Array.isArray(roles)) {
                this.stopTyping();
                this.roles = roles;
                this.displayedText = '';
                this.currentRoleIndex = 0;
                this.typeWriter();
            }
        });
    }

    private stopTyping() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }

    typeWriter() {
        if (!this.roles || this.roles.length === 0) return;
        const role = this.roles[this.currentRoleIndex];
        let charIndex = 0;

        const type = () => {
            if (charIndex < role.length) {
                this.displayedText += role.charAt(charIndex);
                charIndex++;
                this.timeoutId = setTimeout(type, 100);
            } else {
                this.timeoutId = setTimeout(() => {
                    this.erase();
                }, 2000);
            }
        };

        type();
    }

    erase() {
        if (this.timeoutId) this.stopTyping();
        const erase = () => {
            if (this.displayedText.length > 0) {
                this.displayedText = this.displayedText.slice(0, -1);
                this.timeoutId = setTimeout(erase, 50);
            } else {
                this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
                this.timeoutId = setTimeout(() => this.typeWriter(), 500);
            }
        };

        erase();
    }

    scrollToProjects() {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToContact() {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
