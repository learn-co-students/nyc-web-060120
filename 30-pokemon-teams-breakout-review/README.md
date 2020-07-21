# Pokemon Teams Project

## Learning Goals

- Combine both a JavaScript frontend with an API-Only build of Rails

## Introduction

The ability to spin up a Rails APIs can actually help us develop our frontend
JavaScript abilities, as the API will give something tangible to work against
as you write your code.

For this project, you will need to build out both a JavaScript frontend and
Rails API backend. There are no tests, but a set of goals for you to try and
achieve.

You are going to help us keep track of Pokemon trainers at Flatiron School.
The data about trainers and Pokemon will be stored on a Rails API, but we can
handle the visual aspects in a JavaScript frontend.

Through their journey, a Pokemon trainer can only have 6 Pokemon on their team.
As you build, the eventual goal of a fully functional Pokemon team
organizer where we can add and remove Pokemon as needed:

![Showing Finished Project Example](/pokemon-teams-frontend/assets/pokemon_teams.gif)

Although we have not explicitly gone over some of the CRUD actions involved in
adding and deleting relationships in this section of content, refer back to what
you learned about CRUD actions in Rails and use your new understanding of
rendering JSON to try and solve these challenges.

## Goals

**Note:** There are no tests in this lesson so running the `learn` command will
not work. Rather, your task is to build towards the goals below by constructing
both a Rails API and JavaScript frontend together. The specific implementation
for achieving these goals is left to you.

- When a user loads the page, they should see all trainers, with their current
  team of Pokemon.
- Whenever a user hits "Add Pokemon" and they have space on their team, they
  should get a new Pokemon.
- Whenever a user hits "Release Pokemon" on a specific Pokemon team, that
  specific Pokemon should be released from the team.

## Backend

Create a backend from scratch inside this lesson using an API-only Rails build.
Exactly how you choose to structure things and the following guidelines to get
started:

```sh
rails new pokemon-teams-backend --api
```

Once the backend is created, navigate into the new folder. Within this new Rails
build, add the following gem to the Gemfile:

```rb
gem 'faker'
```

While we are in the Gemfile, uncomment `gem 'rack-cors'`, then run 
`bundle install`. If you recall, `rack-cors` is necessary for cross-origin
resource sharing. To get rack-cors working, once the gem is installed, uncomment
the following code in `config/initializers/cors.rb`:

```rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

> **Aside**: Notice that we've put this in `config/initializers/cors.rb`. We've
also seen this code being placed in `config/application.rb`. Both will work, but
Rails provides the `cors.rb` file specifically for defining our rules for
cross-origin HTTP requests.

The string after `origins` specifies which hosts will be allowed to make
requests to your API. Your brand-new rails app probably comes with the string
`"example.com"` there — change it to "*" to allow all hosts. In a production
application, you might want to specify a particular hostname.

If you already have a rails server running, stop and restart it so that your
configuration changes can take effect.

With these gems installed, use the following resource generators to create
resources for this API:

```sh
rails g resource trainer name
rails g resource pokemon species nickname trainer:references
```

Run `rails db:migrate` to execute our migration files, and create database and schema. Using
`trainer:references` will set up `belongs_to :trainer` in the `Pokemon` model,
though it won't update the other side of the relationship. You will need to add
the `has_many :pokemons` in the `Trainer` model yourself.

In `db/seeds.rb`, add the following and run `rails db:seed`:

```rb
require 'faker'
require 'securerandom'

Trainer.delete_all
Pokemon.delete_all

trainers_name = [
  'Natalie',
  'Prince',
  'Dick',
  'Rachel',
  'Garry',
  'Jason',
  'Matt',
  'Niky',
  'Ashley'
]

trainer_collection = []

trainers_name.each do |name|
  trainer_collection << Trainer.create(name: name)
end

trainer_collection.each do |trainer|
  team_size = (SecureRandom.random_number(6) + 1).floor

  (1..team_size).each do |poke|
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    Pokemon.create(nickname: name, species: species, trainer_id: trainer.id)
  end
end
```

At this point, you should be able to run `rails console` and confirm that you
have populated your tables with seed data.

## Frontend

Some basic structure is provided in the folder `pokemon-teams-frontend`, including
an HTML, CSS and JS file set up to work together.

## Running the Server

The API server should be started by accessing the folder pokemon-teams-backend (`cd pokemon-teams-backend`) and running `rails s` from a terminal window. It should run on port :3000 since the `pokemon-teams-frontend/src/index.js` file has a constant `BASE_URL` setup to use that port.

If for any reason you had to quit the running server and have to restart it, you might see an error saying **port 3000 already in use**. In this case, do the following:

Run `lsof -i :3000` to inspect what's running on port 3000 (alternatively, you can try `ps aux | grep 3000`).
You will see something like the following:
```
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME 
ruby 9639 matteo 28u IPv4 0x89939df84558ba7 0t0 TCP localhost:hbci (LISTEN) 
ruby 9639 matteo 29u IPv6 0x89939dfa2ef1897 0t0 TCP localhost:hbci (LISTEN)
```

Kill the process running by doing `kill -9 <PID_HERE>`, so in the case of my example `kill -9 9639`.
Now the `rails s` command should start the server on port 3000 without issues.

> **Aside**: In general, you can always specify what port to use when running the server, by running: `rails s -p PORT_NUMBER` (eg: `rails s -p 3001`).

The frontend should be started by accessing the folder pokemon-teams-frontend (`cd pokemon-teams-frontend`) and, in a new terminal window, run `open index.html` or simply right-click on the file name and select `open in browser` if this option is available.

**Keep the rails server running since our frontend will fire requests to our backend API in order to retrieve the existing Trainers and Pokemons, as well as performing other actions like creating and deleting Pokemons.**

### Suggested HTML

As CSS is already provided, you can use this sample HTML as a guide when
building out your frontend JavaScript:

```html
<div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
```

### Building out the rest of the project

Remember that your user stories are:

- When a user loads the page, they should see all trainers, with their current
  team of Pokemon.
- Whenever a user hits "Add Pokemon" and they have space on their team, they
  should get a new Pokemon.
- Whenever a user hits "Release Pokemon" on a specific Pokemon team, that
  specific Pokemon should be released from the team.

You should build out just enough of your Rails API to achieve the above. You
_should not_ build out full CRUD on each model. For example, the frontend will
not have the ability to create a new Trainer, so your backend should not have a
`POST /trainers` route.

## Example API Requests

To help you shape your data, here are some JSON data structures you should look
to mirror while building out your backend:

### Getting All Trainers and their Pokemon

```text
#=> Example Request
GET /trainers

#=> Example Response
[
  {
    "id":1,
    "name":"Prince",
    "pokemons":[
      {
        "id":140,
        "nickname":"Jacey",
        "species":"Kakuna",
        "trainer_id":1
      },
      {
        "id":141,
        "nickname":"Zachariah",
        "species":"Ditto",
        "trainer_id":1
      },
      // ...
    ]
  }
  // ...
]
```

### Adding a Pokemon

* Note: When adding a new pokemon, the nickname should be generated using the
  `Faker::Name` gem and the species should be generated using the
  `Faker::Games::Pokemon` gem. See the seeds.rb file above as an example.

```text
#=> Example Request
POST /pokemons

Required Headers:
{
  'Content-Type': 'application/json'
}

Required Body:
{
  "trainer_id": 1
}

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainer_id":1
}
```

### Releasing a Pokemon

```text
#=> Example Request
DELETE /pokemons/:pokemon_id

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainer_id":1
}
```
