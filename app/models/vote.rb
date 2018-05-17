# == Schema Information
#
# Table name: votes
#
#  id           :integer          not null, primary key
#  score        :integer          not null
#  user_id      :integer          not null
#  votable_type :string           not null
#  votable_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Vote < ApplicationRecord
  validates :score, :voter, :votable, presence: true
  validates :voter, uniqueness: { scope: [:id, :votable_id]}

  belongs_to :voter,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :votable,
    polymorphic: true
end
