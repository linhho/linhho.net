import { Component, ChangeDetectionStrategy, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { Title, DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'about',
  styleUrls: ['about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  page:any;
  constructor(
    public model: ModelService,
    private titleService: Title
  ) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }
  
  //init
  universalInit() {
    var url = "http://admin.linhho.net/wp-json/wp/v2/pages/2";
    this.model.get(url).subscribe(data => {
            this.page = data;
            this.titleService.setTitle( "Linh Hoo | About" );
      });
  }
}
