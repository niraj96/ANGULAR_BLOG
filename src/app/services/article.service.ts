import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  userid : Number = 1;

  articleList = [
    {id:1, author_id: 1, title: 'title 1', article: 'shdfskjdhfkjsdhfakjds', likes: 1, dislikes: 2},
    {id:2, author_id: 2, title: 'title 2', article: 'rqweqweqw', likes: 1, dislikes: 2},
    {id:3, author_id: 1, title: 'title 3', article: 'poio[po[po[poo[po[po[pojkjhkj', likes: 1, dislikes: 2},
    {id:4, author_id: 1, title: 'title 4', article: 'qqqqqqqqqqqq', likes: 1, dislikes: 2},
    {id:5, author_id: 2,title: 'title 5', article: 'rrrrrrrrrttttttt', likes: 1, dislikes: 2}
  ]

  appUrl:string = environment.apiUrl;
  constructor(private http: HttpClient, private userServ: UserService) { 

  }

  fetchAllarticles(){
    let header = this.userServ.getHeader();
    return this.http.get(this.appUrl+'article/all', {headers: header} );
  
  }


  fetchMyArticle(){
    let header = this.userServ.getHeader();
    return this.http.get(this.appUrl+'article/own', {headers: header} );
  }

  updateArticle(articleId, data){
    let header = this.userServ.getHeader();
    return this.http.put(this.appUrl+'article/update/'+articleId, data, {headers: header} );
  }

  deleteArticle(articleId){
    let header = this.userServ.getHeader();
    return this.http.delete(this.appUrl+'article/delete/'+articleId, {headers: header} );
  }

  createArticle(data){
    let header = this.userServ.getHeader();
    return this.http.post(this.appUrl+'article/create', data, {headers: header} );
  }


  fetchArticle(articleId){
    let header = this.userServ.getHeader();
    return this.http.get(this.appUrl+'article/fetch/'+articleId, {headers: header} );
  }

  addComment(data){
    let header = this.userServ.getHeader();
    return this.http.post(this.appUrl+'article/add_comment', data, {headers: header} );
  }

  getComments(articleId){
    let header = this.userServ.getHeader();
    return this.http.get(this.appUrl+'article/comments/'+articleId, {headers: header} );
  }


}
