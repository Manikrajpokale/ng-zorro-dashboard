import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: false
})
export class MainLayoutComponent {
  isCollapsed = false;
  collapsedWidth = 80;
  showBackdrop = false;
  isMobile = false;
  menuItems = [
     {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      title: 'User',
      icon: 'user',
      children: [
        { title: 'Tom', route: '/user/tom' },
        { title: 'Bill', route: '/user/bill' },
        { title: 'Alex', route: '/user/alex' }
      ]
    },
    {
      title: 'Team',
      icon: 'team',
      children: [
        { title: 'Team 1', route: '/team/team1' },
        { title: 'Team 2', route: '/team/team2' }
      ]
    },
    {
      title: 'File',
      icon: 'file',
      route: '/file'
    }
  ];

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {

  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.collapsedWidth = this.isMobile ? 0 : 80;

        if (!this.isMobile) {
          this.showBackdrop = false;
        }
      });
  }
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.showBackdrop = this.isMobile && !this.isCollapsed;
  }

  closeSidebar(): void {
    this.isCollapsed = true;
    this.showBackdrop = false;
  }
  onMenuItemClick(): void {
    if (this.isMobile) {
      this.closeSidebar();
    }
  }
}
