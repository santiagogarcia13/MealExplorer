import type { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'recipes',
    loadComponent: () => import('./recipes/recipes.page').then((m) => m.RecipesPage),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./recipe-details/recipe-details.page').then((m) => m.RecipeDetailsPage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then((m) => m.AboutPage),
  },
];