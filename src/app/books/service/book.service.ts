import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@saleor/sdk/dist/apollo/types';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BookMapper } from '../mappers/book.mapper';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = environment.baseUrl;
  private apikey = 'api-key=gfTb2Lrp3R8vqtfyOH6wme7qRu5TIWdd';

  constructor(private http: HttpClient, private bookMapper: BookMapper) {}

  getBooksByCategory(category: string, date: string = '2019-01-20'): any {
    let url = this.baseUrl + `lists/${date}/${category}.json?${this.apikey}`;
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        let results = [res.results];
        return this.bookMapper.map(results);
      })
    );
  }
}
