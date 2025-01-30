import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  element = document.querySelector('#theme');

  constructor(
    
  ) { 
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.element?.setAttribute('href', url);
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;

    this.element?.setAttribute('href', url);
    localStorage.setItem('theme',url);
    this.checkCurrenTheme();
  }


  checkCurrenTheme(){

    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btntheme = element.getAttribute('data-theme');
      const themeURL = `./assets/css/colors/${btntheme}.css`;
      const currenTme = this.element?.getAttribute('href');
      if(themeURL === currenTme){
        element.classList.add('working');
      }
    })

  }

}
