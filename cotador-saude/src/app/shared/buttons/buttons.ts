import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-buttons',
  imports: [NgClass],
  templateUrl: './buttons.html',
})
export class Buttons {
  @Input() titulo = '';
  @Input() classeBotao = '';
}
