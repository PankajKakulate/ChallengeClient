import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message:any;
  
  constructor(private obj:MarvellousService)
  {}

  ngOnInit(){
      this.obj.getBatches().subscribe(data=>{
        this.message=data;
      });
    }
}
