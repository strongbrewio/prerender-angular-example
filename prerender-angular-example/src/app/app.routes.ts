import { HomeComponent } from './home/home.component';
import { BrewsComponent } from './brews/brews.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'brews',
    component: BrewsComponent
  },
  {
    path: 'consultancy',
    component: ConsultancyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routingModule = RouterModule.forRoot(routes);
