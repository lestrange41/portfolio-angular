import { Component } from '@angular/core';

interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    link?: string;
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contactInfo: ContactInfo[] = [
        { icon: 'assets/icons/gmail-svgrepo-com1.svg', label: 'Email', value: 'joelmontillaher@gmail.com', link: 'mailto:joelmontillaher@gmail.com' },
        { icon: 'assets/icons/linkedin-svgrepo.svg', label: 'LinkedIn', value: 'linkedin.com/in/joelmontilla', link: 'https://linkedin.com/in/joelmontilla' },
        { icon: 'assets/icons/github-142-svgrepo-com.svg', label: 'GitHub', value: 'github.com/lestrange41', link: 'https://github.com/lestrange41' },

    ];
}
