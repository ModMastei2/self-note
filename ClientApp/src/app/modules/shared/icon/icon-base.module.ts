import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconAtComponent, IconBaseComponent } from './icon-base/icon-base.component';

@NgModule({
  declarations: [
    IconBaseComponent
    , IconAtComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    IconBaseComponent
    , IconAtComponent
  ]
})

export class IconBaseModule{}