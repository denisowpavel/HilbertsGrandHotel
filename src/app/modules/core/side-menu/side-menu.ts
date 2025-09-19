import { Component, signal } from '@angular/core';
import { TuiAsideComponent, TuiAsideGroupComponent, TuiAsideItemDirective } from '@taiga-ui/layout';
import { TuiDataListComponent, TuiDropdownDirective } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';
import {RouterLink, RouterLinkActive} from '@angular/router';

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
  protected expanded = signal(false);
  protected handleToggle(): void {
    this.expanded.update((e) => !e);
  }
}
