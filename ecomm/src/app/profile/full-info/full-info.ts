import { Component, Input } from '@angular/core';
import { profileInt } from '../profileInter';

@Component({
  selector: 'app-full-info',
  imports: [],
  templateUrl: './full-info.html',
  styleUrl: './full-info.css'
})
export class FullInfo {
@Input() profile!:profileInt | null;
}
