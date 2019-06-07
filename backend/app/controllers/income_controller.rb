class IncomeController < ApplicationController
  include Authenticable
  before_action :get_user_id, except: :dashboard

  def index
    # TODO: add serializer, instead of `attribtes` override
    render json: Income.where(uid: @user_id, is_deleted: [false, nil]).to_json
  end

  def create
    # TODO: add serializer, instead of `attribtes` override
    new_income = Income.create(income_body)
    return render_unprocessable_entity(errors: new_income.errors) unless new_income.persisted?
    render_resource(new_income)
  end

  def update
    # TODO: add serializer, instead of `attribtes` override
    income = Income.find_by(id: income_id, uid: @user_id)
    render_unprocessable_entity(errors: income.errors) unless income.update(income_body)
    render_resource(income.reload)
  end

  def destroy
    Income.where(id: income_id, uid: @user_id).first.try(:update, {is_deleted: true})
    head :no_content
  end

  private

  def income_body
    @income_body ||= params.permit(:name, :description, :amount)
    @income_body[:uid] = @user_id
    return @income_body unless category
    @income_body.merge(category: category)
  end

  def income_id
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
