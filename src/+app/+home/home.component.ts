import { Component, ChangeDetectionStrategy, ViewEncapsulation, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ModelService } from '../shared/model/model.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'blog',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  post:any;
  listPosts = [];
  listStatus:boolean = true;
  sub: any;
  idCategory: number;
  idPost: number;
  page: number = 1;
  showPostStt:boolean = false;
  checkpostData:boolean = false;
  checkcategoryData:boolean = false;
  lolipop:string = "../../assets/img/lollipop-sweet-treat-candy-confectionery-sugar.svg";
  checkItem:boolean = true;
  //data
    categoryId:number;
    categorySlug:string;

    postId:number;
    postName:string;
    postImage:string;
    postContent:string;

  constructor(
    public model: ModelService,
    private _route: ActivatedRoute,
    private _router: Router,
    private titleService: Title
    // @Inject(DOCUMENT) private document: Document
  ) {
    this.universalInit();
  }

  //get list posts
  getListPosts(category) {
      var url:string;
      if(category==0){
        url = 'http://admin.linhho.net/wp-json/wp/v2/posts?page='+this.page;
      }
      else {
        url = 'http://admin.linhho.net/wp-json/wp/v2/posts?categories='+category+'&page='+this.page;
      }
      this.model.get(url).subscribe(data => {
            this.listPosts = data;
            if(data.length==0){
                this.listStatus = false;
            }
            else{
                this.listStatus = true;
            }
      });
  }
  //init
  universalInit() {
    this.sub = this._route.params.subscribe(params => {
      if(params['idCategory']){
        this.idCategory = params['idCategory'];
        this.titleService.setTitle( "Linh Hoo | " + params['category'] );
      }
      else{
        this.idCategory=0;
        this.titleService.setTitle( "Linh Hoo | software engineer" );
      }
      this.getListPosts(this.idCategory);

      //show post detail
      if(params['idPost']) {
        this.idPost = params['idPost'];
        this.getCategoryOfPost();
        this.getPostDetail();
        if(this.checkpostData && this.checkcategoryData){
          this.showPost();
        }
      }
      else {
        this.hidePost();
      }
    });
  }
  //get category info of post
  getCategoryOfPost() {
    var url = "http://admin.linhho.net/wp-json/wp/v2/categories?post="+this.idPost;
    this.model.get(url).subscribe(data => {
            this.categoryId = data[0].id;
            this.categorySlug = data[0].slug;
      });
    this.checkcategoryData = true;
  }
  //getPost
  getPostDetail(){
    var url = "http://admin.linhho.net/wp-json/wp/v2/posts/"+this.idPost;
    this.model.get(url).subscribe(data => {
            this.post = data;
            this.titleService.setTitle( "Linh Hoo | " + data.title.rendered );
      });
      this.checkpostData = true;
  }
  //show/hide post detail
  showPost() {
        //this._router.navigateByUrl("/blog/1/"+this.slug);
        this.showPostStt = true;
        var x = document.getElementsByTagName("body");
        x[0].style.overflow = "hidden";
    }
    hidePost() {
        this.showPostStt = false;
        var x = document.getElementsByTagName("body");
        x[0].style.overflow = "auto";
    }
    //add list post when scroll
    addListPosts(category,page) {
        var url:string;
        if(category==0){
          url = 'http://admin.linhho.net/wp-json/wp/v2/posts?page='+page;
        }
        else {
          url = 'http://admin.linhho.net/wp-json/wp/v2/posts?categories='+category+'&page='+page;
        }
        if(this.checkItem == true) {
          this.model.get(url).subscribe(data => {
              this.listPosts = this.listPosts.concat(data);
              if(data.length==0){
                this.checkItem = false;
              }
          },
          error => this.checkItem = false);
        }
    }
  //check scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let winScrollTop = document.getElementsByTagName("body")[0].scrollTop;
      let winScrollHeight = document.getElementsByTagName("body")[0].scrollHeight;
      let winHeight = window.innerHeight;
      if (this.checkItem && (winScrollHeight - winScrollTop === winHeight)) {
        this.page = this.page + 1;
        this.addListPosts(this.idCategory,this.page);
      }
  }
}
