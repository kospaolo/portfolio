import { Component, AfterViewInit, inject } from '@angular/core';
import { ToastrService } from "ngx-toastr";

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  private toast: ToastrService = inject(ToastrService);

  ngAfterViewInit(): void {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(
      () => {
        this.toast.success('Email copied to clipboard!', 'Success');
      },
      (err) => {
        this.toast.error('Failed to copy email. Please try again.', 'Error');
      }
    );
  }
}
