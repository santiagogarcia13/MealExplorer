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
  description: string =
    'A hybrid mobile app built with Ionic and Angular that displays recipes from TheMealDB public API.';

  members: Member[] = [
    { name: 'George Aeron Nunez', role: 'Home and About pages, documentation' },
    { name: 'Santiago Garcia', role: 'API service, interface, Recipes page' },
    { name: 'Mohammad Atacador', role: 'Details page and routing' },
    { name: 'Jessa Sofia Dela Cruz', role: 'Reusable header, testing, APK build' },
    { name: 'John Alfred Nava', role: 'Project contributor' },
  ];
}