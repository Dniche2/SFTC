import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
    <body>
       <div>
        <header>
          <h1>Livrezon Create Slides</h1>
        </header>
      </div>
        <my-menu></my-menu>
        <my-container></my-container>
      <div class="my-components">
        <slide-menu class="slide-menu"></slide-menu>
        <text-redactor class="text-redactor"></text-redactor>
        <holst-for-presentation class="holst-for-presentation"></holst-for-presentation>
      </div>
    </body>
    
    );
  }
}
