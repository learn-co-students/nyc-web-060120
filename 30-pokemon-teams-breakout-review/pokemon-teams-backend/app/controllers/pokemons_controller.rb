class PokemonsController < ApplicationController

    def create
        @trainer = Trainer.find_by(id: pokemon_params[:trainer_id])
        
        if @trainer && @trainer.pokemons.count < 6
            name = Faker::Name.first_name
            species = Faker::Games::Pokemon.name
            @pokemon = Pokemon.new(nickname: name, species: species, trainer_id: @trainer.id)

            if @pokemon.save
                render json: @pokemon, status: :created
            else
                render json: { errors: ['The pokemon escaped the pokeball. Better luck next time! ^_^'] }, status: :method_not_allowed
            end
            
        elsif @trainer and @trainer.pokemons.count >= 6
            render json: { errors: ["#{@trainer.name} already has a full team. Please release a pokemon first then try again."] }, status: :unauthorized
        else
            render json: { errors: ['Trainer not found'] }, status: :not_found
        end
    end

    def destroy
        # protect the server by checking with find_by first
        @pokemon = Pokemon.find_by(id: params[:id])
        if @pokemon
            @pokemon.destroy
            render json: { messages: ["#{@pokemon.nickname} was released back into the wild! ^_^"] }, status: :ok
        else
            render json: { errors: ['Pokemon not found.'] }, status: :not_found
        end
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:trainer_id)
    end

end
