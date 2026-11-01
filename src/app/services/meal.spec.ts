import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MealService } from './meal.service';

describe('MealService', () => {
  let service: MealService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MealService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encode the search query in the request URL', () => {
    service.searchMeals('chicken soup').subscribe();

    const request = httpTestingController.expectOne(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken%20soup',
    );
    expect(request.request.method).toBe('GET');
    request.flush({ meals: [] });
  });

  it('should request a meal by id', () => {
    service.getMealById('52772').subscribe();

    const request = httpTestingController.expectOne(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772',
    );
    expect(request.request.method).toBe('GET');
    request.flush({ meals: [] });
  });
});
