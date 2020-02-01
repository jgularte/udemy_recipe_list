import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../../services/data-storage.service';
import {LoggingService} from '../../services/logging-service.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css', '../../app.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService,
              private dataStorageService: DataStorageService,
              private loggingService: LoggingService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    const recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imgPath'],
      this.recipeForm.value['ingredients']);

    if (this.editMode) {
      this.recipeService.editRecipe(this.id, recipe);
      this.dataStorageService.storeRecipes();
    } else {
      this.recipeService.addRecipe(recipe);
      this.dataStorageService.storeRecipes();
    }

    this.onCancel();
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImg = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ing of recipe['ingredients']) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ing.name, Validators.required),
            'quantity': new FormControl(ing.quantity, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgPath': new FormControl(recipeImg, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
      'addIngredient': new FormGroup({
        'name': new FormControl(null),
        'quantity': new FormControl(null)
      })
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(this.recipeForm.controls['addIngredient'].get('name').value, Validators.required),
        'quantity': new FormControl(this.recipeForm.controls['addIngredient'].get('quantity').value, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      }));
    this.recipeForm.controls['addIngredient'].reset();
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
