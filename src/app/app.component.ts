import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifecycleHook';
    inputText: string = '';

  OnSubmit (inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }
}
