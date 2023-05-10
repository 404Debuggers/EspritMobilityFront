import { Category } from './Category.enum';
export class Blog {
  blogId:any
  category!: Category;
   title:any
  description:any
  rating:any
  image:any
  archive:any
  date: Date = new Date();
  nbrlove: any;
  nbrjaime: any;
  nbrjaimepas: any;
reactions: any;
}
