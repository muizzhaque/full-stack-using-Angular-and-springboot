import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  welcomeMessageFromService: String | undefined
  name = ''
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {

  }
  ngOnInit() {
    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error: HelloWorldBean) {
    this.welcomeMessageFromService = error.error.message
  }
}
