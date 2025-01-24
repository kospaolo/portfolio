import {Component, inject} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private toast: ToastrService = inject(ToastrService);

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
