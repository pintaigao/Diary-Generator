import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'generator',
    loadChildren: () => import('./modules/diary-generator/diary-generator.module').then(m => m.DiaryGeneratorModule)
  }
];
