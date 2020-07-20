
# Rails API

## Questions

## Learning Goals

- [ ] Initialize a Rails application in API mode
- [ ] Set up Rails to serve JSON
- [ ] Refactor existing app to work with new backend
- [ ] Utilize `fetch` to make calls to Rails API and manipulate DOM with response


## Running the App 

* make sure you are in the directory for the Rails app
  * `cd rails-api`
* bundle to get all the gems
  * `bundle install`
* create the Postgres database (you should have Postgres installed from the Day 1 setup steps)
  * `rails db:create`
* run migrations
  * `rails db:migrate`
* seed data
  * `rails db:seed`
* run the Rails server
  * `rails s`
* confirm the app is serving JSON
  * `http://localhost:3000/api/v1/movies`

### Helpful Commands

* create a Rails app in API mode with a Postgresql database (and not as a Git repository)
  * `rails new movies-api --api -G -d=postgresql`


* create a new resource:
  * `rails g resource Api::V1::Movie title year:integer score:integer imageUrl`
  * nesting the resource this way means we have to edit the migration file and the model

### CORS

```ruby
# initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

```ruby
# Gemfile

#...

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

#...
```