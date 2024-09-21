import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  titre : String ="hello"

  person = {
    id : 1,
    name: 'test',
    age:20
  }
  quantity=8;
  imagesrc="/assets/B.jpg"
  height =200;
  width = 200;

  color="blue"

  acheter(){
    this.quantity--;
  }
  // anInputChange(event : Event){
  //   const el = event.target as HTMLInputElement
  //   this.color = el.value
  // }

}
