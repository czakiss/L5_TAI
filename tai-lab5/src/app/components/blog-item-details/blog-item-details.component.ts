import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";


@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.scss']
})
export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text: string | undefined;
  public id: number | undefined;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute)
  { }

  ngOnInit() {
    let id: string | null;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    // @ts-ignore
    this.dataService.getById(id).subscribe(res => {
      // @ts-ignore
      this.image = res['image'];
      // @ts-ignore
      this.text = res['text'];
    });
  }
}
