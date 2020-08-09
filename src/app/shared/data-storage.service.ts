import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe/recipe.model';
import { recipeService } from '../recipe/recipe.service';
import { map, tap} from 'rxjs/operators';
import { ingredients } from './ingredients.model';

@Injectable({
providedIn: 'root',
})
export class DataStorageService {
    constructor( private http: HttpClient, private recipeService: recipeService) {}

    storeRecipe() {
        const recipes = this.recipeService.getRecipe();
        this.http.put('https://work2-c3f3a.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    fecthRecipe() {
       return this.http.get<Recipe[]>
       ('https://work2-c3f3a.firebaseio.com/recipes.json').pipe(map(recipe => {
        return recipe.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
       }),
       tap(recipe => {
        this.recipeService.setRecipe(recipe);
      }));
    }
}