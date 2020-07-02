class CreateCategorySizes < ActiveRecord::Migration[5.0]
  def change
    create_table :category_sizes do |t|
      t.references :category, foreign_key: true
      t.references :size, foreign_key: true
      t.timestamps
    end
  end
end
