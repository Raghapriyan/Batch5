import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  prodDetails = [{ id: 1, category: 'Clothing', model: 'Shirts'},
                  { id: 2, category: 'Electronics', model: 'TV'},
                  { id: 3, category: 'Home Appliances', model: 'Washing Machine'}];
}
