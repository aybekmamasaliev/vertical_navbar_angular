import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  collapsed: boolean;
  screenwidth:number;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter

  collapsed=false ;
  navData=navbarData;
  screenWidth = 0;

  toggleCollapse():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenwidth: this.screenWidth })
  }

  closeSidenav():void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed ,  screenwidth: this.screenWidth })
  }
}
