## Refactoring with Redux

# Questions

- Search Form
- What to do with state/props with redux
    - each component will be self managed 


# When do we need Redux
- Redux is feature-based
- do I need state? will this state be used by multiple components 

# Goal

1. Refactoring the APP 
2. BeyContainer
    1. Store -- createStore, Provider, rootReducer, state => beys: []
    2. actions/reducers
    3. msp/mdp -- debugging 
        - Reading? Writing? to state 
        - mapStateToProps

option 1: reducer
option 2: App => send it to redux 
option 3: action 








3. ClickHandler 
4. Fetch 

1. Store -- thunk, applyMiddleWare
2. action/reducers
    action => return a function that handles the fetch
    reducer => take the payload and update state 
3. mdp => Triggering a change in state 


# Process
- Prerequisite: Reading or Writing? 
1. store
2. actions/reducer
3. msp or mdp
4. rinse and repeat
