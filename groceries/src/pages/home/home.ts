import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List"

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: GroceriesServiceProvider,
    ) {

    }

  loadItems(){
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("removing item - ", item, index); 

    const toast = this.toastCtrl.create({
      message: "Removing item - " + index + " ...",
      duration: 3000
    });   
    toast.present();
   
    this.dataService.removeItem(index);
       
  }

  editItem(item, index) {
    console.log("editing item - ", item, index); 

    const toast = this.toastCtrl.create({
      message: "Editing item - " + index + " ...",
      duration: 3000
    });   
    toast.present();
    
    // pass the item and index to our edit prompt
    this.showEditItemPrompt(item, index)
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
            this.dataService.addItem(item);
          }
        }
      ]
    });
    prompt.present();
  }



  showEditItemPrompt(item, index) {
    const prompt = this.alertCtrl.create({
      title: 'Edit Item',
      message: "Please edit item ... ",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
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
            this.dataService.editItem(item, index);
          }
        }
      ]
    });
    prompt.present();
  }
}
