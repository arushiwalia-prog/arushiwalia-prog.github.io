import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
// import { recipeService } from './recipe.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {

  constructor() { }
  selectedRecipe: Recipe;
  loadedFeature: any;
  ngOnInit(): void {
    // this.recipeService.RecipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
