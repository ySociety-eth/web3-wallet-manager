import { Component } from '@angular/core';
import { PageLayoutService } from '../page-layout.service';
import { AppkitBtnComponent } from "../../../base/appkit-btn/appkit-btn.component";

@Component({
  selector: 'app-top-bar',
  imports: [AppkitBtnComponent],
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent {
  
  constructor(private pageLayoutService: PageLayoutService) {
  
  }

  onMenuClick(){
    this.pageLayoutService.toggleSidebar();
  }
}
