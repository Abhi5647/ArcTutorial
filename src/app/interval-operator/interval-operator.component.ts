import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime,take, from, skip ,interval, Observable, takeWhile, takeLast, first, of,last, elementAt, filter, distinct, count } from 'rxjs';

@Component({
  selector: 'app-interval-operator',
  templateUrl: './interval-operator.component.html',
  styleUrls: ['./interval-operator.component.css']
})
export class IntervalOperatorComponent implements OnInit {

  searchForm!: FormGroup;
  text!: FormControl
  Data:string='VISHAL';
  Data$:Observable<any>=of(this.Data);
  class:string[]= ['ram','sujan','kumar','ram'];
  constructor(private formBuilder:FormBuilder) { }
  
  Student$:Observable<any>=from(this.class);
  ngOnInit(): void {

  this.searchForm=new FormGroup({
    text:new FormControl('start searching')
  })
  this.searchForm.get('text')?.valueChanges.pipe(
    
   // take(5), //take only N value

   filter((v)=>this.checkCharCount(v)),

    //value change emit data right away when change happen
    //it delays the fetching of changed data to save resources
    debounceTime(2000)
  )
  .subscribe(data=>{
    console.log(data);
    this.Data=data;
  })
    //TakeLast OPerator

    this.Student$.pipe(
     // takeWhile((v)=>this.cheakCondition(v)),
     // take
     // takeLast(3)
     // first()
     // last()
     // elementAt(0)
  //    distinct()
      skip(2),
     count()
    ).subscribe(data=>{
      console.log(data);
      
    })
// Interval 
    this.Student$.subscribe(data=>{
      //emit a number with the particular time interval
      const seqnumber$=interval(2000);
      seqnumber$.pipe(
        
      ).subscribe(num=>{
       if(num<0){
           console.log(data);
       }
       
      })
    })
  }
  checkCharCount(v:any){
    return v.length<10?true:false;
  }

  readValue(){
  }

  cheakCondition(value: string | any[]){
    return value.length > 5? false:true;
  }
}
