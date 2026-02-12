import { Component } from '@angular/core';

interface Skill {
    name: string;
    level: number;
    icon: string;
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
    skills: Skill[] = [
        { name: 'Angular', level: 95, icon: '🅰️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '📜' },
        { name: 'HTML5 & CSS3', level: 95, icon: '🌐' },
        { name: 'Git', level: 88, icon: '🔧' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'REST APIs', level: 90, icon: '🔌' },


    ];
}
