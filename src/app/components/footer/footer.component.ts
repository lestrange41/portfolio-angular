import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    socialLinks = [
        { name: 'Email', icon: 'assets/icons/gmail-svgrepo-com1.svg', url: 'mailto:joelmontillaher@gmail.com' },
        { name: 'LinkedIn', icon: 'assets/icons/linkedin-svgrepo.svg', url: 'https://linkedin.com/in/joelmontilla' },
        { name: 'GitHub', icon: 'assets/icons/github-142-svgrepo-com.svg', url: 'https://github.com/lestrange41' }      
    ];
}
