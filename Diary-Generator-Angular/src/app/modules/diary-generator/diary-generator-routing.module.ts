import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryGeneratorComponent} from "./diary-generator.component";

const routes: Routes = [
  {
    path: '',
    component: DiaryGeneratorComponent,
    title: 'Diary Generator',
    data: {hideHeader: true}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DiaryGeneratorRoutingModule { }
