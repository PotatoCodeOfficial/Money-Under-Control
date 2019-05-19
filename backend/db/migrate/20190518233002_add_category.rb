class AddCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :incomes, :category_id, :integer
    add_column :expenses, :category_id, :integer
  end
end
