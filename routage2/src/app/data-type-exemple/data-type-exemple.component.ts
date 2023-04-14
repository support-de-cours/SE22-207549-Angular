import { Component } from '@angular/core';

interface Car {
  id?: number;
  brand: string;
  model: string;
  isElectrical: boolean;
}

@Component({
  selector: 'app-data-type-exemple',
  templateUrl: './data-type-exemple.component.html',
  styleUrls: ['./data-type-exemple.component.css']
})
export class DataTypeExempleComponent {

  // Data type
  // --

  // String
  public myStr: string = "Ceci est une chaine";

  // Number
  public myNumb: number = 42;
  public mySecondNumb: number = 12.4;

  // Bool
  public myBool: boolean = true;

  // Joker (tu met ce que tu veux en valeur)
  public myJoker: any;

  // Tableau
  public myArr: any[] = [
    "chaine",
    42,
    true
  ];
  public myStrArr: string[] = [
    "str 1",
    "str 2",
  ];

  public myCarsArr: Car[] = [{
    brand: "Ford",
    model: "F150",
    isElectrical: false
  },{
    brand: "Polestar",
    model: "Polestar 2",
    isElectrical: true,
    id: 42
  },{
    brand: "Tesla",
    model: "Model Y",
    isElectrical: true,
    id: 43,
    // color: "red"
  },
  // {
  //   brand: "Tesla",
  //   isElectrical: true,
  // }
  ];

  public doSomething(): number
  {
    return 42;
  }
  public doAnotherSomething(): void
  {
    // ... 
  }

}
