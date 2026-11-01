import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

import { PageHeaderComponent } from '../components/page-header/page-header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrl: 'home.page.scss',
  standalone: true,
  imports: [IonContent, IonButton, RouterLink, PageHeaderComponent],
})
export class HomePage {}