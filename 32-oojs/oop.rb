require 'pry'

class Person
  attr_accessor :age, :name
  
  def initialize(name, age)
    @name = name
    @age = age
  end

  def greeting
    puts "Hi, my name is #{self.name} and I am #{@age} years old."
  end

  def self.who_am_i?
    puts "I am of class #{self.name}"
  end
end

class Student < Person
  attr_accessor :grade

  def initialize(name, age, grade)
    super(name, age)
    @grade = grade
  end

  def bio
    puts "#{@name} is #{@age} years old and is in grade #{@grade}."
  end
end


ramona = Person.new("Ramona", 20)
billy = Student.new("Billy", 25, 11)


binding.pry
puts 'okthxbye' 