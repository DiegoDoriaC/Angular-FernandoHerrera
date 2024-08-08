import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports:[
    BrowserModule
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})

export class HeroModule{

}
