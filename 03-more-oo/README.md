## More OO Ruby

# Questions:
- Class methods
- is initialize a setter method
- are instance variables global variables in the instance class
- Why do we use initialize?
    - because there is code that we want to be ran every time an instance is created and before any other methods on the instance is ran


Class variable vs Instance variable

- instance == object
- class == object
    - it can have key/value pairings => @instance_variable => @@class_variable
    - can have behaviors => def instance_method => def self.class_method


# Deliverables

<!-- 1. Can see a list of all plants -->

2. Can query plants
    - find all plants that are "Annuals"
    - find all plants who's names begin with A
    <!-- - find the names of all the plants -->
        - class method
3. Can water a plant which increases it's height by a random number
4. Can give sunlight to a plant which increases it's height
5. If height is >= 12 puts "time to trim!"

# Topics

- Class variables
- Class methods
- self
- private methods