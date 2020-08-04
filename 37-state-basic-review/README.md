# react-stateevents-practice1

You have a fake api response that is being exported from `api.js`. The response is an array of multiple `dog` objects that look like this:

  > `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle"}`

- You have a regular component called DogCard, a container component called DogsList, an App component
- On the DOM your application should show a list with each dog's image and a button for each image with an innerText that says "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen. The `<h2>` innerText should say "Ruff" and its class should be "bark"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

# What are we practicing?

- Making decisions about when we need state and which component should hold state
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](react-events.gif)
