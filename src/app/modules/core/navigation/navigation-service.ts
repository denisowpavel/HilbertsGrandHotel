import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public sideNavigation = signal<IMenuNode[]>([
    {
      label: 'Main',
      icon: 'house',
      open: true,
      children: [
        { label: 'Room by day', icon: 'calendar-days', badge: 2 },
        { label: 'Room by hour', icon: 'calendar-clock' },
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
  ]);

  addBadge() {
    this.sideNavigation.update((actualSideNavigation) => {
      let res = [...actualSideNavigation];
      res = res.map((group) => ({
        ...group,
        children: group.children?.map((page) => ({
          ...page,
          badge: page.badge ? page.badge+1 : undefined,
        })),
      }));
      return res;
    });
  }
}
