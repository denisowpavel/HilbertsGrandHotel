import { Component, signal } from '@angular/core';
import { TuiAsideComponent, TuiAsideGroupComponent, TuiAsideItemDirective } from '@taiga-ui/layout';
import { TuiDataListComponent, TuiDropdownDirective } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    TuiAsideComponent,
    TuiAsideItemDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiBadge,
    TuiAsideGroupComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  standalone: true,
})
export class SideMenu {
  protected readonly routes: any = {};
  protected expanded = signal(true);
  protected handleToggle(): void {
    this.expanded.update((e) => !e);
  }
  sideNavigation: IMenuNode[] = [
    {
      label: 'Main',
      icon: 'house',
      open: true,
      children: [
        { label: 'Room by day', icon: 'calendar-days', badge: '2' },
        { label: 'Room by hour', icon: 'calendar-clock',  },
        { label: 'Open occupancies', icon: 'book-open' },
        { label: 'Closed occupancies', icon: 'book-open-check' },
        { label: 'Clients', icon: 'users' },
        { label: 'Payments', icon: 'credit-card' },
        { label: 'Employee Schedule', icon: 'clipboard-clock' },
        { label: 'Employees', icon: 'id-card-lanyard' },
        { label: 'Inventory', icon: 'drill' },
        { label: 'CCTV', icon: 'cctv' },
      ],
    },
    {
      label: 'Reports',
      icon: 'chart-line',
      open: true,
      children: [{ label: 'Room occupancies', icon: 'bath' }],
    },
    {
      label: 'Directories',
      icon: 'list',
      open: true,
      children: [
        { label: 'Rooms', icon: 'bed-double' },
        { label: 'Services', icon: 'hand-platter' },
        { label: 'Payment Categories', icon: 'square-menu' },
        { label: 'Companies', icon: 'factory' },
        { label: 'Users', icon: 'user-cog' },
      ],
    },
  ];
}
