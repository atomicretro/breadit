class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :score, null: false
      t.integer :user_id, null: false
      t.references :votable, polymorphic: true, index: true, null: false
      t.timestamps
    end

    add_index :votes, :score
    add_index :votes, :user_id
  end
end
