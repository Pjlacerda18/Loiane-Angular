import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  static getLocale: any;

  constructor() { }

  getLocale(){
    return 'pt-BR'
  }

}
