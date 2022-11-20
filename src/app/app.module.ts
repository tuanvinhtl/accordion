import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FooterModule } from "./components/footer/footer.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AccordionModule } from "./lib/accordion/accordion.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule, FormsModule, FooterModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
