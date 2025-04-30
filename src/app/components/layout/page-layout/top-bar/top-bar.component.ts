import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayoutService } from '../dashboard-section-layout.service';
import { AppkitBtnComponent } from "../../../base/appkit-btn/appkit-btn.component";

@Component({
  selector: 'top-bar',
  imports: [AppkitBtnComponent],
  host: {
    class: 'pr-5 h-16 py-2 gap-4 w-full fixed top-0 flex justify-between items-center bg-mutedDark z-[100]'
  },
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  
  constructor(private pageLayoutService: PageLayoutService) {
  
  }

  onMenuClick(){
    this.pageLayoutService.toggleSidebar();
  }
}
