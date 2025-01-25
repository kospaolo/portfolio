import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Project {
  id: string;
  title: string;
  short_description: string;
  description: string;
  media: [{ fullPath: string, altText: string }];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'assets/files/projects.json';
  private http: HttpClient = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
