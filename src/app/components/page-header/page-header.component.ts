import { Component, Input } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
} from '@ionic/angular';

@Component({
  selector: 'app-page-header',
  standalone: true,
  styleUrl: './page-header.component.scss',
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="page-header">
      <ion-toolbar>
        @if (showBackButton) {
          <ion-buttons slot="start">
            <ion-back-button
              defaultHref="/home"
              text=""
              aria-label="Go back">
            </ion-back-button>
          </ion-buttons>
        }
        <ion-title slot="start">{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() showBackButton = true;
}