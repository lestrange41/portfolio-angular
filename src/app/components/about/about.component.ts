import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    stats = [
        { number: '2+', label: 'Años de Experiencia' },
        { number: '10+', label: 'Proyectos Completados' },
        { number: '15+', label: 'Tecnologías Dominadas' },
        { number: '100%', label: 'Dedicación' }
    ];
}
