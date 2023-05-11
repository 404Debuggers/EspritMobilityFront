
import { Component, OnInit } from '@angular/core';
import { ReactionType } from '../class/ReactionType.enum';
import { Blog } from '../class/blog';
import { Category } from '../class/Category.enum';
import { BlogReaction } from '../class/blog-reaction';
import { BlogService } from '../shared/blog.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../class/user';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  LIKE = ReactionType.LIKE;
  DISLIKE = ReactionType.DISLIKE;
  LOVE = ReactionType.LOVE;

  reactionText = 'Like';

  blogs: Blog[] = [];
  blog: Blog = new Blog();
  categories = Object.values(Category);
  selectedCategory!: Category;
  errorMessage = '';
  blogId = 1;
  filteredBlogs!: Blog[];
  imageUrl!: string;
  Love: any;
  Like: any;
  Dislike:any;
  BlogReaction: BlogReaction = new BlogReaction();
  alumniData: any;
  alumni:boolean | undefined;

id:any;
  User: any;


  constructor(private blogService: BlogService,private route: ActivatedRoute) { }

  onCategorySelect() {
    if (!this.selectedCategory) {
      this.filteredBlogs = this.blogs;
    } else {
      this.filteredBlogs = this.blogs.filter((blog: Blog) => blog.category === this.selectedCategory);
    }
  }

  onSubmit() {
    console.log('Submitted value:', this.blog.description);
  }

  ngOnInit(): void {
    this.getAllBlogs();
    this.blogId = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.onCategorySelect();
    this.getAlumniData();

  }

  getAllBlogs() {
    this.blogService.GetAllBlogs().subscribe(data => {
      this.blogs = data;
      this.filteredBlogs = data;
    });
  }

  addBlog() {
    this.blog.date = new Date();
    this.blogService.addBlog(this.blog).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllBlogs();
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.blog = new Blog();
  }

  transform(blogs: Blog[], category: Category | undefined): Blog[] {
    if (!category) {
      return blogs;
    }

    return blogs.filter(blog => blog.category);
  }

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const blob = new Blob([file], { type: file.type });
      this.imageUrl = URL.createObjectURL(blob);
    }
  }
  onReaction(blogId: number, reactionType: string): void {
    this.blogService.createBlogReaction(blogId, reactionType)
      .subscribe(
        response => {
          // Handle the successful response from the API endpoint
          console.log(response);
        },
        error => {
          // Handle the error response from the API endpoint
          console.error(error);
        }
      );
  }
  getAlumniData(): void {
        this.blogService.getAlumniData().subscribe(
          (data: any) => {
            this.alumniData = data;
            console.log(this.alumniData); // You can do whatever you want with the data here
          },
          (error: any) => {
            console.error(error);
          }
        );
      }









}
