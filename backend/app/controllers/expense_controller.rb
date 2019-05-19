class ExpenseController < ApplicationController
    def index
        render json: Expense.all.to_json
    end
end
