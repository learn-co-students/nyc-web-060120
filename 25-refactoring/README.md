# Just a little quiz thing 🤷🏻‍♂️

## DOM

### 1. What will happen when you run the following code?

```javascript
const buttons = document.getElementsByClassName('button')
buttons.addEventListener("click", function(e){
    console.log(e.target)
})    
```

- this will give you a "addEventListener" is not a function error

### Use the following HTML to answer the rest of the questions.

```html
<div id="container">
    <h4>This is a cool heading!</h4>
    <ul class="list">
        <li>The first list item</li>
        <li>The second list item</li>
    </ul>
    <p>This is a random "p" tag with a <span>SPAN</span> inside of it for some reason!</p>
    <li>This list item clearly makes no sense here!!! Who wrote this horrible code?</li>
</div>
```

### 2. Provide the JavaScript code that would get the second list item from the DOM and save it to a variable called `secondListItem`.

```javascript
const secondListItem = document.querySelectorAll('ul li')[1]
const secondListItem = document.getElementsByTageNae('li')[1]
```

### 3. Once you have the `secondListItem` node, how could you traverse the DOM tree to get the `<p>` tag.

```javascript
secondListItem.closest("#container").querySelector("p")
```

### 4. What query could you do to get just the `li` tags that are inside the `ul` and not that random janky one that's near the bottom for some reason?

```javascript
document.querySelectorAll('ul li')
```

## Events

### 1. Why do we use a `DOMContentLoaded` listener?

- to prevent our JS from being executed before all the HTML has been loaded to the page
- there are other strategies we could use if we wanted (e.g., window -> load event, defer keyword)

### 2. What type of element does a `submit` event happen to?

- `submit` events only happen on a form

### 3. What attribute of an `input` element can we use to easily retrieve data from form inputs?

- the name attribute 

```html
<input type="text" name="breed">
```

```javascript
const form = document.querySelector('form')
const breed = form.breed.value // => whatever the user inputted in this field
```
- 

### 4. What are the 2 required parameters we have to pass into a call to `addEventListener`?

- 1. the type of event as a string, this is a controlled phrase
- 2. the callback function to be executed when said event happens to said element

## Fetch

### 1. Write the code to do a GET request to "notarealwebsite.com" using fetch and log the response from the server to the console.

```javascript
fetch("notarealwebsite.com")
.then(response => response.json())
.then(data => console.log(data))
```

### 2. Following RESTful conventions (see [restular.com](http://www.restular.com) if you need a bit of help with that), write the fetch request to update the `user` record with an id of 1 at the URL "notarealwebsite.com".

```javascript
fetch("notarealwebsite.com/users/1", {
    method: "PATCH",
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
    },
    body: JSON.stringify({ eyeColor: "brown" })
})
.then(response => response.json())
.then(console.log)
.catch(error => {
    console.log("there was an error: ", error)
})

```

### 3. What effect does the following fetch request have in the database? What does the following fetch request *return*? 

- will delete the dog record with an id of 25
- it will return a Promise


```javascript
fetch("notarealwebsite.com/dogs/25", {
    method: "DELETE"
})
```

## Datasets

### 1. Write the HTML to create a `div` element with a dataset property of "awesome" set to a value of "Steven is".

```HTML

```

### 2. In JavaScript, how would you get the `div` element from the question above from the DOM using `document.querySelector` and the dataset?

```javascript

```

### 3. Write the JavaScript to create a `marquee` element with a dataset property of "jaws" set to a value of "great movie".

```javascript

```

### 4. In JavaScript, how would you access the "jaws" dataset property? How would you change its value to "overrated maybe"?

```javascript

```

