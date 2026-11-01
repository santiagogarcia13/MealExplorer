import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';

import type { MealResponse } from '../models/meal';

@Injectable({ providedIn: 'root' })
export class MealService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  private readonly http = inject(HttpClient);

  searchMeals(name: string): Observable<MealResponse> {
    return this.http.get<MealResponse>(
      `${this.baseUrl}/search.php?s=${encodeURIComponent(name)}`
    );
  }

  getMealById(id: string): Observable<MealResponse> {
    return this.http.get<MealResponse>(
      `${this.baseUrl}/lookup.php?i=${encodeURIComponent(id)}`,
    );
  }
}