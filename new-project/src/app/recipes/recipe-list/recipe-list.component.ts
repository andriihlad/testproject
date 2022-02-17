import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Anns recipe', 'Ann wants to dance with this recipe', 'https://www.abetterchoice.com.au/app/uploads/2020/07/Warm-Beef-Salad.jpg'),
 
    new Recipe('Shitty Pitty recipe', 'THis is shitty pitty recipe get out!!!!!!!', 
    'https://assets.marthastewart.com/styles/wmax-1500/d25/ed101894_0306_parm_chickn/ed101894_0306_parm_chickn_sq.jpg?itok=Xy3M3SJP') ]
  constructor() { }
 

  ngOnInit(): void {
  }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
