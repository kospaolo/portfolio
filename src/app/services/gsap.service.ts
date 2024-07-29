import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  constructor() {}

  animateIntroduction() {
    gsap.from('.introduction h1', { duration: 1, opacity: 0, y: -50 });
    gsap.from('.introduction p', { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    gsap.from('.social', { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1 });
    gsap.from('.cv-button', { duration: 1, opacity: 0, y: 20, delay: 1.5 });
  }

  animateImage() {
    gsap.from('.image-wrapper img', { duration: 1, opacity: 0, scale: 0.8, delay: 1 });
  }

  animateExperience() {
    gsap.from('.experience-wrapper h1', {
      scrollTrigger: {
        trigger: '.experience-wrapper h1',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      scale: 0.8,
      delay: 0.5,
    });
    gsap.from('.experience-wrapper h4', {
      scrollTrigger: {
        trigger: '.experience-wrapper h4',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: -20,
      delay: 1,
    });
  }

  animateSkills() {
    gsap.from('.skill', {
      scrollTrigger: {
        trigger: '.skills-wrapper',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.3,
      delay: 1.5,
    });
  }

  animateProjects() {
    gsap.from('.heading-wrapper h1', {
      scrollTrigger: {
        trigger: '.heading-wrapper h1',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: -50,
    });
    gsap.from('.heading-wrapper h4', {
      scrollTrigger: {
        trigger: '.heading-wrapper h4',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
    });
    gsap.from('.project', {
      scrollTrigger: {
        trigger: '.projects-wrapper',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.3,
      delay: 1,
    });
  }

  animateContact() {
    gsap.from('.text-wrapper h1', {
      scrollTrigger: {
        trigger: '.text-wrapper h1',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: -50,
    });
    gsap.from('.text-wrapper p', {
      scrollTrigger: {
        trigger: '.text-wrapper p',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
    });
    gsap.from('.form-wrapper input, .form-wrapper textarea, .form-wrapper button', {
      scrollTrigger: {
        trigger: '.form-wrapper',
        start: 'top 80%',
      },
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      delay: 1,
    });
  }

  animateOnScroll(element: string, animation: any) {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
      ...animation,
    });
  }
}