
## Event Bubbling and Event Delegation

### Learning Goals

- [ ] Describe event bubbling/propogation
- [ ] Implement event delegation on a parent node
- [ ] Use control flow to differentiate behavior on the same event listener
- [ ] Add datasets to elements 
- [ ] Access HTML elements using datasets

### Event Propogation 

- Given a series of buttons deeply nested in some `<div></div>` tags on our page:

```html
<div id="helicopter-parent">
  <div>
    <br>
    <div>
      <br>
      <div>
        <p>HI</p>
        <div>
          <button data-name="alert">Alert ME</button>
          <button data-name="log">Console Log something</button>
          <button data-name="error">Console Error</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
```

- How might we listen for events on those buttons?
  - We **could** find all the buttons, loop over that collection and attach several event listeners for our buttons. This should feel messy and hacky. There must be a better way!™

### What about Event Delegation?

![event delegation diagram](https://javascript.info/article/bubbling-and-capturing/eventflow@2x.png)

- The diagram above outlines the flow of JS events from the target all the way up the DOM (tree) to the topmost node, the `Document`
  - In other words, **every HTML element will know about everything that happens to its children**

- Instead of iterating over the buttons and attaching duplicate event handlers, we can create **one** event handler to Rule Them All™:

```js
const helicopterNode = document.getElementById('helicopter-parent')

helicopterNode.addEventListener('click', function(event) {
  console.log(event.target) //event target will be whatever node was clicked
})
```

- Now we can introduce some control flow to our click handler and decide what to do based on which button was clicked:

```js
helicopterNode.addEventListener('click', function(event) {
  // i do not need to prevent the click default action
  //event.target is the node that was clicked
  // our buttons have a key of dataset -> { name: 'alert' }
  // i am checking the value of button.dataset.name and deciding what to do based on what i find

  if (event.target.dataset.name === 'alert') {
    window.alert('HI')
  } else if (event.target.dataset.name === 'log') {
    console.log('HI')
  } else if (event.target.dataset.name === 'error') {
    console.error('HI')
  }
})
```

- _nice_

![nice](https://media.giphy.com/media/3M9CR4S2KFNyOIqHGg/giphy.gif)

---

## External Resources:

- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
- [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
- [MDN Article on `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Article on `textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [MDN Article on Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [JavaScript.info Article on Event Bubbling](https://javascript.info/bubbling-and-capturing)








