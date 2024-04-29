import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';


describe('VehiculoListComponent', () => {
 let component: VehiculoComponent;
 let fixture: ComponentFixture<VehiculoComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiculoComponent ],
     providers: [ VehiculoService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(VehiculoComponent);
   component = fixture.componentInstance;
   component.vehiculos = [
     new Vehiculo(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(),faker.lorem.sentence(),faker.number.int(), faker.number.int(), faker.lorem.sentence(),faker.lorem.sentence() ),
     new Vehiculo(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(),faker.lorem.sentence(),faker.number.int(), faker.number.int(), faker.lorem.sentence(),faker.lorem.sentence() ),
     new Vehiculo(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(),faker.lorem.sentence(),faker.number.int(), faker.number.int(), faker.lorem.sentence(),faker.lorem.sentence() )
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component tiene una tabla de 3 elementos", () => {
    const rows = debug.queryAll(By.css("tbody tr"));
    expect(rows.length).toEqual(3);
 });

 it('Mostrar data de vehiculos en tabla', () => {
  const rows = debug.queryAll(By.css("tbody tr th"));
  rows.forEach((row, index) => {
    const cells = row.queryAll(By.css("dd"));
    expect(cells[0].nativeElement.textContent).toContain(component.vehiculos[index].id);
    
      
  });

});

});