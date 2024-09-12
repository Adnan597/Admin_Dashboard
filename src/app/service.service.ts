import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private isDark = false;

  constructor() {
    // Check if the theme is set in localStorage
    const storedTheme = localStorage.getItem('dark');
    if (storedTheme !== null) {
      this.isDark = JSON.parse(storedTheme);
    } else {
      // If not, check if user prefers dark mode
      this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('dark', JSON.stringify(this.isDark));
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  getIsDark(): boolean {
    return this.isDark;
  }
}
