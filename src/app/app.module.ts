import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './content/home/home.component';
import { PermohonanComponent } from './content/permohonan/permohonan.component';
import { DokumenComponent } from './content/dokumen/dokumen.component';
import { VerifvalidComponent } from './content/verifvalid/verifvalid.component';
import { UserComponent } from './content/user/user.component';
import { SungairengasComponent } from './menu/tambat/sungairengas/sungairengas.component';
import { GerobakComponent } from './menu/gerobak/gerobak.component';
import { SungaikakapComponent } from './menu/tambat/sungaikakap/sungaikakap.component';
import { MenuComponent } from './menu/menu.component';
import { MessComponent } from './menu/mess/mess.component';
import { PasMasukComponent } from './menu/pas-masuk/pas-masuk.component';
import { LahanComponent } from './menu/lahan/lahan.component';
import { BangunanComponent } from './menu/bangunan/bangunan.component';
import { ListrikComponent } from './menu/listrik/listrik.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PermohonanComponent,
    DokumenComponent,
    VerifvalidComponent,
    UserComponent,
    SungairengasComponent,
    GerobakComponent,
    SungaikakapComponent,
    MenuComponent,
    MessComponent,
    PasMasukComponent,
    LahanComponent,
    BangunanComponent,
    ListrikComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
