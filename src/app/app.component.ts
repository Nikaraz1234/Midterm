import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './User';
import { ParentUser } from './ParentUser';
import { ChildUser } from './ChildUser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nika_Razmadze';

  Users: User[] = [{
    firstName: "Nika",
    lastName: "Razmadze",
    age: 19,
  },
  {
    firstName: "vaxo",
    lastName: "megitidze",
    age: 17,
  },
  {
    firstName: "lasha",
    lastName: "qibrowashvili",
    age: 29,
  },
  {
    firstName: "mama",
    lastName: "mamitidze",
    age: 49,
  },
  {
    firstName: "vako",
    lastName: "zhividze",
    age: 30,
  },
]

childUsers: ChildUser[] = [];

parentUsers: ParentUser[] = [];

handleChildUsers(childUsers: ChildUser[]) {
  this.childUsers = childUsers;
}

}
