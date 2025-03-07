import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Project {
  id: string;
  title: string;
  kicker: string;
  short_description: string;
  description: string;
  media: any[];
  github_link: string;
  live_demo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = '../../assets/files/projects.json';
  private http: HttpClient = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map((projects) => projects.find((project) => project.id === id))
    );
  }
}
