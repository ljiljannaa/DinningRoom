import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuList } from '../model/menu-list.model';
import {map} from 'rxjs/operators';


const baseUrl = "http://localhost:3000/api/restaurants";
@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private httpClient: HttpClient) { }

  getMenus(restaurantId: number) : Observable<MenuList> {
    return this.httpClient.get(`${baseUrl}/${restaurantId}/menus`).pipe(map((x:any) => {
      return new MenuList(x);
    }))
  }
}
