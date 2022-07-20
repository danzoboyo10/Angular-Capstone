import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'STUDY LOGGER';
  showAddStudyItem: boolean = true
  subscription!: Subscription

  constructor(private uiService:UiService, private router:Router) { 
    this.subscription = this.uiService.onToggle().subscribe(Value => (this.showAddStudyItem = Value))
  }

  ngOnInit(): void {
  }
  toggleStudyItem() {
    this.uiService.toggleAddStudyItem();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
