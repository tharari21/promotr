class CreateClubs < ActiveRecord::Migration[7.0]
  def change
    create_table :clubs do |t|
      t.string :name
      t.text :description
      t.integer :city_id

      t.timestamps
    end
  end
end
