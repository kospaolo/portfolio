import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {MyWorkComponent} from "../../components/my-work/my-work.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactComponent,
    FooterComponent
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
