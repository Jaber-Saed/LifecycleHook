import { 
  Component,
   Input,
   OnInit,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements 
OnInit, OnChanges, 
DoCheck, AfterContentInit,
AfterContentChecked,
AfterContentInit, AfterViewInit, 
AfterViewChecked,
OnDestroy
{
  @Input() value: string = 'ProMaster'

  constructor() {
    console.log(`constructor called!`);
    // console.log(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    //console.log(this.value);
  }

  ngDoCheck(): void {
    console.log(`do check called!`)
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`)
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`)
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterContentINit called!`)
  }
  
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called!`)
  }
  ngOnDestroy(): void {
    console.log(`OnDestroy called!`)
  }

}
