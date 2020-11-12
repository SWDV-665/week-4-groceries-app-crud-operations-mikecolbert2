import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

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
    public inputDialogService: InputDialogServiceProvider,
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
    this.inputDialogService.showPrompt(item, index)
  }


  addItem(){
    console.log("adding item");
    this.inputDialogService.showPrompt();
  }

  
}
