import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  variable!: Observable<string>;
  heading!:string;
  constructor() { }
  i=0;
  ngOnInit(): void {

    ///Observer 
    this.variable=new Observable(
      function(observer){
        try{
          observer.next('Vishal');

          setTimeout(()=>{
            observer.next('Singh');

          },1000);
          setTimeout(()=>{
            observer.next('Mindtree');

          },2000)
        }
        catch(e){
          console.log("error");
          
          console.error(e); 
        }
      }
      )

      //Observer is nothing Without Subscription
    this.variable.subscribe(data=>{
      console.log(data);
      this.heading=data;
    })
  }

}
