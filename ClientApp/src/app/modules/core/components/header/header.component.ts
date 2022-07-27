import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isHide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onHideSidebar(): void{
    this.isHide = !this.isHide
  }
}
