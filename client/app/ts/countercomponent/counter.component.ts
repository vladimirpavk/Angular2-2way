/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
import { OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `<button (click)="increment()">Increment</button>
  <label>Counter value:{{counterValue}}</label>
  <button (click)="decrement()">Decrement</button>
  `,
  outputs: ['counterChanged'],
  inputs: ['counterValue']
})
export class CounterComponent implements OnInit { 

    public counterChanged=new EventEmitter();
    public counterValue:number;

    public set counter(value){
        this.counterValue=value;
        this.counterChanged.emit({
            counterValue: value
        });
    }
    public get counter():number{
        return this.counterValue;
    }

    counstructor(){        
    }

    ngOnInit():void{
        //this.counterValue=0;
    }

    public increment():void{
        this.counterValue++;

         this.counterChanged.emit({
            counterValue: this.counterValue
        });
    }

    public decrement():void{
        if(this.counterValue != 0){
            
            this.counterValue--;        
            this.counterChanged.emit({
                counterValue: this.counterValue
            });
        }            
    }


}