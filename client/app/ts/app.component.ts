/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',  
  template: `<h1>My Second Angular App</h1>
            <counter-component [counterValue]="counterVrednost" (counterChanged)="counterVrednostChanged($event)"></counter-component>
            <div style="display: block">CounterComponent value {{counterVrednost}}</div>
  `
})
export class AppComponent implements OnInit{
  public counterVrednost: number;

  public counterVrednostChanged(event){
    this.counterVrednost=event.counterValue;
  }

  ngOnInit(){
      this.counterVrednost=5;
  }
}