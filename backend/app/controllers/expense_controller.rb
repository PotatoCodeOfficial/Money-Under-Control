class ExpenseController < ApplicationController
  include Authenticable
  before_action :get_user_id, except: :dashboard

  def index
    # TODO: add serializer, instead of `attribtes` override
    render json: Expense.where(uid: @user_id, is_deleted: [false, nil]).to_json
  end

  def create
    # TODO: add serializer, instead of `attribtes` override
    new_expense = Expense.create(expense_body)
    return render_unprocessable_entity(errors: new_expense.errors) unless new_expense.persisted?
    render_resource(new_expense)
  end

  def update
    # TODO: add serializer, instead of `attribtes` override
    puts expense_body
    expense = Expense.find_by(id: expense_id, uid: @user_id)
    render_unprocessable_entity(errors: expense.errors) unless expense.update(expense_body)
    render_resource(expense.reload)
  end

  def destroy
    Expense.where(id: expense_id, uid: @user_id).first.try(:update, {is_deleted: true})
    head :no_content
  end

  private

  def expense_body
    @expense_body ||= params.permit(:name, :description, :amount)
    @expense_body[:uid] = @user_id
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

  def render_resource(expense)
    render json: expense.as_json
  end

  def render_unprocessable_entity(errors: {})
    render json: errors.to_json, status: 422
  end
end
