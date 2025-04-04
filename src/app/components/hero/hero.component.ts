import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

}
