import { Component } from '@angular/core';
import { Navbar } from "../../marketing/navbar/navbar";
import { Footer } from "../../marketing/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-marketing-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './marketing-layout.html',
  styleUrl: './marketing-layout.css',
})
export class MarketingLayout {

}
