import type { OnInit } from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonSearchbar,
  IonSpinner,
} from '@ionic/angular';
import type { SearchbarCustomEvent } from '@ionic/angular';

import { PageHeaderComponent } from '../components/page-header/page-header.component';
import type { Meal } from '../models/meal';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrl: './recipes.page.scss',
  standalone: true,
  imports: [
    RouterLink,
    IonButton,
    IonContent,
    IonSearchbar,
    IonSpinner,
    PageHeaderComponent,
  ],
})
export class RecipesPage implements OnInit {
  readonly query = signal('chicken');
  readonly meals = signal<Meal[]>([]);
  readonly loading = signal(false);
  readonly errorMsg = signal('');
  private requestVersion = 0;

  private readonly mealService = inject(MealService);

  ngOnInit(): void {
    this.search();
  }

  onSearch(event: SearchbarCustomEvent): void {
    this.query.set(event.detail.value?.trim() ?? '');
    this.search();
  }

  search(): void {
    const requestVersion = ++this.requestVersion;
    const query = this.query().trim();
    if (!query) {
      this.meals.set([]);
      this.loading.set(false);
      this.errorMsg.set('');
      return;
    }

    this.loading.set(true);
    this.errorMsg.set('');
    this.meals.set([]);
    this.mealService.searchMeals(query).subscribe({
      next: (res) => {
        if (requestVersion !== this.requestVersion) return;
        this.meals.set(res.meals ?? []);
        this.loading.set(false);
      },
      error: (error: { status?: number }) => {
        if (requestVersion !== this.requestVersion) return;
        this.errorMsg.set(
          error.status === 0
            ? 'Could not connect to the recipe service. Check your internet connection and try again.'
            : 'The recipe service is temporarily unavailable. Please try again.',
        );
        this.loading.set(false);
      },
    });
  }
}