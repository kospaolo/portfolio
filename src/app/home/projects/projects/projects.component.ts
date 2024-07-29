import { Component } from '@angular/core';
import { GsapService } from 'src/app/services/gsap.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private gsapService: GsapService) {}

  ngOnInit(): void {
    this.gsapService.animateProjects();
  }
  
  openProject(link: any) {
    window.open(link, '_blank');
  }
}
