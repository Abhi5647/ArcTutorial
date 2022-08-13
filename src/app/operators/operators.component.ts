import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  //View Child for button 
  @ViewChild('mybutton')
  mybutton!: ElementRef;

  constructor() { }

  //variable
  headline!: any ;
  studentobj={
    name:'Abhishek',
    age:25,
    status:true
  }
 names:string[]=['ram','shayam', 'puram','kaman'];
 student:string='Abhishek Kumar singh';

  //conversion to observable with of operator....
  name$:Observable<string>=of(this.student)
  student$:Observable<object>=of(this.studentobj);

  // conversion to observable with from operator...

  names$:Observable<any>=from(this.names);

  ngOnInit(): void {
  // here subscription of that Observable
    this.student$.subscribe(data=>
    console.log(data)
    )

    this.name$.subscribe(data=>{
      console.log(data);
      })

    this.names$.subscribe(data=>{
    console.log(data);
    
    })
  }

// From Event Example ..................
  myEventObservable(){
   const btnObservable= fromEvent(this.mybutton.nativeElement,'click');
   btnObservable.subscribe(data=>{
    console.log(data);
    
   })
  }

}
