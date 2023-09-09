import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environment';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  http = inject(HttpClient)

  getComments() {
    let url = `${environment.apiBaseUrl}/comments`;
    return this.http.get<Comment[]>(url);
  }
}
