import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiaryGeneratorComponent} from "./diary-generator.component";
import {RouterOutlet} from "@angular/router";
import {DiaryGeneratorRoutingModule} from "./diary-generator-routing.module";



@NgModule({
  declarations: [
    DiaryGeneratorComponent
  ],
  imports: [
    CommonModule,
    DiaryGeneratorRoutingModule
  ]
})
export class DiaryGeneratorModule { }
