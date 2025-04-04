import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ProjectDetailsComponent} from "../../components/project-details/project-details.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  imports: [
    NavbarComponent,
    ProjectDetailsComponent,
    ContactComponent,
    FooterComponent
  ],
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
