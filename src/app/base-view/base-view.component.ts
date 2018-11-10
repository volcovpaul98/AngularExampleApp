import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/services/inputService';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent {
 
  textModel:string;

  shouldHaveBoldText:boolean;

  currentClasses:{};

  employee:Employee;

  carList:any[];

  inputService:InputService;  

  constructor(inputService:InputService) {
    this.inputService = inputService;

    this.textModel = "ngModelText";

    this.shouldHaveBoldText = true;
   
    this.useDefaultClasses();

    // comment the line below to see ngIf functionality
    this.employee = new Employee("John", "Doe");

    this.carList = [];
    this.bindCars();
  }

  inputViewText: string;

  saveInput() {
    this.inputService.saveInput(this.inputViewText);
  }

  useDefaultClasses()  {
    this.currentClasses = {
      'saveable':false,
      'modified' :true,
      'special' :false
    }
  }

  bindCars()  {
    this.carList.push({
      "model": "BMW",
      "desc": "cool car"
    });

    this.carList.push({
      "model":"Mercedes",
      "desc": "another cool car"
    });

    this.carList.push({
      "model":"Dacia",
      "desc": "not cool car"
    });
  }

    logMessage(message:string) {
      console.log(message);
    }
}

export class Employee{
  firstName:string;
  lastName:string;

  constructor(fName:string, lName:string) {
    this.firstName = fName;
    this.lastName = lName;
  }
}
