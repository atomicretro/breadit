# == Schema Information
#
# Table name: votes
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  votable_type   :string           not null
#  votable_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  vote_direction :string           not null
#

class Vote < ApplicationRecord
  validates :direction, :voter, :votable, presence: true
  validates :voter, uniqueness: { scope: :votable_id, message: "can't vote twice" }

  belongs_to :voter,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :votable,
    polymorphic: true
end
