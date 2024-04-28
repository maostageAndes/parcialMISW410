import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

    
  constructor(private vehiculoService: VehiculoService) { }
  vehiculos: Array<Vehiculo> = [];

  totalRenult = 0;
  totalChevrolet = 0;
  totalNissan = 0;
  
  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;

      this.vehiculos.forEach(vehiculo =>{
        
        switch(vehiculo.marca){
          case 'Renault': 
          this.totalRenult++;
          break;
          case 'Chevrolet': 
          this.totalChevrolet++;
          break;
          case 'Nissan': 
          this.totalNissan++;
          break;
        }
      });

    });

  }
    
  ngOnInit() {
    this.getVehiculos();

  }

}
