import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
    readonly navigationResource = httpResource<any>(() => `/api-mock/navigation.json`);

  public sideNavigation: Signal<IMenuNode[]> = computed(() => {
    if(!this.navigationResource.hasValue() || !this.navigationResource.value().sideMenu){
      return [] as IMenuNode[];
    }
    return this.navigationResource.value().sideMenu as IMenuNode[];
  });

  addBadge(path: string) {
    console.log('path', path)
  //   this.sideNavigation.update((actualSideNavigation) => {
  //     let res = [...actualSideNavigation];
  //     res = res.map((group) => ({
  //       ...group,
  //       children: group.children?.map((page) => ({
  //         ...page,
  //         badge: page.badge ? page.badge + 1 : undefined,
  //       })),
  //     }));
  //     return res;
  //   });
  }
}
