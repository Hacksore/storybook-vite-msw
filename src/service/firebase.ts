import { EventEmitter } from "events";

export const testMethod = () => "From real service";

class FirebaseService extends EventEmitter {
  public test: string = "test";
  
  constructor() {
    super();
    console.log("Imported real service");

  }

  getData(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "[REAL] data from real service which comes from a live API" });
      }, 1000);
    });
  }
}

export default new FirebaseService();
