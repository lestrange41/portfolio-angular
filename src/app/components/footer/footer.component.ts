import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    socialLinks = [
        { name: 'GitHub', icon: '🐙', url: 'https://github.com/lestrange41' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/joelmontilla' },
        { name: 'Email', icon: '📧', url: 'mailto:joelmontillaher@gmail.com' }
    ];
}
