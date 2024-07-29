import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigateToHomePage(): void {
    gsap.to('.enter-button-wrapper', {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        this.router.navigate(['/home']);
      },
    });
  }
}
