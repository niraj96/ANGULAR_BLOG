import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  articleForm:FormGroup;
  titleVal: String = '';
  descriptionVal: String = '';
  articleId: String ;
  constructor(private fb:FormBuilder, private articleServ: ArticleService,private roter: Router, private route: ActivatedRoute) {
    this.articleId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {

    this.articleForm = this.fb.group({
      title: [this.titleVal, [Validators.required]],
      description: [this.descriptionVal, [Validators.required]],
    });

    if(this.articleId!='null'){
      this.articleServ.fetchArticle(this.articleId).subscribe(data=>{
       
        this.titleVal = data['title'];
        this.descriptionVal = data['description'];

        this.articleForm = this.fb.group({
          title: [this.titleVal, [Validators.required]],
          description: [this.descriptionVal, [Validators.required]],
        });

      })

    }
    
  }

  handleNewPost(form:FormGroup){
   
    if(this.articleId!='null'){
      this.articleServ.updateArticle(this.articleId, form.value).subscribe(data=>{
        alert('Updated Post Successfully')
      }, err=>{
  
      });
    }else{
      this.articleServ.createArticle(form.value).subscribe(data=>{
       alert('Created Post Successfully')
      }, err=>{
  
      });

    }
    
  }

}
