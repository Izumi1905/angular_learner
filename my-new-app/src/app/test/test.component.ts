import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent {
  title = 'hello';
  en: string = 'Hello';
  vn: string = 'Xin chao';
  imageUrl= 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot = false;
  toggleForgot(){
    this.forgot = !this.forgot;
  }
}

