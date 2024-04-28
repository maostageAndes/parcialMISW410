import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private jsonurl = environment.baseUrl + "202212_MISW4104_Grupo1.json";

constructor(private http: HttpClient) { }

getVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.jsonurl);
}

}
