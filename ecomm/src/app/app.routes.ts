import { Routes } from '@angular/router';
import { Apply } from './apply/apply';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path:'', component:Profile},
    {path:'profile',component:Profile},
    {path:'apply',component:Apply}
];
