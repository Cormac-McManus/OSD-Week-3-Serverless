import { Component } from '@angular/core';
import { FirebaseApiService } from './firebase-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MyBooks: any = [];
  authorValue='';
  titleValue='';

  constructor(public firebaseApiService: FirebaseApiService) {

  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    return this.firebaseApiService.getBooks().subscribe((data: {}) => {
      this.MyBooks = data;
    })
  }

  addBook(){
    return this.firebaseApiService.addBook(this.titleValue,this.authorValue).subscribe((data: {}) => {
      this.MyBooks = data;
      this.titleValue='';
      this.authorValue='';
    })
  }

  deleteBook(id:string) {
    return this.firebaseApiService.delBook(id).subscribe((data: {}) => {
      this.MyBooks = data;
      })
  }
}
