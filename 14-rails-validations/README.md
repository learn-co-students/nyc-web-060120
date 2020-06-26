# Rails Validations
===

## SWBATs
- Understand the difference between client-side and server-side validations
- Create server side validations using ActiveRecord
- Validate different data types (string, number)
- Create custom validations
- Use the flash hash to persist data for an additional request and render error messages to the user

**Problem Statement:** We need to make sure users input data in a way that ensures only *valid* data is saved in our database. 

In other words, how do we protect our database from the typical user:

![typical-user](https://camo.githubusercontent.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)


## Outline
- [X] *bonus* Refactor controller using before_action
- [X] *bonus* Refactor views using partials

- [x] Discuss client vs server side validations
- [x] Add validations and review ActiveRecord documentation
- [] Add custom validations
- [x] Use validations in our controller
- [x] Render validation error messages
- [] *if there's time* Review strong params



------------------------------------------------------------------------------------



### Server Side Validation vs Client Side Validation

Server side validation means we are checking for valid data *after* the request comes to the server. Client side validation means we are checking for valid data *before* the request comes to the server - i.e. we will prevent the form from being submitted unless the data is valid.

In a typical application, you'll handle validations on both the server *and* client side - client-side to give immediate feedback to the user in case they are providing invalid input, and server-side to handle more complex validations as well as to account for malicious users who try to get around our validations on the client side.

In Mod 2, we'll be focusing mainly on server side validation. However, you've already seen some degree of client-side validation in the forms we've shown in lecture: we're using text input fields for strings; number input fields for integers; and checkboxes for booleans.

### ActiveRecord Validations

ActiveRecord provides a lot of code that makes it easy to write validations in our models. For example, if we wanted to ensure that all instances of a `Student` model are created with a `name` attribute, we could write something like this:

```rb
class Student < ApplicationRecord
  validates :name, presence: true
end
```

Some other common validations you might see:

- String validations
  - How long does the string need to be? `validates :name, length: { minimum: 2 }`
  - Is this string unique for this attribute on the model? `validates :email, uniqueness: true`  (i.e. is there a Student with the same email already in the database?)
- Number validations
  - Is this a valid number? `validates :age, numericality: true`
  - Is this a valid integer? `validates :age, numericality: { only_integer: true }`
  - Is this number within a certain range (ie 1..5)? `validates :age, inclusion: { in: 1..100 }`

We can also create custom validations like so:

```rb
class Student < ApplicationRecord
  validate :age_over_eighteen
  
  def age_over_eighteen
    if age && age < 18
      # throw an error if the age isn't included, or age is less than 18
      errors.add(:age, "must be over 18")
    end
    # otherwise it's valid!
  end
end
```

All the validations on a model will run only when information from the model is being saved to the database, so in response to the following methods: `create`, `save`, and `update`.

For example, if we have a Student model with the following validations:

```rb
class Student < ApplicationRecord
  validates :name, presence: true
  validates :age, numericality: { only_integer: true } 
end
```

And we ran the following code in Rails console:

```rb
ian = Student.create(name: "Ian", age: "one hundred")
# => #<Student id: nil, name: "Ian", age: 0, created_at: nil, updated_at: nil>
ian.valid?
# => false
ian.errors.full_messages
# => ["Age is not a number"]
```

The validations on our student model would prevent this from persisting bad data (in the example above, the `age: "one hundred"` isn't valid) in our database. 

We also have access to the `.valid?` method which we can use to check if our model is valid.

ActiveRecord *also* gives us access to error messages from our validations by calling `.errors` on our model instance. 

More Info: [Active Record Validations — Ruby on Rails Guides](https://guides.rubyonrails.org/active_record_validations.html)

### Rendering Error Messages

In the example above, we showed a way to protect our data from bad user input based by using ActiveRecord validations on our model.

The next problem we have to address is: how do we let our users know that their input wasn't valid?

Consider the following controller:

```rb
class StudentsController < ApplicationController
  
  def new
    @student = Student.new
  end

  def create
    @student = Student.create(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

end
```

Since we've added validations to our Student model, we can check if the new student was created successfully in our `students#create` action:

```rb
  def create
    @student = Student.create(params.require(:student).permit(:name, :age))
    if @student.valid?
      redirect_to @student
    else
      # we need to persist the errors for the redirect... but how???
      @errors = @student.errors.full_messages
      redirect_to new_student_path
    end
  end
```

We can use the `.valid?` method to check if the student was successfully created, and use the `.errors.full_messages` methods to get any error messages if the model isn't valid. **But** we have one more issue: since we want to show the user the form *and* the error messages in the view after redirecting, how can we persist the errors for the next request?


### Flash Hash

The solution to our problem of persisting data across requests can't be fixed by any of the tools we've seen to this point. To solve this issue, Rails provides a new tool: the Flash Hash.

The job of the flash hash is to give you a place to data for *one additional request*. (We'll see next week some solutions for persisting data across more than one request.)

To make use of the flash hash, let's rewrite our `students#create` method as follows:

```rb
  def create
    @student = Student.create(params.require(:student).permit(:name, :age))
    if @student.valid?
      redirect_to @student
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to new_student_path
    end
  end
```

In the code above, we've add a key of `:errors` on the flash hash and stored all the error messages from our validation errors on that key. 

The flash hash is available globally in our controllers and our views, so we can access the information from the flash hash after redirecting to the new_student_path. We can access it directly in the view file:

*app/views/students/new.html.erb*
```erb
<% if flash[:errors] %>
  <ul>
    <% flash[:errors].each do |error| %>
      <li><%= error %></li>
    <% end %>
  </ul>
<% end %>

<%= form_for @student do |f| %>
  <%= f.text_field :name %>
  <%= f.text_field :age %>
  <%= f.submit %>
<% end %>
```

In the view file, first we're checking if there are any errors present on the flash hash at the key of `:errors` (if we don't have any errors, what will happen when we call `flash[:errors].each`?). 

Finally, we're iterating over each error and generating HTML to display the error.

More Info: [Flash Hash Rails Docs](https://api.rubyonrails.org/classes/ActionDispatch/Flash.html)