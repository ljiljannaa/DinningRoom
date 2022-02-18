import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuList } from '../model/menu-list.model';
import { RestaurantList } from '../model/restaurant-list.model';
import { Restaurant } from '../model/restaurant.model';
import { MenusService } from '../services/menus.service';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantList: RestaurantList = new RestaurantList();
  menuList: MenuList = new MenuList();

  queryParams = {
    page: 1,
    pageSize: 12,
    sort: "",
    sortDirection: "",
    filter: {
      cuisine: "",
      priceFrom: "",
      priceTo: ""
    }
  }


  constructor(private service: RestaurantsService, private route: ActivatedRoute, private menuService: MenusService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any) => {
      this.queryParams.filter.cuisine = data["cuisine"];
      this.getAll();
    })
  }

  getAll() : void {
    this.service.getAll(this.queryParams).subscribe((data: RestaurantList) => {
      this.restaurantList = data;
    })
  }

  openModal(restaurant: Restaurant) : void {
    this.menuService.getMenus(restaurant._id).subscribe((data: MenuList) => {
      this.menuList = data;
    })
  }

}
