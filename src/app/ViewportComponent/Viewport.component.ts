import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-Viewport',
  templateUrl: './Viewport.component.html',
  styleUrls: ['./Viewport.component.css']
})
export class ViewportComponent implements OnInit {

  viewportWidth: number = 0;

  ngOnInit() {
    this.setViewportWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.setViewportWidth();
  }

  setViewportWidth() {
    this.viewportWidth = window.innerWidth;
  }

}



