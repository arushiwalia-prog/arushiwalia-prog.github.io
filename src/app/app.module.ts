import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { RdetailComponent } from './recipe/rdetail/rdetail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {shoppingListService} from './shoppinglist/shopping-service';
import { UsersComponent } from './users/users.component';
import { HttpClientModule} from "@angular/common/http";
import { userService } from "./users/userlist.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeeditComponent } from './recipe/recipeedit/recipeedit.component';
import { RecipestartComponent } from './recipe/recipestart/recipestart.component';
import { recipeService } from './recipe/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { loadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipeComponent,
    HeaderComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RdetailComponent,
    DropdownDirective,
    UsersComponent,
    RecipeeditComponent,
    RecipestartComponent,
    AuthComponent,
    loadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [shoppingListService, userService, recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
