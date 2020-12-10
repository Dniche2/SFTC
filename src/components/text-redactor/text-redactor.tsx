import { Component, h } from '@stencil/core';

@Component({
  tag: 'text-redactor',
  styleUrl: 'text-redactor.css',
  shadow: true,
})
export class TextRedactor {

  render() {
    return (
      <div class="icon">
        <button>да</button>
        <button>я</button>
        <button>просто</button>
        <button>тупица</button>
        <button>это</button>
        <button>факт</button>
      </div>
    );
  }

}
