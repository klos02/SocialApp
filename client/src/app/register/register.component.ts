import { Component, input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  usersFromHomeComponent = input.required<any>()
  model: any = {};

  register(){
    console.log(this.model);
  }
  cancel(){
    console.log('Cancelled');
  }
}
