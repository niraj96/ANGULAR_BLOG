import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';


@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  mypostList:any = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.fetchMyArticle().subscribe(data=>{
      this.mypostList = data;
    }, err=>{

    })
  }

  deleteArticle(articleid){
    this.articleService.deleteArticle(articleid).subscribe(data=>{
      this.mypostList = this.mypostList.filter(post=> post['_id'] != articleid)
    }, err=>{

    })
  }

}
