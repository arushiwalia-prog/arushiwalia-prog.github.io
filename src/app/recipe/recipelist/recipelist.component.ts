import { Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: recipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.recipes = this.recipeService.getRecipe();
   this.subscription =  this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
  }

  OnNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
