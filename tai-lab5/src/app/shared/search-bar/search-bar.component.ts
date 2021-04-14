import {Component, EventEmitter, OnInit, Output} from
    '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  filterText: string | undefined;

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter();
    });

  }

  sendFilter() {
    this.router.navigate(['/blog-component'], {queryParams: {name:this.filterText}});
    this.name.emit(this.filterText);
  }


}
