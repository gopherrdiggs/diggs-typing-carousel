# Typing Carousel

This is a Stencil-based web component that can be used on websites for the typing and backspace effect that works with a supplied list of strings.

# Example Usage

```html
<h1>Here is my awesome list of <diggs-typing-carousel text-list='[ "gizmos.", "widgets.", "thingamajigs!"  ]'/></h1>
```

# Demo

![diggs-typing-carousel-demo](https://gopherrdiggs.blob.core.windows.net/diggs/diggs-typing-carousel-demo.gif)

# Webcomponent Attributes

* *text-list* = array of strings to type out and delete
* *wait-seed* = the seed time (in milliseconds) between typing characters

## Build and Use

To use this webcomponent, clone this repo to a new directory:

```bash
git clone https://github.com/gopherrdiggs/diggs-typing-carousel.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm run build
```

This will create a set of distribution files in a *dist* directory.

Copy the contents of the *dist* directory into your project and add a script reference to diggs-typing-carousel.js in your index.html file.
