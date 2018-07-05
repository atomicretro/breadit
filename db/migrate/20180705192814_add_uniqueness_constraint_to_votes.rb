class AddUniquenessConstraintToVotes < ActiveRecord::Migration[5.1]
  def change
    remove_index :votes, column: :user_id
    add_index :votes, [:user_id, :votable_id], unique: true
  end
end
