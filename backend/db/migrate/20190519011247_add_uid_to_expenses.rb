class AddUidToExpenses < ActiveRecord::Migration[5.2]
    def change
      add_column :expenses, :uid, :string
    end
  end
  