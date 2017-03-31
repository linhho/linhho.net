import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation, HostListener } from '@angular/core';
import { ModelService } from './shared/model/model.service';
//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  template: `
    <header id="header">
        <div>
            <div class="headerNav">
                <a [routerLink]="['blog']" routerLinkActive="headerNavActive">BLOG</a>
                <a [routerLink]="['about']" routerLinkActive="headerNavActive">ABOUT</a>
                <a [routerLink]="['search']" routerLinkActive="headerNavActive"><img [src]="searchIcon" alt="Search"></a>
                <a [href]="faceLink" target="_blank"><img [src]="faceIcon" alt="facebook"></a>
                <a [href]="instaLink" target="_blank"><img [src]="instaIcon" alt="instagram"></a>
            </div>
        </div>
        <div class="about-trigger">
            <a [routerLink]="['blog']"><img [src]="logo" alt="Linh Hoo"></a>
            <a [routerLink]="['blog']"><h1>LINH HOO</h1></a>
            <a [routerLink]="['blog']"><h2>Web/Mobile Developer</h2></a>
        </div>
    </header>
    
    <nav [class.fixed]="navIsFixed">
        <div class="scrolly-hidebar">
            <div style="width: 5000px;">
                <a [routerLink]="['blog']"><span>Tất cả</span></a>
                <a *ngFor="let menu of menus" [routerLink]="['blog', menu.id ,menu.slug]" routerLinkActive="active"><span>{{menu?.name}}</span></a>
            </div>
        </div>
    </nav>
    <div id="webContainer">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  public menus = [];
  public faceLink = "https://www.facebook.com/linhho.net";
  public instaLink = "https://www.instagram.com/linh.hoo/";
  public logo = "../assets/logo-2.png";
  public faceIcon = "../assets/img/facebook.svg";
  public instaIcon = "../assets/img/instagram.svg";
  public searchIcon = "../assets/img/search.svg";
  public navIsFixed: boolean = false;
  constructor(
      public model: ModelService
      //@Inject(DOCUMENT) private document: Document
    ) {
    this.universalInit();
  }
  
  //Init
    universalInit() {
        this.model.get('http://admin.linhho.net/wp-json/wp/v2/categories').subscribe(data => {
          localStorage.setItem('menu',JSON.stringify(data));
          this.menus = data;
        }); 
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = document.getElementsByTagName("body")[0].scrollTop;
    let container = document.getElementById("webContainer");
    if (number > 320) {
      this.navIsFixed = true;
      container.style.marginTop = 72+'px';
    } else if (this.navIsFixed && number < 320) {
      this.navIsFixed = false;
      container.style.marginTop = 0+'px';
    }
  }
}
