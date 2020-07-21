class TrainersController < ApplicationController
    def index
        @trainers = Trainer.all
        # use the include method to pass up our associations
        render json: @trainers, include: :pokemons, status: :ok
    end
end
