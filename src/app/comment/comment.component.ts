import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentMsg:String = "";
  commentList:any = [];
  @Input() articleId:string;
  @Input() likes:Number = 0;
  @Input() dislikes:Number = 0;

  clickedLikes:boolean = false;
  clickedDislikes:boolean = false;
  likesCount = 0;
  dislikeCount = 0;

  constructor(private articleSrv: ArticleService) { }

  ngOnInit(): void {

    this.likesCount = Number(this.likes);
    this.dislikeCount = Number(this.dislikes)

    this.articleSrv.getComments(this.articleId).subscribe(data=>{
      this.commentList = data;
    }, err=>{

    });
  }

  handleLikes(){
    if(!this.clickedLikes){
      this.likesCount += 1;
    }else{
      this.likesCount -= 1;
    }

    this.clickedLikes = !this.clickedLikes;
    this.articleSrv.updateArticle(this.articleId, {likes: this.likesCount}).subscribe(data=>{

    }, err=>{

    });
   
  }

  handleDislikes(){
    if(!this.clickedDislikes){
      this.dislikeCount += 1;
    }else{
      this.dislikeCount -= 1;
    }

    this.clickedDislikes = !this.clickedDislikes;

    this.articleSrv.updateArticle(this.articleId, {dislikes: this.dislikeCount}).subscribe(data=>{
      
    }, err=>{

    });
    
  }

  afterComment(){

    if(this.articleId.trim()){
      let data = {
        article_id : this.articleId,
        comment: this.commentMsg
      }

      this.articleSrv.addComment(data).subscribe(data=>{
        console.log('commented')
        this.commentList.push(data);
      }, err=>{

      })

      this.commentMsg = "";


    }else{

    }
   
  }

  

}
