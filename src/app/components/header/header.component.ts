import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isMenuOpen = false;

    constructor(private translate: TranslateService) { }

    get currentLang(): string {
        return this.translate.currentLang || 'es';
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    changeLanguage(lang: string) {
        this.translate.use(lang);
    }

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            this.isMenuOpen = false;
        }
    }
}
