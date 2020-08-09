import { Component, OnInit , Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private recipeService: recipeService, private route: ActivatedRoute, private router: Router) { }
  get ingredientsControls() {
    // getter
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  ngOnInit(): void {
   this.route.params.subscribe(
    (params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
      // we always call the form when the route parameter changes
    }
   );

  }
  onSubmit() {
  if (this.editMode) {
    // updating the present recipe
    this.recipeService.UpdateRecipe(this.id, this.recipeForm.value);

  } else {
    // creating a new recipe
    this.recipeService.addNewRecipe(this.recipeForm.value);
  }
  this.Cancel();
  }
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name : new FormControl(null, Validators.required),
        amount : new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    );
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe =  this.recipeService.getSingleRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription =  recipe.description;
      if (recipe.ingredients) {
        for (const ingredients of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredients.name, Validators.required),
              amount : new FormControl(ingredients.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  Cancel() {
    this.router.navigate(['../', {relativeTo : this.route} ]);
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
