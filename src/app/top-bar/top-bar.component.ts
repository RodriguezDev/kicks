import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  navSolid: boolean;
  desktop: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
  screenWidth;

  constructor() { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.desktop = window.innerWidth <= 800 ? false : true; // < 800 pixel == mobile here. 
    this.menuOpen = false;
    this.navSolid = false;
    this.searchOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 800) {
      this.desktop = false;
    } else {
      this.desktop = true;
    }
  }

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event) {
    const spaceFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navSolid = spaceFromTop > 100 ? true : false;
  }

  public menuToggled() {
    this.menuOpen = this.menuOpen ? false : true;
  }

  public searchToggled() {
    
    if (this.searchOpen) {
      this.searchOpen = false;
      // For if the user stops search while scrolled on page. 
      const spaceFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.navSolid = spaceFromTop > 100 ? true : false;
    } else {
      this.navSolid = true;
      this.searchOpen = true;
    }
  }
}
