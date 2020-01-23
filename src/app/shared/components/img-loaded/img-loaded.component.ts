import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img-loaded',
  templateUrl: './img-loaded.component.html',
  styleUrls: ['./img-loaded.component.scss']
})
export class ImgLoadedComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() imgClass = '';
  @Input() imgAlt = '';

  isLoading = true;

  constructor() { }

  ngOnInit() {
    // this.isLoading = true;
  }

  public onLoad(): void {
    this.isLoading = false;
  }
}
