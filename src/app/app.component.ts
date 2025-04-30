import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createQueryAnimations } from './animations/default-transitions.animations';
import { PortalModule } from '@angular/cdk/portal';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut') // necessary for animate modal when its removed from the DOM
  ]
})
export class AppComponent {
  title = 'wallet-manager';

}
