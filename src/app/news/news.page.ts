import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewsService} from '../Service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  IrishNewsStories:any=[];
  constructor(public router: Router,private newsService:NewsService) { 

  }

  ngOnInit(){
    //this is recieving data from the api on start up and assigning it onto an array
    this.newsService.getLatestNewsStories().subscribe(
      (data)=>{
        this.IrishNewsStories = data.articles;
      }
    );
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}