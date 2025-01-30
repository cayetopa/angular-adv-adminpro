import { Component } from '@angular/core';
import { SidebardService } from 'src/app/services/sidebard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItems: any[] = [];

  constructor(
    private sidebardService: SidebardService
  ){
    this.menuItems = this.sidebardService.menu;
  }


}
