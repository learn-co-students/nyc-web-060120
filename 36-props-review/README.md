# Review: react-props-assessment

## Questions

- Information Flow


## Instructions:

- Fork and Clone this lab and add your instructor as a collaborator. Then read the below deliverables and make all necessary changes to the app to get it to work. 

- There are no learn tests for this project

## Deliverables:

- You are provided a `Header` component that is rendered inside of `App`
- `Header` should have a key called "header", inside of its `props`, that evaluates to a string of your choice
- Header should append the value of its "header" prop to the DOM

- You are also provided a `NotesContainer` which is responsible for rendering multiple `Note` components
- The `NotesContainer` component has an `apiResponse` method that returns an array of notes
- Each `Note` component should be able to access the `content` key inside of its props and print the value of the `content` key to the DOM as a `li` tag

- The `NotesContainer` should be rendered underneath the `Header` on the DOM