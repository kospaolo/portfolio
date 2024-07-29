import { Component } from '@angular/core';
import { GsapService } from 'src/app/services/gsap.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(private gsapService: GsapService) {}

  ngOnInit(): void {
    this.gsapService.animateExperience();
    this.gsapService.animateSkills();
  }
}
