import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ModelsComponent} from "./pages/models/models.component";
import {FormComponent} from "./pages/form/form.component";
import {SdComponent} from './pages/sd/sd.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'models', component: ModelsComponent},
    {path: 'form', component: FormComponent},
    {path: 'sd', component: SdComponent}
];
