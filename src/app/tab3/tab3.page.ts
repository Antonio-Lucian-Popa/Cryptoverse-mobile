import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  isEditDialogOpened = false;
  isModalInfoOpened = false;
  username = '';

  userForm = this.fb.group({
    username: ['', Validators.required]
  });

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.username = this.userService.getUsernameFromLocal();
    this.userForm.get('username').patchValue(this.username);
  }

  onWillDismiss(event: Event) {
    this.isEditDialogOpened = false;
  }

  onWillDismissInfo(event: Event) {
    this.isModalInfoOpened = false;
  }

  openEditDialog(): void {
    this.isEditDialogOpened = true;
  }

  closeEditDialog(): void {
    this.isEditDialogOpened = false;
  }

  update(): void {
    if(this.userForm.valid) {
      this.userService.saveUsername(this.userForm.get('username').value);
      this.username = this.userService.capitalizeFirstLetter(this.userForm.get('username').value);
      this.isEditDialogOpened = false;
    }
  }

  openInfoModal() {
    this.isModalInfoOpened = true;
   }

   dismissInfoModal() {
     this.isModalInfoOpened = false;
   }

}
