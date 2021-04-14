import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  filterText: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getName($event: string) {
    this.filterText = $event;
  }


}
