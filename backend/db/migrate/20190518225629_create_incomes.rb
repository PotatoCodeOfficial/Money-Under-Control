class CreateIncomes < ActiveRecord::Migration[5.2]
  def change
    create_table :incomes do |t|
      t.string :name
      t.string :description
      t.decimal :amount
      t.date :date
      t.timestamps
    end
  end
end
