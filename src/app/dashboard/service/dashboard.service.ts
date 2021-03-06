import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiReturn } from 'src/app/models/api-return';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';
import { CategoryMapper } from '../mappers/category.mapper';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private categoryMapper: CategoryMapper
  ) {}

  private baseUrl = environment.baseUrl;
  private apikey = 'api-key=gfTb2Lrp3R8vqtfyOH6wme7qRu5TIWdd';

  getCategories(): Observable<any> {
    let url = this.baseUrl + `lists/names.json?${this.apikey}`;
    return this.http.get<ApiReturn>(url).pipe(
      map((res: ApiReturn) => {
        return this.categoryMapper.map(res.results);
      }),
      catchError((error: any) => {
        console.log('error', error);
        return error;
      })
    );
  }
}
