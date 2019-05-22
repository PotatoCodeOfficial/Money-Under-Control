class CategoryController < ApplicationController
    def index
        render json: Category.where(is_deleted: [false, nil]).to_json
    end
end
