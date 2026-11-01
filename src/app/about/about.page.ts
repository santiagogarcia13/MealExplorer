import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular';

import { PageHeaderComponent } from '../components/page-header/page-header.component';

interface Member {
  name: string;
  role: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
  standalone: true,
  imports: [RouterLink, IonButton, IonContent, PageHeaderComponent],
})
export class AboutPage {
  projectTitle = 'MealExplorer';

  description: string =
    'A hybrid mobile app built with Ionic and Angular that helps users discover meals and recipe details using TheMealDB public API.';

  course = 'BSIT 3-F';

  members: Member[] = [
    {
      name: 'George Aeron Nunez',
      role: 'Implemented the Home and About pages and prepared project documentation.',
    },
    {
      name: 'Santiago Garcia',
      role: 'Integrated the meal API and developed the Recipes page and interface.',
    },
    {
      name: 'Mohammad Atacador',
      role: 'Developed recipe details and configured app navigation.',
    },
    {
      name: 'Jessa Sofia Dela Cruz',
      role: 'Created the reusable page header, tested the app, and built the Android APK.',
    },
    {
      name: 'John Alfred Nava',
      role: 'Contributed to project planning and application development.',
    },
  ];
}
