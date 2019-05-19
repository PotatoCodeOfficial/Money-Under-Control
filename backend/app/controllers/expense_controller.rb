class ExpenseController < ApplicationController
    def index
        # TODO: add serializer, instead of `attributes` override
        render json: Expense.all.to_json
      end
    
      def create
        # TODO: add serializer, instead of `attributes` override
        new_expense = Expense.create(expense_body)
        return render_unprocessable_entity(errors: new_expense.errors) unless new_expense.persisted?
        render_resource(new_expense)
      end
    
      def update
        # TODO: add serializer, instead of `attributes` override
        expense = Expense.find(expense_id)
        render_unprocessable_entity(errors: expense.errors) unless expense.update(expense_body)
        render_resource(expense.reload)
      end
    
      def destroy
        Expense.where(id: expense_id).first.try(:update, {is_deleted: true})
        head :no_content
      end
    
      private
    
      def expense_body
        @expense_body ||= params.permit(:name, :uid, :description, :amount)
        return @expense_body unless category
        @expense_body.merge(category: category)
      end
    
      def expense_id
        params[:id]
      end
    
      def category
        return unless params[:category]
        @category ||= Category.find(params[:category])
      end
    
      def render_resource(income)
        render json: income.as_json
      end
    
      def render_unprocessable_entity(errors: {})
        render json: errors.to_json, status: 422
      end
end
