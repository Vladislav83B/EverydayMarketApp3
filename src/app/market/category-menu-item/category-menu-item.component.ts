import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';  
@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent {
  @Input() category: Category | null = null;  
  @Output() categoryClick = new EventEmitter<Category>();

  onClick() {
    if (this.category) {
      this.categoryClick.emit(this.category);
    }
  }
}