class CreateClubOwners < ActiveRecord::Migration[7.0]
  def change
    create_table :club_owners do |t|
      t.integer :club_id
      t.integer :user_id

      t.timestamps
    end
  end
end
