import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
    console.log("constructor: :  StorageService ");
  }
  contentComponentIdList: any = [];

  add(key: string, value: any) {
    //console.log("key: ", key, "value", value);
    this.remove(key);
    if (value) {
      value = JSON.stringify(value);
      value = btoa(value);
    }
    localStorage.setItem(key, value);
  }

  get<T>(key: string): T {
    let value: string = localStorage.getItem(key);

    if (value && value !== "undefined" && value !== "null") {
      try {
        value = atob(value);
        return <T>JSON.parse(value);
      } catch (ex) {
        return null;
      }
    }
    return null;
  }

  remove(key: string) {
    console.log("remove is called!!");
    localStorage.removeItem(key);
  }


}
