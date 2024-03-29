import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopApp';

  constructor(private ls:AuthService){
    
  }

  ngOnInit(): void {
    this.ls.onLogin().subscribe( res => console.log(res) );
  }
}
