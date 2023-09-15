import { Component } from '@angular/core';


interface SideNavToggle{
  collapsed: boolean;
  screenwidth:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vertical-navbar_angular';

  isSideNavCollapsed = true;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenwidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

