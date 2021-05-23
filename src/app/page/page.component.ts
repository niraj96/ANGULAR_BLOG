import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  articleId:String;
  article:any = {};
  constructor(private route: ActivatedRoute, private articleServ: ArticleService ) { 
    console.log(this.route.snapshot.params.id);
    this.articleId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.articleServ.fetchArticle(this.articleId).subscribe(data=>{
      this.article = data;
    }, err=>{

    })
  }

}
