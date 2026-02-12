import { Component } from '@angular/core';

interface Project {
    title: string;
    description: string;
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
            title: 'Banco Santander - Gestión de Contratos',
            description: 'Sistema de gestión y mantenimiento de contratos bancarios. Desarrollo de módulos para contratación de servicios, mantenimiento de datos y gestión documental para uno de los bancos más grandes de Europa.',
            technologies: ['Angular', 'TypeScript', 'REST API', 'RxJS'],
            image: '🏦',
            link: 'https://www.bancosantander.es/particulares',

        },
        {
            title: 'Air Europa - Portal Corporativo',
            description: 'Desarrollo y mantenimiento de aplicaciones web para la aerolínea Air Europa. Implementación de funcionalidades para gestión de vuelos, reservas y servicios al cliente.',
            technologies: ['Angular', 'TypeScript', 'Node.js', 'Express'],
            image: '✈️',
            link: 'https://www.aireuropa.com',
        },
        {
            title: 'TrailNest',
            description: 'Aplicación donde crear y subir rutas de senderismo personalizadas por el usuario, pudiendo asi calificarlas y registrarlas por diferentes niveles.',
            technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
            image: '📊',
            link: 'https://github.com/lestrange41/trailnest',

        }

    ];
}
