# Rails Associations
===

## SWBATs
- Set up ActiveRecord associations on models in Rails
- Use data from the associations in view files
- Render a dropdown `<select>` tag in a form using the `collection_select` helper
- Handle deleting an instance of a model that has other records associated using `dependent: :destroy`

## Outline
- [] Finish CRUD (delete)
- [ ] Add an additional model to our domain
  - [ ] Create relationship using ActiveRecord
  - [ ] Use information from the association in our views
  - [ ] Make a create form for the new model with a dropdown
  - [ ] Update our delete method from the first model

Bonus
- [] Clean Up Controller && Views

 User -< Favorite >- Drink
      -< Order >-








  ----------------------------------------------------------------------------------------

### ActiveRecord Associations Review

Rails uses ActiveRecord on models under the hood, so your knowledge of associations from Mod 1 is crucial to setting you up for success working with Rails. 

For convenience, Rails lets you create associations when you are generating a model using `rails g model`. 

For example, if we have relationship where Student `has_many` Labs and a Lab `belongs_to` a Student, you can generate the Labs model with: 

`rails g model Lab name student:belongs_to`

Adding `student:belongs_to` in the generate command will:
- Create a `student_id` column in the migration
- Add `belongs_to :student` in the Lab model class
 
You might also see `references` instead of `belongs_to` - something like `rails g model student:references`. Both work exactly the same (`belongs_to` is an alias for `references`). 

More Info: [Active Record Migrations — Ruby on Rails Guides](https://guides.rubyonrails.org/active_record_migrations.html#creating-a-standalone-migration)

### Using Associations in View Files

Using our Student -< Lab domain, let's assume our models are set up as follows:

```rb
# app/models/student.rb
class Student < ApplicationRecord
  has_many :labs
end

# app/models/lab.rb
class Lab < ApplicationRecord
  belongs_to :student
end
```

Since we have created the associations in our models, we can now access information using the association in our views:

```html.erb
<!--app/views/labs/show.html.erb-->
<h1><%= @lab.name %></h1>
<p>This lab belongs to <%= @lab.student.name %> </p>
```

### Dropdowns with `collection_select`

If we wanted to give a user the ability to create a new Lab in our application, they would need some way of selecting the `student_id` for the associated Student (since a Lab belongs to a Student). In Sinatra, we showed that the `<select>` tag gives our users a nice interface to work with rather than using an input field to type in a student id number:

```html
<select name="car_id">
  <option value="1">Volvo</option>
  <option value="2">Saab</option>
  <option value="3">Mercedes</option>
  <option value="4">Audi</option>
</select>
```

In Rails, there's a helper method for building out `<select>` tags called `collection_select`. You can use it with `form_for` like this:

```erb
<!--app/views/labs/new.html.erb-->
<%= form_for @lab do |f| %>
  <%= f.collection_select :student_id, @students, :id, :name %>
  <%= f.submit %>
<% end %>
```

In the above example, the collection_select will iterate over each instance of a student in the `@students` variable to generate the `<option>` tags within our select tag, using `student.id` for the value and the `student.name` as the text to display to the user. It would generate the following HTML for a select tag:

```html
<select name="lab[student_id]" id="lab_student_id">
  <option value="1">Ian</option>
  <option value="2">Rei</option>
  <option value="3">Leizl</option>
</select>
```

The selected value of the dropdown would come through in the params under `params[:lab][:student_id]` so we can use it to create a new instance of a Lab and associate it with the student selected in the dropdown.

More Info: [collection_select (ActionView::Helpers::FormOptionsHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select)


### Controller Filter Methods

Controller filters are methods that you can specify within a given controller to instruct Rails to run certain code before or after running a controller method.

Consider the following controller:

```rb
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    @student.update(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

end
```

In the `show`, `edit` and `update` methods, we're repeating the code to find a student based on params and assign that student to an instance variable. We could refactor this to a helper method, like `set_student` below:

```rb
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    set_student
  end

  def edit
    set_student
  end

  def update
    set_student
    @student.update(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end
end
```

Rails lets us take this one step further and define methods we want to run before certain controller actions using the `before_action` helper:


```rb
class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :edit, :update]

  def index
    @students = Student.all
  end

  def show
  end

  def edit
  end

  def update
    @student.update(params.require(:student).permit(:name, :age))
    redirect_to @student
  end

  private

  def set_student
    @student = Student.find(params[:id])
  end
end
```

This code tells Rails: "before you run the show, edit and update actions, run the set_student method". This is a helpful pattern for DRYing up our code and reusing logic across our controller actions.

More Info: [Action Controller Overview — Ruby on Rails Guides](https://guides.rubyonrails.org/action_controller_overview.html#filters)


### Partials

If you have any HTML you'd like to reuse in multiple view files, you can extract it to a partial view file. This helps cut down on writing repetitive code. For example, we can re-use the code for a `form_for` for both the `new` and `edit` views. 

*app/views/labs/new.html.erb*
```erb
<h1>New Lab Form</h1>
<%= render "form" %>
```