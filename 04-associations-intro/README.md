## Associations in Ruby

# Activity

- Create a User
    - should have a name and an age
    - both are optional 
    - know its name 
    - know its age
    - if a user is asked for their name and there isn't one, the user should reply with "a girl has no name"



A User has many Plants

In a has many, belongs to we store the reference on the "belongs to" model (Plant model in this case)

- because there's only 1 thing to keep track of

- What are some methods that we should add? 

Attribute/Relationship method
    <!-- - a plant should know it's user  -->

Relationship methods
    - a user should know all of their plants 
    - a user can add a new plant

# Why use Associations

- Belongs to
    - An instance of Plant can only be associated with one instance of User
- Has many
    - An instance of User can be associated with many instances of Plant
- Has many through