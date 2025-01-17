import { Component } from '@angular/core';
import { GsapService } from 'src/app/services/gsap.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private gsapService: GsapService) {}

  ngOnInit(): void {
    this.gsapService.animateIntroduction();
    this.gsapService.animateImage();
  }

  openLink(link: any) {
    window.open(link, '_blank');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?export=download&id=16a5Jyk8S7MU6A76PW1nHdW05CPACbV2m';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
