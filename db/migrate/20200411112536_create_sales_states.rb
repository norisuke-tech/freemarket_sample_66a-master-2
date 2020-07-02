class CreateSalesStates < ActiveRecord::Migration[5.0]
  def change
    create_table :sales_states do |t|
      t.string :statas, null: false
      t.timestamps
    end
  end
end
