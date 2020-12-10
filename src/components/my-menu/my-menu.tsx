import { Component, h} from '@stencil/core';

@Component({
  tag: 'my-menu',
  styleUrl: 'my-menu.css',
  shadow: true,
})
export class MyMenu {

  render() {
    return (
      <div>
      <button class="createSlide">cоздать слайд</button>
      <button class="deleteSlide">удалить</button>
      <button class="downloadSlide">загрузить</button>
      </div>
    );
  }

}
