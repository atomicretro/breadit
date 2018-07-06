json.extract! poem, :id, :title, :body, :author_id
json.image_url asset_path(poem.image.url)
json.comment_ids poem.comments.map { |comment| comment.id }
json.annotation_ids poem.annotations.map { |annotation| annotation.id }
json.score poem.votes.length
voted = poem.votes.any? { |vote| vote.user_id == current_user.id }
json.current_user_voted voted
