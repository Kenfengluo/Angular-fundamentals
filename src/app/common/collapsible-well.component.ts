import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
})
export class CollapsibleWellComponent {
  visiable = true;
  toggleContent() {
    this.visiable = !this.visiable;
  }
}
