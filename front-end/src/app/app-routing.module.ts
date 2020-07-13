import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'post', 
    component: PostComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'usuario', 
    component: UsuarioComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
