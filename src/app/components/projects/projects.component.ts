import { Component } from '@angular/core';

interface Project {
    title: string;
    description: string;
    translationKey: string;
    technologies: string[];
    image: string;
    link?: string;
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            title: '',
            description: '',
            translationKey: 'SANTANDER',
            technologies: ['Angular', 'TypeScript', 'REST API', 'RxJS'],
            image: '🏦',
            link: 'https://www.bancosantander.es/particulares',

        },
        {
            title: '',
            description: '',
            translationKey: 'AIREUROPA',
            technologies: ['Angular', 'TypeScript', 'Node.js', 'Express'],
            image: '✈️',
            link: 'https://www.aireuropa.com',
        },
        {
            title: '',
            description: '',
            translationKey: 'TRAILNEST',
            technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
            image: '📊',
            link: 'https://github.com/lestrange41/trailnest',

        }

    ];
}
