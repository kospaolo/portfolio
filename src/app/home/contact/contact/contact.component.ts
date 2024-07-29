import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GsapService } from 'src/app/services/gsap.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private gsapService: GsapService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.gsapService.animateContact();
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return false;
    }

    const formData = this.contactForm.value;
    const templateParams = {
      name: formData.name,
      email: formData.email,
      question: formData.question,
    };

    emailjs
      .send(
        'service_zwwrp9x',
        'template_8iuig6h',
        templateParams,
        'pVjIn8HGmlDxDMI2v'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          this.isSubmitted = true;
          this.contactForm.reset();
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = 'Failed to send email. Please try again later.';
          this.isLoading = false;
        }
      );

    return true;
  }
}
