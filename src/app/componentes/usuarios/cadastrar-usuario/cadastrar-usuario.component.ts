import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  active = false; // Valor padrão para o switch
  createUserError = false; // Variável para controlar o estado de erro do cadastro de usuário

  frmData = {
    user: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    user_group: 1,
    active: 1,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  submitForm(userForm: NgForm) {
    if (userForm.valid) {
      const formData = userForm.value;
      console.log('Dados do formulário:', formData);
    }
  }

  onSubmit() {
    const { user, password, email, address, phone, user_group, active } =
      this.frmData;

    this.apiService
      .createUser(user, password, email, address, phone, user_group, active)
      .then((response) => {
        if (response.status === true) {
        } else {
          console.error('Campos não preenchidos, Falha ao cadastrar usuário.'); // Tratar mensagem de erro da API
          this.createUserError = true;
        }
      })
      .catch((error) => {
        console.error('Erro de cadastro:', error);
      });
  }
}
