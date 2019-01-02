import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRootResolver } from './services/app-root-resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/project',
    pathMatch: 'full',
    resolve: {
      data: AppRootResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
