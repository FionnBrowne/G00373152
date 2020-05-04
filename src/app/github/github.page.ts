import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {

  constructor(public router: Router) {

   }

  ngOnInit() {
  }
  
  goHome(){
    this.router.navigateByUrl('/home');
  }

}
