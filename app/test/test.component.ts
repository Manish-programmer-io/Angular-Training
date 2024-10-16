import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  // templateUrl: './test.component.html',
  template:`<h2>Welcome Manish</h2>`,
  styleUrl: './test.component.css'
})
export class TestComponent {
 
}
