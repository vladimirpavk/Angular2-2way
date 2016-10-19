System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var CounterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            let CounterComponent = class CounterComponent {
                constructor() {
                    this.counterChanged = new core_2.EventEmitter();
                }
                set counter(value) {
                    this.counterValue = value;
                    this.counterChanged.emit({
                        counterValue: value
                    });
                }
                get counter() {
                    return this.counterValue;
                }
                counstructor() {
                }
                ngOnInit() {
                    //this.counterValue=0;
                }
                increment() {
                    this.counterValue++;
                    this.counterChanged.emit({
                        counterValue: this.counterValue
                    });
                }
                decrement() {
                    if (this.counterValue != 0) {
                        this.counterValue--;
                        this.counterChanged.emit({
                            counterValue: this.counterValue
                        });
                    }
                }
            };
            CounterComponent = __decorate([
                core_1.Component({
                    selector: 'counter-component',
                    template: `<button (click)="increment()">Increment</button>
  <label>Counter value:{{counterValue}}</label>
  <button (click)="decrement()">Decrement</button>
  `,
                    outputs: ['counterChanged'],
                    inputs: ['counterValue']
                }), 
                __metadata('design:paramtypes', [])
            ], CounterComponent);
            exports_1("CounterComponent", CounterComponent);
        }
    }
});

//# sourceMappingURL=counter.component.js.map
