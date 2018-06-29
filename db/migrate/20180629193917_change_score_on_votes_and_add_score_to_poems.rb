class ChangeScoreOnVotesAndAddScoreToPoems < ActiveRecord::Migration[5.1]
  def change
    remove_column :votes, :score
    add_column :votes, :vote_direction, :string, null: false
    add_column :poems, :score, :integer
  end
end
