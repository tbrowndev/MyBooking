import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import AddOn from 'src/app/common/types/service/addon';

@Component({
  selector: 'addon-item-comp',
  templateUrl: './addon-item.component.html',
  styleUrls: ['./addon-item.component.css']
})
export class AddonItemComponent implements OnInit {

  @Input() data: AddOn = {} as AddOn;
  @Input() isChecked: boolean = false;
  @Output() addonToggled: EventEmitter<boolean> = new EventEmitter<boolean>;
  public showDescription: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isChecked = !this.isChecked;
    this.addonToggled.emit(this.isChecked);
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription
  }

}
