import { Comment } from './../class/comment';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../class/post';
import { ForumService } from '../shared/forum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  sidebarOpen = false;

  idPost = 1;

  idUser = 1;
  value: string = '';
  like: any;
  dislike: any;
  postform!: FormGroup;
  post: Post = new Post();
   posts: any;
  comment: Comment = new Comment();
  comForm!: FormGroup;
  editMode: boolean = false;

  constructor(private forumService: ForumService, private router: ActivatedRoute, private fb: FormBuilder, private cdRef: ChangeDetectorRef, private ngZone: NgZone) {
    this.comForm = this.fb.group({
      description: [null, [Validators.required]]
    })

  }
  onSubmit() {
    console.log('Submitted value:', this.value);
    // Do something with the value, such as send it to a server
  }


  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.forumService.GetAllPost().subscribe(data => {
      this.posts = data;
    })
  }

  getAllComments() {
    this.forumService.GetAllComments().subscribe(data => {
      this.posts = data
    })
  }

  getAllReplys() {
    this.forumService.GetAllReplys().subscribe(data => {
      this.posts = data
    })
  }

  AddPost(post: Post) {
    post.date = new Date();
    this.forumService.addPost(post).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
    window.location.reload();
  }

  addComment(id: number) {
    const comment = { description: this.comment.description};
    this.forumService.AjoutCommentt(id, comment).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
    window.location.reload();
  }

  likePost(postId: number) {
    this.forumService.likePost(postId).subscribe((data: any) => {
      console.log(data);
      this.ngZone.run(() => {
        const postIndex = this.posts.findIndex((post: Post) => post.postId === postId);

        this.posts[postIndex].nbrLike = data.nbrLike;
      });
    }, (error: any) => {
      console.error(error);
    });
    window.location.reload();
  }



  dislikePost(postId: number) {
    this.forumService.dislikePost(postId).subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.error(error);
    });
    window.location.reload();
  }

  deletePost(postId: any) {
    this.forumService.DeletePost(postId).subscribe((res: any) => this.getAllPosts())
  }

  deleteComment(commentId: number) {
    this.forumService.DeleteComment(commentId).subscribe((res: any) => this.getAllComments())
  }




}
