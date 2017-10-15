import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InputSwitcherComponent } from './input-switcher/input-switcher.component';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorsComponent } from './authors/authors.component';
import { LikeComponent } from './like/like.component';
import { RmenuComponent } from './rmenu/rmenu.component';
import { RmenuItemComponent } from './rmenu-item/rmenu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSwitcherComponent,
    TitleCasePipe,
    FavoriteComponent,
    AuthorsComponent,
    LikeComponent,
    RmenuComponent,
    RmenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
