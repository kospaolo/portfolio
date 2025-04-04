import {Component, inject, OnInit} from '@angular/core';
import {Project, ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  projects: Project[] = [];
  private projectsService: ProjectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
