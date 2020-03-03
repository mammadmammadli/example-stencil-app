import {
  Component, 
  Event, 
  EventEmitter,
  Host,
  h,
} from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Event() clicked: EventEmitter;

  private handleClick = (event: MouseEvent) => {
    this.clicked.emit(event);
  }

  render() {
    return (
      <Host>
        <button onClick={this.handleClick}>
          <slot />
        </button>
      </Host>
    );
  }
}
