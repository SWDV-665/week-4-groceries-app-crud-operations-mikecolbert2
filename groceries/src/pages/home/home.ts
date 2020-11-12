import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List"

  //items array
  items = [
    {
      name: "milk",
      quantity: 2
    },
    {
      name: "bread",
      quantity: 1
    },
    {
      name: "banana",
      quantity: 3
    },
    {
      name: "sugar",
      quantity: 1
    },
  ];


  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
    ) {

    }

  removeItem(item, index) {
    console.log("removing item - ", item, index); 

    const toast = this.toastCtrl.create({
      message: "Removing item - " + item.index + " ...",
      duration: 3000
    });   
    toast.present();
    
    // remove an item from a javascript array
    this.items.splice(index, 1);
  }

  addItem(){
    console.log("adding item");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item ... ",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item); //push this item from the login into our items array
          }
        }
      ]
    });
    prompt.present();
  }


}
