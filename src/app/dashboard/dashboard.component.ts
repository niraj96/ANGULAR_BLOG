import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articleList:any = [];
  constructor(private articleServ: ArticleService) { }

  ngOnInit(): void {
    this.articleServ.fetchAllarticles().subscribe(data=>{
      this.articleList = data;
    }, err=>{

    })
  }

  updateLikesCount(event: Event){
    console.log(event);
  }

  updateDislikeCount(event: Event){
    console.log(event);
  }



}
