/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface DiggsTypingCarousel {
      'textList': string;
      'waitSeed': number;
    }
  }

  interface HTMLDiggsTypingCarouselElement extends StencilComponents.DiggsTypingCarousel, HTMLStencilElement {}

  var HTMLDiggsTypingCarouselElement: {
    prototype: HTMLDiggsTypingCarouselElement;
    new (): HTMLDiggsTypingCarouselElement;
  };
  interface HTMLElementTagNameMap {
    'diggs-typing-carousel': HTMLDiggsTypingCarouselElement;
  }
  interface ElementTagNameMap {
    'diggs-typing-carousel': HTMLDiggsTypingCarouselElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'diggs-typing-carousel': JSXElements.DiggsTypingCarouselAttributes;
    }
  }
  namespace JSXElements {
    export interface DiggsTypingCarouselAttributes extends HTMLAttributes {
      'textList'?: string;
      'waitSeed'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;