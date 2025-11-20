import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-pessoa',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './form-pessoa.html',
  styleUrl: './form-pessoa.css',
})
export class FormPessoa {}
