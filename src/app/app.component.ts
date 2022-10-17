import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inteceptores';

  constructor(private usuarioService:UsuariosService){}
  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(res => {
      console.log(res)
    })
  }


}
