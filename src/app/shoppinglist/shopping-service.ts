// import {EventEmitter} from "@angular/core";
import {ingredients} from "../shared/ingredients.model";
import {Subject} from "rxjs";
export class shoppingListService{
    // ingredientChanged = new EventEmitter<ingredients>();
    ingredientChanged = new Subject<ingredients>();
    private Ingredients : ingredients[] = [
        new ingredients('Onions',30),
        new ingredients('Paneer',100),
    ];

    getShoppingList(){
      
        return this.Ingredients.slice();
    }

    onIngredientAdded(ingredient : ingredients){
        this.Ingredients.push(ingredient);
        // this.ingredientChanged.emit(this.Ingredients.slice());
        // this.ingredientChanged.next(this.Ingredients.slice());
      }
}