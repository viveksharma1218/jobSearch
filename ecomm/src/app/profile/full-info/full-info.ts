import { Component, Input ,inject} from '@angular/core';
import { profileInt } from '../profileInter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-info',
  imports: [],
  templateUrl: './full-info.html',
  styleUrl: './full-info.css'
})
export class FullInfo {
@Input() profile!:profileInt | null;
router = inject(Router);
constructor(){}
applyForm(){
  this.router.navigate(['/apply']);
}

}
