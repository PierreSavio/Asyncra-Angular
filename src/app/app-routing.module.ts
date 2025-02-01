import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './content/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { UserComponent } from './content/user/user.component';
import { DokumenComponent } from './content/dokumen/dokumen.component';
import { VerifvalidComponent } from './content/verifvalid/verifvalid.component';
import { PermohonanComponent } from './content/permohonan/permohonan.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
//Tambat
import { SungaikakapComponent } from './menu/tambat/sungaikakap/sungaikakap.component';
import { SungairengasComponent } from './menu/tambat/sungairengas/sungairengas.component';
//Menu
import { GerobakComponent } from './menu/gerobak/gerobak.component';
import { MessComponent } from './menu/mess/mess.component';
import { PasMasukComponent } from './menu/pas-masuk/pas-masuk.component';
import { LahanComponent } from './menu/lahan/lahan.component';
import { BangunanComponent } from './menu/bangunan/bangunan.component';
import { ListrikComponent } from './menu/listrik/listrik.component';
import { guardGuard } from './services/guard.guard';
import { ProfilesComponent } from './content/profiles/profiles.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [guardGuard], children: [
    { path: 'profiles', component: ProfilesComponent},
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'dokumen', component: DokumenComponent },
    { path: 'verifvalid', component: VerifvalidComponent },
    { path: 'permohonan', component: PermohonanComponent },
    { path: 'menu', component: MenuComponent, children: [
      { path: 'tambat-sungaikakap', component: SungaikakapComponent },
      { path: 'tambat-sungairengas', component: SungairengasComponent },
      { path: 'gerobak', component: GerobakComponent },
      { path: 'mess', component: MessComponent },
      { path: 'pas-masuk', component: PasMasukComponent },
      { path: 'lahan', component: LahanComponent },
      { path: 'bangunan', component: BangunanComponent },
      { path: 'listrik', component: ListrikComponent },
    ]},
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  ] },
  { path: 'header', component: HeaderComponent, canActivate: [guardGuard] },
  { path: 'navbar', component: NavbarComponent, canActivate: [guardGuard] },
  { path: 'footer', component: FooterComponent, canActivate: [guardGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
