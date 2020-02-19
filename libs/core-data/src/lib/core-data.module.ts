import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsService } from './fruits/fruits.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [FruitsService]
})
export class CoreDataModule {}
