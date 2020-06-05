## Associations in Ruby Cont: Many to Many

1. Code Challenge



# Rules of Associations

- the belongs to always holds the reference
- the has many NEVER holds the reference
- the has many has to go through the reference "class" to retrieve information 
    - using a single source of truth

# Pop Quiz

- What are the two types of associations/relationships that we discussed yesterday? 
    - has many
    - belongs to
    - has many/belongs to
    - many to many; has many through

- How do we build that relationship into our code? 
    - At least one model has to hold a "reference" to another model (hold some kind of information that points back to the other model, in our case it's the actual instance of the model it's associated)
    - The other model finds all of it's associated instances through a single source of truth 


- Which model holds the reference in a has many/belongs to association? Why?
    - the "belongs to" side of the relationship always holds the reference because it allows us to write a static blueprint that can be reused for different instances


- Now our Plants can be associated with many Users
- Our Users are still associeated with many Plants
    - This morphs our current relationship from a has many/belongs to into a many to many, aka has many through

