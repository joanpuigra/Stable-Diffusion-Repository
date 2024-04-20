import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModelsComponent} from "./components/models/models.component";
import {FormComponent} from "./components/form/form.component";
import {SdComponent} from './components/sd/sd.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'models', component: ModelsComponent},
    {path: 'form', component: FormComponent},
    {path: 'sd', component: SdComponent}
];
