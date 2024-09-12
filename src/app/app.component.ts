import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-panel';
  isDark: boolean = false; 
  activeMenuItem: string = 'Dashboard';
  defaultLightColor: string = '#dc3445'; 
  defaultDarkColor: string = '#111827';
  sidebarColor!: string ; 


// hover color change

defaultLightHoverColor: string = '#c50202'; 
defaultDarkHoverColor: string = '#2c02c5';
sidebarHoverColor!: string ; 



  constructor(public themeService: ServiceService) {
    this.setSidebarColor(); 
  }

  toggleTheme(): void {
    this.isDark = !this.isDark; 
    this.themeService.toggleTheme(); 
    this.setSidebarColor();
  }

  isDarkTheme(): boolean {
    return this.themeService.getIsDark(); 
  }

  selectMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem; 
  }

  applyColor(event: any) {
    const target = event.target as HTMLInputElement; 
    this.sidebarColor = target.value;
  }

  private setSidebarColor(): void {
    this.sidebarColor = this.isDark ? this.defaultDarkColor : this.defaultLightColor;
  }

  
}
