/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../shared/model/model.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/platform-browser/src/browser/title';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../+postDetail/postDetail.component.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '../+postDetail/postDetail.component';
import * as import23 from '../+post/post.component.ngfactory';
import * as import24 from '../+post/post.component';
import * as import25 from '@angular/core/src/security';
export class Wrapper_HomeComponent {
  context:import0.HomeComponent;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.HomeComponent(p0,p1,p2,p3);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_HomeComponent_Host:import2.RenderComponentType = (null as any);
class _View_HomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HomeComponent_0_4:Wrapper_HomeComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent_Host0,renderType_HomeComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'blog',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomeComponent_0_4 = new Wrapper_HomeComponent(this.parentInjector.get(import8.ModelService),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import10.Router),this.parentInjector.get(import11.Title));
    this._appEl_0.initComponent(this._HomeComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HomeComponent_0_4.context,this.projectableNodes,(null as any));
    var disposable_0:Function = this.renderer.listenGlobal('window','scroll',this.eventHandler(this._handle_scroll_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],[disposable_0],([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomeComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._HomeComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_scroll_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this._HomeComponent_0_4.context.onWindowScroll()) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_HomeComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HomeComponent_Host === (null as any))) { (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeComponentNgFactory:import13.ComponentFactory<import0.HomeComponent> = new import13.ComponentFactory<import0.HomeComponent>('blog',viewFactory_HomeComponent_Host0,import0.HomeComponent);
const styles_HomeComponent:any[] = ([] as any[]);
var renderType_HomeComponent:import2.RenderComponentType = (null as any);
class _View_HomeComponent0 extends import1.AppView<import0.HomeComponent> {
  _anchor_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import14.Wrapper_NgIf;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import15.Wrapper_NgFor;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import14.Wrapper_NgIf;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent0,renderType_HomeComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import16.TemplateRef_(this._appEl_0,viewFactory_HomeComponent1);
    this._NgIf_0_6 = new import14.Wrapper_NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'section',new import4.InlineArray4(4,'class','container','id','listPost'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import16.TemplateRef_(this._appEl_4,viewFactory_HomeComponent2);
    this._NgFor_4_6 = new import15.Wrapper_NgFor(this._appEl_4.vcRef,this._TemplateRef_4_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_5 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_7 = new import3.AppElement(7,(null as any),this,this._anchor_7);
    this._TemplateRef_7_5 = new import16.TemplateRef_(this._appEl_7,viewFactory_HomeComponent3);
    this._NgIf_7_6 = new import14.Wrapper_NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this.init(([] as any[]),[
      this._anchor_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6,
      this._anchor_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import18.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    if (((token === import16.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import19.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6.context; }
    if (((token === import16.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import18.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.showPostStt;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.detectChangesInInputProps(this,this._anchor_0,throwOnChange);
    const currVal_4_0_0:any = this.context.listPosts;
    this._NgFor_4_6.check_ngForOf(currVal_4_0_0,throwOnChange,false);
    this._NgFor_4_6.detectChangesInInputProps(this,this._anchor_4,throwOnChange);
    const currVal_7_0_0:boolean = !this.context.listStatus;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.detectChangesInInputProps(this,this._anchor_7,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_HomeComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HomeComponent> {
  if ((renderType_HomeComponent === (null as any))) { (renderType_HomeComponent = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_HomeComponent,{})); }
  return new _View_HomeComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_HomeComponent1 extends import1.AppView<any> {
  _text_0:any;
  _el_1:any;
  /*private*/ _appEl_1:import3.AppElement;
  _PostDetailComponent_1_4:import20.Wrapper_PostDetailComponent;
  _text_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent1,renderType_HomeComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,(null as any),'postDetail',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_1 = new import3.AppElement(1,(null as any),this,this._el_1);
    var compView_1:any = import20.viewFactory_PostDetailComponent0(this.viewUtils,this.injector(1),this._appEl_1);
    this._PostDetailComponent_1_4 = new import20.Wrapper_PostDetailComponent(this.parentInjector.get(import8.ModelService),this.parentInjector.get(import9.ActivatedRoute),new import21.ElementRef(this._el_1),this.renderer);
    this._appEl_1.initComponent(this._PostDetailComponent_1_4.context,([] as any[]),compView_1);
    compView_1.create(this._PostDetailComponent_1_4.context,([] as any[]),(null as any));
    this._text_2 = this.renderer.createText((null as any),'\n',(null as any));
    this.init(([] as any[]).concat([
      this._text_0,
      this._el_1,
      this._text_2
    ]
    ),[
      this._text_0,
      this._el_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.PostDetailComponent) && (1 === requestNodeIndex))) { return this._PostDetailComponent_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.parent.context.post;
    this._PostDetailComponent_1_4.check_post(currVal_1_0_0,throwOnChange,false);
    this._PostDetailComponent_1_4.detectChangesInInputProps(this,this._el_1,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._PostDetailComponent_1_4.detectChangesInHostProps(this,this._el_1,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomeComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_HomeComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_HomeComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _PostComponent_2_4:import23.Wrapper_PostComponent;
  _text_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent2,renderType_HomeComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'post',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import23.viewFactory_PostComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._PostComponent_2_4 = new import23.Wrapper_PostComponent(this.parent.parentInjector.get(import8.ModelService),this.parent.parentInjector.get(import10.Router));
    this._appEl_2.initComponent(this._PostComponent_2_4.context,([] as any[]),compView_2);
    compView_2.create(this._PostComponent_2_4.context,([] as any[]),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.PostComponent) && (2 === requestNodeIndex))) { return this._PostComponent_2_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.$implicit;
    this._PostComponent_2_4.check_post(currVal_2_0_0,throwOnChange,false);
    this._PostComponent_2_4.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._PostComponent_2_4.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomeComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_HomeComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_HomeComponent3 extends import1.AppView<any> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent3,renderType_HomeComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_9 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','noItem'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'img',new import4.InlineArray2(2,'alt','Không có bài viết nào trong mục này'),(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_1,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Chưa có bài viết nào!',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n',(null as any));
    this.init(([] as any[]).concat([
      this._text_0,
      this._el_1,
      this._text_8
    ]
    ),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_9:any = this.parent.context.lolipop;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementProperty(this._el_3,'src',this.viewUtils.sanitizer.sanitize(import25.SecurityContext.URL,currVal_9));
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomeComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_HomeComponent3(viewUtils,parentInjector,declarationEl);
}