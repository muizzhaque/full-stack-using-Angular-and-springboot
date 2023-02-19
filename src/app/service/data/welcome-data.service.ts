import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
error: any;
constructor(public message: String){}
}

@Injectable({
  providedIn: 'root'
})
// export class HelloWorldBean {
//   constructor(public message : String){ }
// }
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service")
  }
  executeHelloWorldBeanServiceWithPathVariable(name: any) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Execute Hello World Bean Service")
  }
}
