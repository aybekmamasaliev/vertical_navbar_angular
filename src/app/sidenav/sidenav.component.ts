import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
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
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter

  collapsed=false ;
  navData=navbarData;
  screenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenwidth: this.screenWidth})
    }
    if(this.screenWidth>768){
      this.collapsed = true;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenwidth: this.screenWidth})
    }
    
  }

  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }

  toggleCollapse():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenwidth: this.screenWidth })
  }

  closeSidenav():void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed ,  screenwidth: this.screenWidth })
  }
}
