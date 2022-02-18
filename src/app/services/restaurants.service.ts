import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurant-list.model';
import {map} from 'rxjs/operators';

const baseUrl="http://localhost:3000/api/restaurants";
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient: HttpClient) { }

  getAll(params?:any) : Observable<RestaurantList> {
    let queryParams = {}
    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
        .set("filter", params && params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.httpClient.get(baseUrl,queryParams).pipe(map((x:any) => {
      return new RestaurantList(x);
    }))
  }
}
