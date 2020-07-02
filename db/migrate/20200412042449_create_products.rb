class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name, null:false, index:true
      t.integer :price, null:false
      t.bigint :user_id, null:false, foreign_key:true
      t.bigint :sales_states, foreign_key:true
      t.text :description,          null: false
      t.string :condition,          null: false
      t.string :delivery_cost,     null: false
      t.string :delivery_origin,       null: false
      t.string :delivery_days,      null: false
      t.bigint :category_id, foreign_key: true
      t.bigint :brand_id,    foreign_key: true
      t.bigint :size_id, foreign_key: true
      t.integer :buyer_id
      t.integer :saler_id
      t.timestamps
    end
  end
end