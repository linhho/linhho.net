import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'search',
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public listStatus:boolean = false;
  public listItems = [];
  public keyword:string;
  public lolipop:string = "../../assets/img/lollipop-sweet-treat-candy-confectionery-sugar.svg";
  constructor(
    public model: ModelService
  ) {}
  
  getItems() {
    var url = "http://admin.linhho.net/wp-json/wp/v2/posts?search="+this.keyword;
    this.model.get(url).subscribe(data => {
            this.listItems = data;
            if(data.length > 0){
                this.listStatus = true;
            }
      });
  }
}
