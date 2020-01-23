import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { usersCollection as users } from "./users.collection";
import { carsCollection as cars } from './cars.collections';

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { users, cars };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
