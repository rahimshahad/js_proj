class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :condition
      t.string :price
      t.integer :category_id

      t.timestamps
    end
  end
end
