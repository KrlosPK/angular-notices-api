import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  @Input() listNoticias: any;
  constructor() { }

  ngOnInit(): void {
  }

}
