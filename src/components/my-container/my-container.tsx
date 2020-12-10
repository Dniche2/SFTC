// import { Component, h, State, Listen} from '@stencil/core';

// type MyContainerState = {
//   top: number,
//   left: number
// }
// @Component({
//   tag: 'my-container',
//   styleUrl: 'my-container.css',
//   shadow: true,
// })

// export class MyContainer {

// @State() state: MyContainerState = { top: 0, left: 0};

// @Listen('mousemove', {capture: true})
// handleMouseDown(event) {
  
//   this.state= {top: event.clientY - 20 , left: event.clientX - 20 };
// }

//   render() {
//     return (
//         <div class="container" style={{top: this.state.top+"px", left: this.state.left+"px" }}>
//         </div>  
//     );
//   }

// }
