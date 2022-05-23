import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from './test-regi';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList:book[] = [];

  constructor(private http: HttpClient) { }

}
