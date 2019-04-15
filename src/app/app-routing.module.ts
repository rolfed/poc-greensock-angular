import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MushroomExampleComponent } from './mushroom-example/mushroom-example.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

const routes: Routes = [
  { path: 'mushroom', component: MushroomExampleComponent },
  { path: 'cta', component: CallToActionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
