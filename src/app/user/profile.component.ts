import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTER_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private authService: AuthService, private router: Router,
      @Inject(TOASTER_TOKEN) private toastr: Toastr) {}
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup(
      {
        firstName: this.firstName,
        lastName: this.lastName
      }
    );
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  cancel() {
    this.router.navigate(['/events']);
  }
  logOut() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigate(['/user/login']);
      }
    );
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues).subscribe(
        () => {
          this.toastr.success('Profile Saved');
        }
      );
    }
}
}
