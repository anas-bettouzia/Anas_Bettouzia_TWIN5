import { Component } from '@angular/core';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  title: string =''
  categories : Categorie[] = [
    {"id":1,"title":"Grand électroménager",
    "image":"assets/images/four-electrique.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/electro.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/11.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/12.jpeg",
    "description":"", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/GEM.png", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/15.png",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","available":false},
    ]

    afficherDescription(id:number){
      //forEach : ES
      
      // this.categories.forEach(element => {
      //   if (element.id == id){
      //     alert(element.description)
      //   }
      // })


      //filter :ES
      let category = this.categories.filter(element => element.id == id)[0]
      alert(category.description)
    }

}
