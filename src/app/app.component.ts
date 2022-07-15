import { Component } from '@angular/core';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bhavani_Test';
  footer_links= [
    {
      top_link_name: "Acerca de",
      top_link_path: "/",
      sub_links: 
        [
          {
            name: "Mi perfil",
            path: "/",
          },
          {
            name: "Acerca de",
            path: "/",
          },
          {
            name: "Blog",
            path: "/",
          },
          {
            name: "Nuestras investigaciones",
            path: "/",
          },
        ]
    },
    {
      top_link_name: "La Microdosis",
      top_link_path: "/",
      sub_links: 
        [
          {
            name: "Beneficio",
            path: "/",
          },
          {
            name: "Fórmulas",
            path: "/",
          },
          {
            name: "Espectro de Luz",
            path: "/",
          },
          {
            name: "Protocolo",
            path: "/",
          },
        ]
    },
    {
      top_link_name: "El Tratamiento",
      top_link_path: "/",
      sub_links: 
        [
          {
            name: "Tratamiento",
            path: "/",
          },
          {
            name: "Coaches",
            path: "/",
          },
          {
            name: "Terapia",
            path: "/",
          },
          {
            name: "Preguntas Frecuentes",
            path: "/",
          },
        ]
    },
  
  ];
}
