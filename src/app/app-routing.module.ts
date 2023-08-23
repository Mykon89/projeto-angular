import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarUsuarioComponent } from './componentes/usuarios/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './componentes/usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard], // Proteger a rota /home
  },
  {
    path: 'listar-usuario',
    component: ListarUsuarioComponent,
    canActivate: [AuthGuard], // Proteger a rota /home
  },
  {
    path: 'cadastrar-usuario',
    component: CadastrarUsuarioComponent,
    canActivate: [AuthGuard], // Proteger a rota /home
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
