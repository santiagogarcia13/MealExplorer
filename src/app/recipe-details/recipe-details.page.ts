import type { OnInit } from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonButton,
  IonChip,
  IonContent,
  IonSpinner,
} from '@ionic/angular';

import { PageHeaderComponent } from '../components/page-header/page-header.component';
import type { Meal } from '../models/meal';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrl: './recipe-details.page.scss',
  standalone: true,
  imports: [
    IonContent,
    IonSpinner,
    IonChip,
    IonButton,
    PageHeaderComponent,
  ],
})
export class RecipeDetailsPage implements OnInit {
  readonly meal = signal<Meal | null>(null);
  readonly ingredients = signal<string[]>([]);
  readonly loading = signal(true);
  readonly errorMsg = signal('');
  private mealId: string | null = null;

  private readonly route = inject(ActivatedRoute);
  private readonly mealService = inject(MealService);

  ngOnInit(): void {
    this.mealId = this.route.snapshot.paramMap.get('id');
    this.loadMeal();
  }

  loadMeal(): void {
    if (!this.mealId) {
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.errorMsg.set('');
    this.mealService.getMealById(this.mealId).subscribe({
      next: (res) => {
        const meal = res.meals?.[0] ?? null;
        this.meal.set(meal);
        if (meal) this.buildIngredients(meal);
        this.loading.set(false);
      },
      error: (error: { status?: number }) => {
        this.errorMsg.set(
          error.status === 0
            ? 'Could not connect to the recipe service. Check your internet connection and try again.'
            : 'The recipe service is temporarily unavailable. Please try again.',
        );
        this.loading.set(false);
      },
    });
  }

  private buildIngredients(meal: Meal): void {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredients.push(`${measure ?? ''} ${ing}`.trim());
      }
    }
    this.ingredients.set(ingredients);
  }
}