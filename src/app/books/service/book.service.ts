import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiReturn } from 'src/app/models/api-return';
import { environment } from 'src/environments/environment';
import { BookMapper } from '../mappers/book.mapper';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = environment.baseUrl;
  private apikey = 'api-key=gfTb2Lrp3R8vqtfyOH6wme7qRu5TIWdd';

  constructor(private http: HttpClient, private bookMapper: BookMapper) {}

  getBooksByCategory(
    category: string,
    date: string = '2019-01-20'
  ): Observable<any> {
    let url = this.baseUrl + `lists/${date}/${category}.json?${this.apikey}`;
    return this.http.get<ApiReturn>(url).pipe(
      map((res: ApiReturn) => {
        let results = [res.results];
        return this.bookMapper.map(results);
      })
    );
  }
}
