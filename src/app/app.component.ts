import { Component } from '@angular/core';
import { PageLayoutComponent } from "./components/layout/page-layout/page-layout.component";

@Component({
  selector: 'app-root',
  imports: [PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wallet-manager';
}
