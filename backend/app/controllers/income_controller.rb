class IncomeController < ApplicationController
    def index
        render json: Income.all.to_json
    end
end
