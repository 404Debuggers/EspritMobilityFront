import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../class/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private listBlogs = "http://localhost:8085/api/test/allblogs";
  private AjoutBlog = "http://localhost:8085/api/test/BLOG";
  private AjoutReaction = 'http://localhost:8085/api/test/blogs';
  private apiUrl = 'http://localhost:8085/api/test/BLOG';
  private dinamic = 'http://localhost:8085/DynamiqueEtudiant';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  getBlogById(id: number): Observable<Blog> {
    return this.httpClient.get<Blog>(`${this.apiUrl}/getb/${id}`, this.httpOptions);
  }

  GetAllBlogs(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listBlogs, this.httpOptions);
  }


  addBlog(blog: any): Observable<any[]> {
    const token = sessionStorage.getItem('Token');
    console.info(token);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.httpClient.post<any[]>(this.AjoutBlog, blog, { headers });
  }



 /* createBlogReaction(blogId: number, reactionType: string): Observable<any> {
    const url = `${this.AjoutReaction}/${blogId}/blogReactions?reactionType=${reactionType}`;
    return this.httpClient.post<any>(url, null);
  }
*/


createBlogReaction(blogId: number, reactionType: string): Observable<any> {
  const url = `${this.AjoutReaction}/${blogId}/blogReactions?reactionType=${reactionType}`;
  const token = sessionStorage.getItem('Token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  const options = { headers };
  return this.httpClient.post<any>(url, null, options);
}

getAlumniData() {
  return this.httpClient.get(this.dinamic);
}



}
