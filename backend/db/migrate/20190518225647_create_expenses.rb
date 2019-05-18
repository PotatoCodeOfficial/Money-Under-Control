class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :name
      t.string :description
      t.integer :amount
      t.date :date
      t.boolean :is_deleted
      t.timestamps
    end
  end
end
