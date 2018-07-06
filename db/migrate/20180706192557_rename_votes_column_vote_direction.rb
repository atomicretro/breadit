class RenameVotesColumnVoteDirection < ActiveRecord::Migration[5.1]
  def change
    rename_column :votes, :vote_direction, :direction
  end
end
