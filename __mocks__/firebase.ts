import { EventEmitter } from "events";

export const testMethod = () => "From mock";

class FirebaseService extends EventEmitter {
  public test: string = "mock";

  constructor() {
    super();
    console.log("Imported mock service");
  }

  getData(): Promise<any> {
    console.log("get data called");
    return Promise.resolve({ data: "[MOCK] fake data from mock service, no API" });
  }
}

export default new FirebaseService();

export function firebaseDecorator(story: any, { parameters }: any) {
  return story();
}
