import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1 class="text-center">Page Not found</h1>
        </div>
    </div>
  </div>`,
  styleUrls: []
})
export class NotFoundPageComponent {
  title = 'simple-blog';
}
