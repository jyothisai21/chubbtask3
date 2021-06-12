import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input ('image') image=""
  @Input ('name') name=""
  @Input('region') region=""
  @Input ('capital') capital=""
  @Input ('population') population=""

  constructor() { }

  ngOnInit(): void {
  }

}
