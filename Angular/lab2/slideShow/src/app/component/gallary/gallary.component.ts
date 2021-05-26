import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  index: number = 1;
  timer: any;
  image_source: string = `assets/images/${this.index}.jpg`;
  next_image() {
    if (this.index < 3) this.index++;
    this.image_source = `assets/images/${this.index}.jpg`;
  }
  previous_image() {
    if (this.index != 1) this.index--;
    this.image_source = `assets/images/${this.index}.jpg`;
  }
  play_slide_show() {
    this.timer = setInterval(() => {
      if (this.index == 3) this.index = 0;
      this.index++;
      this.image_source = `assets/images/${this.index}.jpg`;
    }, 1000);
  }
  pause_slide_show() {
    clearInterval(this.timer);
  }
}
