import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuList } from 'src/app/model/menu-list.model';
import { Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input()
  restaurant: Restaurant = new Restaurant();

  ratingFull: number[] = [];
  ratingEmpty: number[] = [];
  priceFull: number[] = [];
  priceEmpty: number[] = [];
  @Output()
  openModal = new EventEmitter<Restaurant>();
  @Input()
  menuList: MenuList = new MenuList();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ratingFull =  new Array(this.restaurant.rating).fill(0);
    this.ratingEmpty = new Array(5 - this.restaurant.rating).fill(0);
    
    this.priceFull =  new Array(this.restaurant.price).fill(0);
    this.priceEmpty = new Array(5 - this.restaurant.price).fill(0);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.openModal.emit(this.restaurant);
  }



}
