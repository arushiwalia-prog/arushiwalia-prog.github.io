import { Component, OnInit,EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';
import {ingredients} from "../../shared/ingredients.model";
import {shoppingListService} from "../shopping-service";
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('NameInput',{static : false}) nameInputRef : ElementRef;
  @ViewChild('AmtInput',{static : false}) amtInputRef : ElementRef;
 
  constructor(private shoppingListService : shoppingListService) { }

  ngOnInit(): void {
  }

  OnAddIng(){
    const IngName = this.nameInputRef.nativeElement.value;
    const IngAmt = this.amtInputRef.nativeElement.value;
    const newIngredient = new ingredients(IngName,IngAmt);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }
}
