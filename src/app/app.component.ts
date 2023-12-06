// Import necessary modules
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private el: ElementRef) {}

  scrollTo(section: string): void {
    if (section === 'product') {
      // If 'product' is clicked, navigate to the '/product' route
      this.router.navigate(['/product']);
    } else {
      // Scroll to the section with the specified ID
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
