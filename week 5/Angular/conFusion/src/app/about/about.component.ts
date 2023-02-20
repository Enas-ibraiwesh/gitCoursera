import { Component, OnInit ,Inject} from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;
  constructor(private laederService: LeaderService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
   this.laederService.getLeaders()
   .subscribe((leaders=> this.leaders = leaders),
   errmess => this.errMess = <any>errmess);

  }

}
