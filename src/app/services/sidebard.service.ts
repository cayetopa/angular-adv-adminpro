import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebardService {


   menu : any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Progressbar', url: '/dashboard/progress' },
        { titulo: 'Graficas', url: '/dashboard/grafica1' },
      ]
    }
   ];
  constructor() { }
}
