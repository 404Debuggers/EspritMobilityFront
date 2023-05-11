import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../class/post';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private listPosts = "http://localhost:8085/api/test/getAllPosts";
  private listComments = " http://localhost:8085/api/test/GET";
  private listReplys = " http://localhost:8085/api/test/GETReply";
  readonly AjoutPost = " http://localhost:8085/api/test/POST ";
  private apiUrl = 'http://localhost:8085/api/test/LikePost';
  private apiUrl1 = 'http://localhost:8085/api/test/DisLikePost';
  readonly AjoutComment = " http://localhost:8085/api/test/Comm";
  readonly AjoutReply = "  http://localhost:8085/api/test/add-to-reply";

  private UpdatePost = "http://localhost:8080/api/test/UpdatePost/";

  private deletePost = "http://localhost:8085/api/test/delp";

  private deleteComm = "http://localhost:8085/api/test/DELETE";

  private updatePost = "http://localhost:8085/api/test/UpdatePost";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  GetAllPost(): Observable<any[]> {
    return this.http.get<any[]>(this.listPosts, this.httpOptions);
  }

  GetAllComments(): Observable<any[]> {
    return this.http.get<any[]>(this.listComments, this.httpOptions);
  }
  GetAllReplys(): Observable<any[]> {
    return this.http.get<any[]>(this.listReplys, this.httpOptions);
  }

  addPost(post: any): Observable<any[]> {
    const token = sessionStorage.getItem('Token');
    console.info(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.post<any[]>(this.AjoutPost, post, { headers });
  }
  likePost(idPost: number) {
    const token = sessionStorage.getItem('Token');
    console.info(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'  // Ajout de l'en-tête Content-Type
    });
    const body = { idPost }
    return this.http.put(`${this.apiUrl}/${idPost}`,body, { headers });
  }

  dislikePost(idPost: number){
    const token = sessionStorage.getItem('Token');
    console.info(token);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
    })
    const body = { idPost }
    return this.http.put(`${this.apiUrl1}/${idPost}`,body, { headers });
  }

  AjoutCommentt(id: number, comment: any) {
    const token = sessionStorage.getItem('Token');
    console.info(token);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
    })

    return this.http.post<any[]>(`${this.AjoutComment}/${id}`, comment, { headers });
  }

  UpdateP(postId : any , postUpdated: Post): Observable<any>{

    return this.http.put(`${this.UpdatePost}/${postId}`, postUpdated);
  }


  DeletePost( postId : any ): Observable<any>{
    return this.http.delete(`${this.deletePost}/${postId}`);
  }

  Ajoutreply(id: number, reply: any) {
    const token = sessionStorage.getItem('Token');
    console.info(token);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
    })}

    DeleteComment(commentId:any):Observable<any>{
      const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.http.delete(`${this.deleteComm}/${commentId}`, { headers });
    }

    UpdatePostt(postId : any , postUpdated: Post): Observable<any>{
      const token = sessionStorage.getItem('Token');
      console.info(token);
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
      return this.http.put(`${this.updatePost}/${postId}`, postUpdated, { headers });
    }




}
