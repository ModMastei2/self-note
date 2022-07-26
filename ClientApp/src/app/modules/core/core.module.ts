import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.modules";
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from "./components/homepage/homepage.component";


@NgModule({
    declarations:[
    HeaderComponent,
    HomepageComponent
  ],
    imports:[
      SharedModule
    ],
    exports:[
        HeaderComponent
    ]
})

export class CoreModule{}