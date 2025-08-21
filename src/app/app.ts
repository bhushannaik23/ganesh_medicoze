import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('medicalStore');

  ngOnInit(): void {
    AOS.init({
      duration: 500, // Animation speed
      once: false, // Animation happens only once
    });
  }
}
