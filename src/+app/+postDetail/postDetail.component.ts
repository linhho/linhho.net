import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Renderer, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';

import {ModelService} from '../shared/model/model.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    changeDetection: ChangeDetectionStrategy.Default, 
    encapsulation: ViewEncapsulation.Emulated, 
    selector: 'postDetail', 
    styleUrls: ['./postDetail.component.css'], 
    templateUrl: './postDetail.component.html'
})
export class PostDetailComponent {
    idPost:number;
    idCategory:number;
    categorySlug:string;
    @Input()post:any;
    title : string = "title";
    sub: any;
    commentStt:boolean = false;
    constructor(
        public model : ModelService,
        private _route: ActivatedRoute,
        private el: ElementRef,
        private renderer: Renderer,
        ) {
        this.universalInit();
    }

    universalInit() {
        this.sub = this._route.params.subscribe(params => {
            this.idPost = params['idPost'];
            this.idCategory = params['idCategory'];
            var url = "http://admin.linhho.net/wp-json/wp/v2/categories?post="+this.idPost;
            this.model.get(url).subscribe(data => {
                    this.categorySlug = data[0].slug;
            });
        });   
    }
    
  //   ngAfterViewInit() {
  //   if ((<any>window).DISQUS === undefined) {
  //     this.addDisqusScriptTag();
  //   }
  //   else {
  //     this.resetDisqus();
  //   }
  // }
  openCommentBox() {
    if ((<any>window).DISQUS === undefined) {
      this.addDisqusScriptTag();
    }
    else {
      this.resetDisqus();
    }
    console.log("comment");
  }

  /**
   * Get disqus config
   */
  getConfig() {
    let _self = this;
    return function () {
      this.page.url = this.post.link || window.location.href;
      this.page.identifier = this.idPost;
      this.page.title = this.post.title.rendered;
    };
  }

  /**
   * Reset disqus with new inputs.
   */
  resetDisqus() {
    (<any>window).DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
    this.commentStt = true;
  }

  /**
   * Add disqus script to the document.
   */
  addDisqusScriptTag() {
    (<any>window).disqus_config = this.getConfig();
    let script = this.renderer.createElement(this.el.nativeElement, 'script');
    script.src = `//linhho.disqus.com/embed.js`;
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-timestamp', new Date().getTime().toString());
    this.commentStt = true;
  }

}

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}