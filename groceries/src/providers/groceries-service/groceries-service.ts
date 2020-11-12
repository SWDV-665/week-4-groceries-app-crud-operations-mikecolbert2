import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {


  //items array
  items = [];


  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems(){
    return this.items;
  }


  removeItem(index){
    // remove an item from a javascript array
    this.items.splice(index, 1);
  }

  addItem(item){
    //push this item from the login into our items array
    this.items.push(item);
  }

  editItem(item, index){
    this.items[index] = item; 
  }

}
