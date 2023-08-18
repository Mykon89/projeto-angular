import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarUsuarioComponent } from './componentes/usuarios/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './componentes/usuarios/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'listar-usuario',
    component: ListarUsuarioComponent,
  },
  {
    path: 'cadastrar-usuario',
    component: CadastrarUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
