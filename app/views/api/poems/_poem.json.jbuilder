# debugger
json.extract! poem, :id, :title, :body, :author_id
json.image_url asset_path(poem.image.url)
json.comment_ids poem.comments.map { |comment| comment.id }
json.annotation_ids poem.annotations.map { |annotation| annotation.id }
