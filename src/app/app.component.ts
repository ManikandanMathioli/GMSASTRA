import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
})
export class AppComponent {
name = 'Angular 5';

source = [
{ id: 'USD', value: '1.126735' },

{ id: 'GBP', value: '0.876893' },

{ id: 'INR', value: '79.677056' }
];
target = [
{ id: 'USD', value: '1.126735' },

{ id: 'GBP', value: '0.876893' },

{ id: 'INR', value: '79.677056' }
];

form: FormGroup;

constructor() {
this.form = new FormGroup({
currency: new FormControl(null),
});
}
public submit() {
var amt:any = (<HTMLInputElement>document.getElementById('amount'));
var src:any = (<HTMLInputElement>document.getElementById('fromCurrency'));
var tar:any = (<HTMLInputElement>document.getElementById('toCurrency'));

var result = (amt.value * (tar.options[tar.selectedIndex].text)) / src.options[src.selectedIndex].text;
console.log(amt.value);
console.log(tar.options[tar.selectedIndex].text);
console.log(src.options[src.selectedIndex].text);
(<HTMLInputElement>document.getElementById('resValue')).innerHTML =
Math.round(result).toFixed(2).toString();
}
}