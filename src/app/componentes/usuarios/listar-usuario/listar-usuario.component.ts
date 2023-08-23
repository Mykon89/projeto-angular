import { AuthService } from '../../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarioFilter: string = '';
  emailFilter: string = '';
  ativoFilter: string = 'TODOS';
  grupoFilter: string = 'TODOS';
  usuarios: any[] = [];
  filteredUsers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .getUsers('', '', 0) // Coloque os filtros iniciais desejados
      .then((response) => {
        this.usuarios = response.users;
        this.applyFilters(); // Inicialmente, filteredUsers é igual aos usuários retornados
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }

  fetchUsers() {
    this.authService
      .getUsers(this.usuarioFilter, this.emailFilter, this.getStatusValue())
      .then(
        (response) => {
          this.usuarios = response.users; // Armazene os usuários na variável 'usuarios'
          this.applyFilters();
        },
        (error: any) => {
          console.error('Erro ao buscar usuários:', error);
        }
      );
  }
  getStatusValue(): number {
    if (this.ativoFilter === 'TODOS') {
      return -1;
    } else if (this.ativoFilter === 'ATIVO') {
      return 1;
    } else if (this.ativoFilter === 'INATIVO') {
      return 0;
    }
    return -1; // Valor padrão caso a opção não seja reconhecida
  }

  applyFilters() {
    this.filteredUsers = this.usuarios.filter((user) => {
      const usuarioFilter = this.usuarioFilter
        ? this.usuarioFilter.toLowerCase()
        : '';
      const emailFilter = this.emailFilter
        ? this.emailFilter.toLowerCase()
        : '';
      const ativoFilter = this.ativoFilter;
      const grupoFilter = this.grupoFilter;

      return (
        user.username.toLowerCase().includes(usuarioFilter) &&
        user.email.toLowerCase().includes(emailFilter) &&
        (ativoFilter === 'TODOS' || user.ativo === ativoFilter) &&
        (grupoFilter === 'TODOS' || user.grupo === grupoFilter)
      );
    });
  }
}
