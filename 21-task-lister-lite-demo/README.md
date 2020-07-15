# TaskLister Lite™️

Today you'll be creating a simple to do list application that will focus on DOM
manipulation. Take a look at `index.html` and identify the DOM elements you'll
need to manipulate before you write any code.

Check out the [working demo][example]!

## Learning Goals:

* Squelch a default action with `event.preventDefault`

## Instructions:

Instead of relying on unit tests, this lab is deliverable driven. You will be
responsible for asserting your solution works as intended by testing the
behavior visually in the browser.

1. Fork and clone this repository
2. Open `index.html` in Chrome (Tip: you can use `open index.html` in bash and, as long as Chrome is your default application for opening `.html` files, it will automatically open the file)
3. Put your JavaScript knowledge to the test and work your way through the deliverables

## Structuring Your Code:

You've been provided with a basic HTML file, as well as a `src/index.js` file
where you can implement your solution. Focus on getting the feature working
while using your knowledge to write readable, maintainable code. 

## Deliverables:

- As a user, I should be able to type a task into the input field.
- As a user, I should be able to click some form of a submit button.
- As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

**Note:** [While the example][example] shows one working application of TaskLister Lite™️, yours can (and is encouraged to!) look however you like.

## Squelch a Default Action with `Event.preventDefault`

The deliverables require you to handle an event in a form based on clicking a submit button. You're going to need to listen for a `submit` event on the `<form>` element. 

By default, Form elements automatically submit the form, which redirects the browser to a new url. This _is not_ the experience we want to build in this lab. We want to _prevent_ that event from performing its _default_ behavior (submitting the form), because ***we*** want to update the DOM using JavaScript. In order to _prevent_ the _default_ behavior of the
`submit` event, when our handler "sees" the event, it needs to invoke the `preventDefault()` method on it.

Take a look at the [MDN Documentation on `Event.preventDefault`][mdn-pd]. You'll see how JavaScript is used to prevent a form element (checkbox) from doing it's _default_ behavior (appearing checked upon click). You'll want to prevent `submit` from doing it's default behavior in a similar fashion.

## Stretch Deliverables:

If you finish early, try to implement one or more of the following:

- A delete function that will remove tasks from your list
- A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
  - As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
- An additional input field (e.g. user, duration, date due)
- Ability to edit tasks
- Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

[example]: https://learn-co-curriculum.github.io/js-task-lister-lite/
[mdn-pd]: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
