import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser } from '../ChildUser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  @Output() childUsersEmitter = new EventEmitter<ChildUser[]>();
  @Input() users: any;

  childUsers: ChildUser[] = [
    { Id: 1, firstname: 'nikalai', lastname: 'nikalaevna', DateOfBirth: '2010-01-01', PhoneNumber: '855787312', email: 'nikush@example.com' },
    { Id: 2, firstname: 'dsadas', lastname: 'dsadas', DateOfBirth: '1997-02-02', PhoneNumber: '0987654321', email: 'alex@example.com' }
  ];

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      Id: new FormControl(null, Validators.required),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      DateOfBirth: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  emitChildUsers() {
    this.childUsersEmitter.emit(this.childUsers);
  }

  addUser() {
    if (this.userForm.valid) {
      this.childUsers.push(this.userForm.value);
      this.userForm.reset();
    }
  }
}
