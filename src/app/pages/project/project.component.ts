import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
