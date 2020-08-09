import { ingredients } from '../shared/ingredients.model';

export class Recipe{
    public name : string;
    public description : string;
    public imagePath : string;
    public ingredients : ingredients[];

    constructor(name: string, desc: string, imagepath: string, ingredients: ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }
}
  