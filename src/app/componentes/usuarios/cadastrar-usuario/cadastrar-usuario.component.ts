import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  active = false; // Valor padrão para o switch

  constructor() {}

  ngOnInit(): void {}

  submitForm(userForm: NgForm) {
    if (userForm.valid) {
      const formData = userForm.value;
      console.log('Dados do formulário:', formData);
    }
  }
}
