require 'bundler'
Bundler.require
# Makes all the gems available

ActiveRecord::Base.establish_connection(adapter: 'sqlite3', database: 'db/development.db')
# Sets up the environment (database)

require_all 'app'
# Makes all the files available
