import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {CommonModule} from '@angular/common'; 
import { Project } from '../_models/Project';
import { CardComponentComponent } from "../card-component/card-component.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, CommonModule, CardComponentComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Luddy Hackathon',
    summary: 'abc',
    description: 'abced',
    projectLink: 'https://google.com',
    pictures: ['lou-profile.jpg','github-mark.png'],
    tags: ['Angular', 'Typescrupt']
  };
}
