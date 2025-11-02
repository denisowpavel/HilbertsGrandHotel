import {Component, OnInit, signal} from '@angular/core';
import { TuiAsideComponent, TuiAsideGroupComponent, TuiAsideItemDirective } from '@taiga-ui/layout';
import { TuiDataListComponent, TuiDropdownDirective } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../navigation-service';

@Component({
  selector: 'app-side-menu',
  imports: [
    TuiAsideComponent,
    TuiAsideItemDirective,
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
export class SideMenu implements OnInit{


  protected readonly routes: any = {};
  protected expanded = signal(true);
  protected handleToggle(): void {
    this.expanded.update((e) => !e);
  }

  constructor(public navigationService: NavigationService) {}

  ngOnInit() {
  }
}
