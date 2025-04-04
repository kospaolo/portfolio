import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project, ProjectsService} from "../../services/projects.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-project-details',
  standalone: true,
  templateUrl: './project-details.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private projectsService: ProjectsService = inject(ProjectsService);

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');

    if (projectId) {
      this.projectsService.getProjectById(projectId).subscribe({
        next: (project) => {
          this.project = project;
          if (!project) {
            alert('Project not found!');
          }
        },
        error: (error) => {
          console.error('Error loading project:', error);
        },
        complete: () => {},
      });
    }
  }
}
