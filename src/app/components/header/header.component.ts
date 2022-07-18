import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'STUDY LOGGER';


  constructor() { }

  ngOnInit(): void {
  }
  toggleStudyItem() {
    console.log('click')

  }
}
