import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name:"All Might"},
      {id: 2, name:"Endeavor"},
      {id: 3, name:"Best Jeanist"},
      {id: 4, name:"Edgeshot"},
      {id: 5, name:"Miruko"},
      {id: 6, name:"Crust"},
      {id: 7, name:"Kamui Woods"},
      {id: 8, name:"Wash"},
      {id: 9, name:"Yoroimusha"},
      {id: 10, name:"Ryukyu"}
    ];
    return {heroes};
  }
}
