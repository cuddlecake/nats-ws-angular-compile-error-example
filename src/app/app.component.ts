import { Component, OnInit } from '@angular/core';
import { connect } from 'nats.ws';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  ngOnInit() {
	  connect()
  }
}
