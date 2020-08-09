import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import { ingredients } from '../../shared/ingredients.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-rdetail',
  templateUrl: './rdetail.component.html',
  styleUrls: ['./rdetail.component.css']
})
export class RdetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  @Output() recipefeatureSelected = new EventEmitter<string>();

  constructor(private recipeService: recipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // cast a string into number by adding + sign
        this.id = +params['id'];
        this.recipe = this.recipeService.getSingleRecipe(this.id);
      }
    );
  }

  Onselect(feature: string) {
    this.recipefeatureSelected.emit(feature);
  }

  OnEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    /*this.router.navigate(['../', this.id, 'edit']); this one or above approach is used, in this we are going
     one level up and then tracing the id and then going to edit and therefore not using the relative path*/
  }

  OnDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
