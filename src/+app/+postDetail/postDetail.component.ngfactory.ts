/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './postDetail.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '../shared/model/model.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './postDetail.component.css.shim';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/common/src/pipes/date_pipe';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import21 from '@angular/router/src/router';
import * as import22 from '@angular/common/src/location/location_strategy';
import * as import23 from '@angular/router/src/directives/router_link';
import * as import24 from '@angular/core/src/security';
export class Wrapper_PostDetailComponent {
  context:import0.PostDetailComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.PostDetailComponent(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
  }
  check_post(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.post = currValue;
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_PostDetailComponent_Host:import4.RenderComponentType = (null as any);
class _View_PostDetailComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _PostDetailComponent_0_4:Wrapper_PostDetailComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PostDetailComponent_Host0,renderType_PostDetailComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'postDetail',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PostDetailComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PostDetailComponent_0_4 = new Wrapper_PostDetailComponent(this.parentInjector.get(import8.ModelService),this.parentInjector.get(import9.ActivatedRoute),new import10.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._PostDetailComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._PostDetailComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PostDetailComponent) && (0 === requestNodeIndex))) { return this._PostDetailComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PostDetailComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._PostDetailComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PostDetailComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_PostDetailComponent_Host === (null as any))) { (renderType_PostDetailComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_PostDetailComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PostDetailComponentNgFactory:import12.ComponentFactory<import0.PostDetailComponent> = new import12.ComponentFactory<import0.PostDetailComponent>('postDetail',viewFactory_PostDetailComponent_Host0,import0.PostDetailComponent);
const styles_PostDetailComponent:any[] = [import13.styles];
var renderType_PostDetailComponent:import4.RenderComponentType = (null as any);
class _View_PostDetailComponent0 extends import3.AppView<import0.PostDetailComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import5.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import14.Wrapper_NgIf;
  _pipe_date_0:import15.DatePipe;
  _pipe_safeHtml_1:import0.SafeHtmlPipe;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PostDetailComponent0,renderType_PostDetailComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'  ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_1 = new import5.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import16.TemplateRef_(this._appEl_1,viewFactory_PostDetailComponent1);
    this._NgIf_1_6 = new import14.Wrapper_NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._pipe_date_0 = new import15.DatePipe(this.parentInjector.get(import17.LOCALE_ID));
    this._pipe_safeHtml_1 = new import0.SafeHtmlPipe(this.parentInjector.get(import18.DomSanitizer));
    this.init(([] as any[]),[
      this._text_0,
      this._anchor_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import19.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = ((this.context.post == (null as any))? (null as any): this.context.post.better_featured_image.source_url);
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.detectChangesInInputProps(this,this._anchor_1,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_PostDetailComponent0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<import0.PostDetailComponent> {
  if ((renderType_PostDetailComponent === (null as any))) { (renderType_PostDetailComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_PostDetailComponent,{})); }
  return new _View_PostDetailComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_PostDetailComponent1 extends import3.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _RouterLinkWithHref_4_3:import20.Wrapper_RouterLinkWithHref;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _RouterLinkWithHref_18_3:import20.Wrapper_RouterLinkWithHref;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _RouterLinkWithHref_42_3:import20.Wrapper_RouterLinkWithHref;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _anchor_50:any;
  /*private*/ _appEl_50:import5.AppElement;
  _TemplateRef_50_5:any;
  _NgIf_50_6:import14.Wrapper_NgIf;
  _text_51:any;
  _anchor_52:any;
  /*private*/ _appEl_52:import5.AppElement;
  _TemplateRef_52_5:any;
  _NgIf_52_6:import14.Wrapper_NgIf;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _arr_65:any;
  _arr_66:any;
  /*private*/ _expr_67:any;
  /*private*/ _expr_68:any;
  /*private*/ _expr_69:any;
  /*private*/ _expr_70:any;
  /*private*/ _expr_71:any;
  /*private*/ _expr_72:any;
  _pipe_date_0_0:any;
  _arr_74:any;
  /*private*/ _expr_75:any;
  _pipe_safeHtml_1_0:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PostDetailComponent1,renderType_PostDetailComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._arr_65 = import2.pureProxy3((p0:any,p1:any,p2:any):any[] => {
      return [
        p0,
        p1,
        p2
      ]
      ;
    });
    this._arr_66 = import2.pureProxy3((p0:any,p1:any,p2:any):any[] => {
      return [
        p0,
        p1,
        p2
      ]
      ;
    });
    this._expr_67 = import1.UNINITIALIZED;
    this._expr_68 = import1.UNINITIALIZED;
    this._expr_69 = import1.UNINITIALIZED;
    this._expr_70 = import1.UNINITIALIZED;
    this._expr_71 = import1.UNINITIALIZED;
    this._expr_72 = import1.UNINITIALIZED;
    this._arr_74 = import2.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_75 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','showPost'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','nav'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_4_3 = new import20.Wrapper_RouterLinkWithHref(this.parentInjector.get(import21.Router),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import22.LocationStrategy));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import2.createRenderElement(this.renderer,this._el_4,'div',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = import2.createRenderElement(this.renderer,this._el_6,'img',new import2.InlineArray4(4,'alt','','src','../../assets/img/ic_arrow_back.svg'),(null as any));
    this._text_9 = this.renderer.createText(this._el_6,' \n                ',(null as any));
    this._el_10 = import2.createRenderElement(this.renderer,this._el_6,'span',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,' Back',(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_13 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_16 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','bg'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_18 = import2.createRenderElement(this.renderer,this._el_16,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_18_3 = new import20.Wrapper_RouterLinkWithHref(this.parentInjector.get(import21.Router),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import22.LocationStrategy));
    this._text_19 = this.renderer.createText(this._el_18,'\n            ',(null as any));
    this._el_20 = import2.createRenderElement(this.renderer,this._el_18,'div',new import2.InlineArray2(2,'class','bgItem'),(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n                ',(null as any));
    this._el_22 = import2.createRenderElement(this.renderer,this._el_20,'img',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_23 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._text_24 = this.renderer.createText(this._el_18,'\n        ',(null as any));
    this._text_25 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_27 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','content'),(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'\n        ',(null as any));
    this._el_29 = import2.createRenderElement(this.renderer,this._el_27,'div',new import2.InlineArray2(2,'class','thumb'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n            ',(null as any));
    this._el_31 = import2.createRenderElement(this.renderer,this._el_29,'img',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_32 = this.renderer.createText(this._el_29,'\n        ',(null as any));
    this._text_33 = this.renderer.createText(this._el_27,'\n        ',(null as any));
    this._el_34 = import2.createRenderElement(this.renderer,this._el_27,'div',new import2.InlineArray2(2,'class','title'),(null as any));
    this._text_35 = this.renderer.createText(this._el_34,'\n            ',(null as any));
    this._el_36 = import2.createRenderElement(this.renderer,this._el_34,'h1',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'',(null as any));
    this._text_38 = this.renderer.createText(this._el_34,'\n            ',(null as any));
    this._el_39 = import2.createRenderElement(this.renderer,this._el_34,'span',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'',(null as any));
    this._text_41 = this.renderer.createText(this._el_34,' | Post by: ',(null as any));
    this._el_42 = import2.createRenderElement(this.renderer,this._el_34,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_42_3 = new import20.Wrapper_RouterLinkWithHref(this.parentInjector.get(import21.Router),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import22.LocationStrategy));
    this._text_43 = this.renderer.createText(this._el_42,'Linh Hoo',(null as any));
    this._text_44 = this.renderer.createText(this._el_34,'\n        ',(null as any));
    this._text_45 = this.renderer.createText(this._el_27,'\n        ',(null as any));
    this._el_46 = import2.createRenderElement(this.renderer,this._el_27,'div',new import2.InlineArray2(2,'class','renderContent'),(null as any));
    this._text_47 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._el_48 = import2.createRenderElement(this.renderer,this._el_46,'span',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_49 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._anchor_50 = this.renderer.createTemplateAnchor(this._el_46,(null as any));
    this._appEl_50 = new import5.AppElement(50,46,this,this._anchor_50);
    this._TemplateRef_50_5 = new import16.TemplateRef_(this._appEl_50,viewFactory_PostDetailComponent2);
    this._NgIf_50_6 = new import14.Wrapper_NgIf(this._appEl_50.vcRef,this._TemplateRef_50_5);
    this._text_51 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._anchor_52 = this.renderer.createTemplateAnchor(this._el_46,(null as any));
    this._appEl_52 = new import5.AppElement(52,46,this,this._anchor_52);
    this._TemplateRef_52_5 = new import16.TemplateRef_(this._appEl_52,viewFactory_PostDetailComponent3);
    this._NgIf_52_6 = new import14.Wrapper_NgIf(this._appEl_52.vcRef,this._TemplateRef_52_5);
    this._text_53 = this.renderer.createText(this._el_46,'\n        ',(null as any));
    this._text_54 = this.renderer.createText(this._el_27,'\n    ',(null as any));
    this._text_55 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_18,'click',this.eventHandler(this._handle_click_18_0.bind(this)));
    this._pipe_date_0_0 = import2.pureProxy2((<_View_PostDetailComponent0>this.parent)._pipe_date_0.transform.bind((<_View_PostDetailComponent0>this.parent)._pipe_date_0));
    var disposable_2:Function = this.renderer.listen(this._el_42,'click',this.eventHandler(this._handle_click_42_0.bind(this)));
    this._pipe_safeHtml_1_0 = import2.pureProxy1((<_View_PostDetailComponent0>this.parent)._pipe_safeHtml_1.transform.bind((<_View_PostDetailComponent0>this.parent)._pipe_safeHtml_1));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._anchor_50,
      this._text_51,
      this._anchor_52,
      this._text_53,
      this._text_54,
      this._text_55
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.RouterLinkWithHref) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._RouterLinkWithHref_4_3.context; }
    if (((token === import23.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._RouterLinkWithHref_18_3.context; }
    if (((token === import23.RouterLinkWithHref) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._RouterLinkWithHref_42_3.context; }
    if (((token === import16.TemplateRef) && (50 === requestNodeIndex))) { return this._TemplateRef_50_5; }
    if (((token === import19.NgIf) && (50 === requestNodeIndex))) { return this._NgIf_50_6.context; }
    if (((token === import16.TemplateRef) && (52 === requestNodeIndex))) { return this._TemplateRef_52_5; }
    if (((token === import19.NgIf) && (52 === requestNodeIndex))) { return this._NgIf_52_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_4_0_0:any = this._arr_65('/blog',this.parent.context.idCategory,this.parent.context.categorySlug);
    this._RouterLinkWithHref_4_3.check_routerLink(currVal_4_0_0,throwOnChange,false);
    this._RouterLinkWithHref_4_3.detectChangesInInputProps(this,this._el_4,throwOnChange);
    const currVal_18_0_0:any = this._arr_66('/blog',this.parent.context.idCategory,this.parent.context.categorySlug);
    this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0,throwOnChange,false);
    this._RouterLinkWithHref_18_3.detectChangesInInputProps(this,this._el_18,throwOnChange);
    const currVal_42_0_0:any = this._arr_74('/about');
    this._RouterLinkWithHref_42_3.check_routerLink(currVal_42_0_0,throwOnChange,false);
    this._RouterLinkWithHref_42_3.detectChangesInInputProps(this,this._el_42,throwOnChange);
    const currVal_50_0_0:boolean = !this.parent.context.commentStt;
    this._NgIf_50_6.check_ngIf(currVal_50_0_0,throwOnChange,false);
    this._NgIf_50_6.detectChangesInInputProps(this,this._anchor_50,throwOnChange);
    const currVal_52_0_0:any = this.parent.context.commentStt;
    this._NgIf_52_6.check_ngIf(currVal_52_0_0,throwOnChange,false);
    this._NgIf_52_6.detectChangesInInputProps(this,this._anchor_52,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterLinkWithHref_4_3.detectChangesInHostProps(this,this._el_4,throwOnChange);
    this._RouterLinkWithHref_18_3.detectChangesInHostProps(this,this._el_18,throwOnChange);
    const currVal_67:any = this.parent.context.post.better_featured_image.source_url;
    if (import2.checkBinding(throwOnChange,this._expr_67,currVal_67)) {
      this.renderer.setElementProperty(this._el_22,'src',this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL,currVal_67));
      this._expr_67 = currVal_67;
    }
    const currVal_68:any = this.parent.context.post.title.rendered;
    if (import2.checkBinding(throwOnChange,this._expr_68,currVal_68)) {
      this.renderer.setElementProperty(this._el_22,'alt',currVal_68);
      this._expr_68 = currVal_68;
    }
    const currVal_69:any = this.parent.context.post.better_featured_image.media_details.sizes.medium.source_url;
    if (import2.checkBinding(throwOnChange,this._expr_69,currVal_69)) {
      this.renderer.setElementProperty(this._el_31,'src',this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL,currVal_69));
      this._expr_69 = currVal_69;
    }
    const currVal_70:any = this.parent.context.post.title.rendered;
    if (import2.checkBinding(throwOnChange,this._expr_70,currVal_70)) {
      this.renderer.setElementProperty(this._el_31,'alt',currVal_70);
      this._expr_70 = currVal_70;
    }
    const currVal_71:any = import2.interpolate(1,'',this.parent.context.post.title.rendered,'');
    if (import2.checkBinding(throwOnChange,this._expr_71,currVal_71)) {
      this.renderer.setText(this._text_37,currVal_71);
      this._expr_71 = currVal_71;
    }
    valUnwrapper.reset();
    const currVal_72:any = import2.interpolate(1,'',valUnwrapper.unwrap(import2.castByValue(this._pipe_date_0_0,(<_View_PostDetailComponent0>this.parent)._pipe_date_0.transform)(this.parent.context.post.date,'dd/MM/yyyy')),'');
    if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange,this._expr_72,currVal_72))) {
      this.renderer.setText(this._text_40,currVal_72);
      this._expr_72 = currVal_72;
    }
    this._RouterLinkWithHref_42_3.detectChangesInHostProps(this,this._el_42,throwOnChange);
    valUnwrapper.reset();
    const currVal_75:any = valUnwrapper.unwrap(import2.castByValue(this._pipe_safeHtml_1_0,(<_View_PostDetailComponent0>this.parent)._pipe_safeHtml_1.transform)(this.parent.context.post.content.rendered));
    if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange,this._expr_75,currVal_75))) {
      this.renderer.setElementProperty(this._el_48,'innerHTML',this.viewUtils.sanitizer.sanitize(import24.SecurityContext.HTML,currVal_75));
      this._expr_75 = currVal_75;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_4_3.context.ngOnDestroy();
    this._RouterLinkWithHref_18_3.context.ngOnDestroy();
    this._RouterLinkWithHref_42_3.context.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_4_0:any = ((<any>this._RouterLinkWithHref_4_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_4_0);
  }
  private _handle_click_18_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_18_0:any = ((<any>this._RouterLinkWithHref_18_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_18_0);
  }
  private _handle_click_42_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_42_0:any = ((<any>this._RouterLinkWithHref_42_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_42_0);
  }
}
function viewFactory_PostDetailComponent1(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_PostDetailComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_PostDetailComponent2 extends import3.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import20.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PostDetailComponent2,renderType_PostDetailComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','checkComment'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'a',new import2.InlineArray2(2,'class','ShowComment'),(null as any));
    this._RouterLinkWithHref_2_3 = new import20.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import21.Router),this.parent.parentInjector.get(import9.ActivatedRoute),this.parent.parentInjector.get(import22.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'Xem comments',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this.parent.parent.context.addDisqusScriptTag()) !== false);
    const pd_2_1:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return ((true && pd_2_0) && pd_2_1);
  }
}
function viewFactory_PostDetailComponent2(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_PostDetailComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_PostDetailComponent3 extends import3.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PostDetailComponent3,renderType_PostDetailComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','comment'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray4(4,'class','disqus_comment','id','disqus_thread'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_PostDetailComponent3(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_PostDetailComponent3(viewUtils,parentInjector,declarationEl);
}