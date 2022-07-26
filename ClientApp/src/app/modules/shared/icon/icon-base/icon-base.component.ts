import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-base',
  templateUrl: './icon-base.component.html',
  styleUrls: ['./icon-base.component.css']
})
export class IconBaseComponent implements OnInit {
  @Input() text: string = '-';
  @Input() icon:string = 'fas fa-award'
  @Input('show-text') enabled: boolean = true;
  @Input('active') isActive: boolean = true;
  @Input('x-class') iconClass: string = 'icon';

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'icon-at',
  templateUrl: './icon-base.component.html',
  styleUrls: ['./icon-base.component.css']
})
export class IconAtComponent extends IconBaseComponent{
  @Input() override text: string = 'At';
  @Input() override icon:string = 'fas fa-at'
}
