import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  IsExpanded = false;

  IsReplying = false;


  toggleExpanded(){
    this.IsExpanded =!this.IsExpanded;
  }

  toggleReplying(){
    this.IsReplying =!this.IsReplying;
    if(this.IsReplying){
      this.IsExpanded = true;
    }
  }

}
