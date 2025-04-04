import {Component, inject, OnInit} from '@angular/core';
import {Project, ProjectsService} from "../../services/projects.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-my-work',
  standalone: true,
  templateUrl: './my-work.component.html',
  imports: [
    RouterLink,
    NgForOf
  ],
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
