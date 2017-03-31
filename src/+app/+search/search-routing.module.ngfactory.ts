/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './search-routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from './search.component.ngfactory';
import * as import5 from './search.component';
import * as import6 from '@angular/router/src/router_config_loader';
class SearchRoutingModuleInjector extends import0.NgModuleInjector<import1.SearchRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _SearchRoutingModule_1:import1.SearchRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import3.Injector) {
    super(parent,[import4.SearchComponentNgFactory],([] as any[]));
  }
  get _ROUTES_2():any[] {
        if ((this.__ROUTES_2 == (null as any))) { (this.__ROUTES_2 = [[{
          path: 'search',
          component: import5.SearchComponent
        }
    ]]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.SearchRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._SearchRoutingModule_1 = new import1.SearchRoutingModule();
    return this._SearchRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.SearchRoutingModule)) { return this._SearchRoutingModule_1; }
    if ((token === import6.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SearchRoutingModuleNgFactory:import0.NgModuleFactory<import1.SearchRoutingModule> = new import0.NgModuleFactory(SearchRoutingModuleInjector,import1.SearchRoutingModule);