import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { APP_CONFIG } from './app.constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle(APP_CONFIG.appName);
  }
}