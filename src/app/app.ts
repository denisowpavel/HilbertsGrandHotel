import {TuiDataListComponent, TuiDropdownDirective, TuiOptGroup, TuiRoot, TuiTextfieldComponent} from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiItem, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiIcon,
  TuiLink,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiBreadcrumbs,
  TuiChevron,
  TuiFade,
  TuiSwitch,
  TuiTabs, TuiTabsHorizontal,
} from '@taiga-ui/kit';
import {
  TuiCardLarge,
  TuiDrawerDirective,
  TuiForm,
  TuiHeader,
  TuiNavigation
} from '@taiga-ui/layout';
import { KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SideMenu} from './modules/core/navigation/side-menu/side-menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TuiRoot,
    FormsModule,
    KeyValuePipe,
    NgForOf,
    NgIf,
    TuiAppearance,
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiBreadcrumbs,
    TuiButton,
    TuiCardLarge,
    TuiChevron,
    TuiDataList,
    TuiDropdown,
    TuiFade,
    TuiForm,
    TuiHeader,
    TuiIcon,
    TuiLink,
    TuiNavigation,
    TuiRepeatTimes,
    TuiSwitch,
    TuiTabs,
    TuiTextfield,
    TuiTitle,
    TuiDrawerDirective,
    TuiOptGroup,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiItem,
    TuiTabsHorizontal,
    TuiTextfieldComponent,
    SideMenu,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly breadcrumbs = ['Home', 'Angular', 'Repositories', 'Taiga UI'];

}
