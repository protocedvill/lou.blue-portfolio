import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {CommonModule} from '@angular/common'; 

@Component({
  selector: 'app-card-component',
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, CommonModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  @Input() project = {} as Project;
}
