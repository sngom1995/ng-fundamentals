import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: [`
        em {float: right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :ms-input-placeholder {color: #999;}
    `]
})
export class ProfileComponent implements OnInit{

      constructor(private userService: UserService, private router: Router) {
      }
      profileForm: FormGroup;
      private firstName: FormControl;
      private lastName: FormControl;
      ngOnInit(): void {
         this.firstName = new FormControl(this.userService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
         this.lastName = new FormControl(this.userService.currentUser.lastName, Validators.required);
         this.profileForm = new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName
        });
      }
      validateFirstName(): boolean {
        return this.firstName.valid || this.firstName.untouched;
      }
      validateLastName(): boolean {
        return this.lastName.valid || this.lastName.untouched;
      }
      saveProfile(formValues): void {
        if (this.profileForm.valid) {
          this.userService.updateCurrentUser(formValues.firstName, formValues.lastName);
          this.router.navigate(['events']);
        }
      }
      cancel(): void {
        this.router.navigate(['events']);
      }
}
