import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss'],
})
export class WelcomeSectionComponent implements OnInit {

  userForm = this.fb.group({
    username: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {}

  register(): void {
    if(this.userForm.valid) {
      console.log(this.userForm.value);
      this.userService.saveUsername(this.userForm.get('username').value);
      this.router.navigate(['/']);
    }
  }

}
