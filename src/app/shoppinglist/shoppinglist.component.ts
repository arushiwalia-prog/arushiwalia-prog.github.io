import { Component, OnInit, OnDestroy } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';
import {shoppingListService} from './shopping-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],

})
export class ShoppinglistComponent implements OnInit  {
  Ingredients : ingredients[];
  //private idChangedSub : Subscription;
  constructor(private shoppingListService : shoppingListService) { }

  ngOnInit(): void {
    this.Ingredients = this.shoppingListService.getShoppingList();
    // this.idChangedSub = this.shoppingListService.ingredientChanged.subscribe(
    //   (Ingredients : ingredients[]) => {
    //     this.Ingredients = Ingredients;
    //   });
    
    }

    // ngOnDestroy():void{
    //   this.idChangedSub.unsubscribe();
    // }
  }

  

