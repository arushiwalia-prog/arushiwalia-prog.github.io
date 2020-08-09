import {EventEmitter, Input} from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
import { ingredients } from '../shared/ingredients.model';


export class recipeService {
    // public RecipeSelected = new EventEmitter<Recipe>();
    public RecipeSelected = new Subject<Recipe>();
    @Input() searchedRecipe;
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    // = [
    //     new Recipe('Recipe 1','Lets make our recipe1','https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg',[
    //         new ingredients('Carrots', 1),
    //         new ingredients('Onions', 2)
    //     ]),
    //     new Recipe('Recipe 2','Lets make our recipe2','https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg',[
    //         new ingredients('Tomatoes', 8),
    //         new ingredients('Onions', 2)
    //     ]),
    //   ];

    getRecipe() {
        return this.recipes.slice();
    }

    getSingleRecipe(id: number) {
        return this.recipes[id];
    }

    UpdateRecipe(id: number, addrecipe: Recipe) {
        this.recipes[id] = addrecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    addNewRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
    search(){

    }

    setRecipe(recipe: Recipe[]) {
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }
}