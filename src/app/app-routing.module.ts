import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UsersComponent } from './users/users.component';
import { RecipestartComponent } from './recipe/recipestart/recipestart.component';
import { RdetailComponent } from './recipe/rdetail/rdetail.component';
import { RecipeeditComponent } from './recipe/recipeedit/recipeedit.component';
import { AuthComponent } from './auth/auth.component';
import { ResolverService } from './recipe/resolver-service';
const routes: Routes = [
  { path: '', redirectTo: '/recipes' , pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent , children: [
    {path: '', component: RecipestartComponent, resolve: [ResolverService]},
    {path: 'new', component: RecipeeditComponent, resolve: [ResolverService]},
    {path: ':id', component: RdetailComponent, resolve: [ResolverService]},
    {path: ':id/edit', component: RecipeeditComponent, resolve: [ResolverService]},
  ]
  },
  { path: 'shoppinglist', component: ShoppinglistComponent },
  { path: 'users', component: UsersComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // for configuration
  exports: [RouterModule]
})
export class AppRoutingModule { }
