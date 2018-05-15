# == Schema Information
#
# Table name: annotations
#
#  id                 :integer          not null, primary key
#  body               :text             not null
#  user_id            :integer          not null
#  poem_id            :integer          not null
#  starting_character :integer          not null
#  ending_character   :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Annotation < ApplicationRecord
  validates :body, :annotator, :poem, :starting_character,
    :ending_character, presence: true
  validate :does_not_overlap_another_annotation

  belongs_to :annotator,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :poem,
    class_name: 'Poem',
    primary_key: :id,
    foreign_key: :poem_id

  def does_not_overlap_another_annotation
    unless overlapping_annotations.empty?
      errors[:base] << "Cannot annotate over a pre-existing annotation"
    end
  end

  def overlapping_annotations
    Annotation
      .where.not(id: self.id)
      .where(poem_id: poem_id)
      .where.not('starting_character > :ending_character OR
                  ending_character < :starting_character',
                  starting_character: starting_character,
                  ending_character: ending_character)
  end
end
