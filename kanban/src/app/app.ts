import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from '@features/board/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
