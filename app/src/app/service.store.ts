import {computed, Injectable} from "@angular/core";
import {Store, useDevtools, useStorePersistence} from "signalstory";

@Injectable({
  providedIn: "root",
})

export class ServiceStore extends Store<any>{

  constructor() {
    super({
      initialState: {},
      plugins: [
        useStorePersistence({
          persistenceKey: 'service'
        }),
        useDevtools()
      ]
    });
  }

  getAll(){
    return computed(() => this.state())();
  }

}
