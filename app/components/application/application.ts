import { Component } from '@angular/core';

import HeaderComponent from '../header/header.component';

@Component({
  selector: 'start-application',
  templateUrl: 'app/components/application/application.html',
  directives: [
    HeaderComponent
  ]
})
export class ApplicationComponent {}
