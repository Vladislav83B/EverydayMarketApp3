import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  categories: Category[] = [
    { id: 1, name: 'Chair' },
    { id: 2, name: 'Sofa' },
    { id: 3, name: 'Table' },
    { id: 4, name: 'Door' },
    { id: 5, name: 'Carpet' }
  ];

  selectedCategory: Category | null = null;

  onCategorySelected(category: Category) {
    this.selectedCategory = category;
    alert(`Selected Category: ${category.name}`);
  }
}