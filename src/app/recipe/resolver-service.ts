import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { recipeService } from './recipe.service';

@Injectable({
   providedIn : 'root',
})
export class ResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService: DataStorageService, private RecipeService: recipeService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.RecipeService.getRecipe();
        if (recipes.length === 0) {
            return this.dataStorageService.fecthRecipe();
        } else {
            return recipes;
        }
    }
}