import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    displayedText = '';
    roles = ['Angular Specialist', 'Frontend Developer'];
    currentRoleIndex = 0;

    ngOnInit() {
        this.typeWriter();
    }

    typeWriter() {
        const role = this.roles[this.currentRoleIndex];
        let charIndex = 0;

        const type = () => {
            if (charIndex < role.length) {
                this.displayedText += role.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    this.erase();
                }, 2000);
            }
        };

        type();
    }

    erase() {
        const erase = () => {
            if (this.displayedText.length > 0) {
                this.displayedText = this.displayedText.slice(0, -1);
                setTimeout(erase, 50);
            } else {
                this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
                setTimeout(() => this.typeWriter(), 500);
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
