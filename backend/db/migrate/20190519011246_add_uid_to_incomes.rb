class AddUidToIncomes < ActiveRecord::Migration[5.2]
  def change
    add_column :incomes, :uid, :string
  end
end
