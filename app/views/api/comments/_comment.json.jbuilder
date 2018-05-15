json.comment do
  json.extract! comment, :id, :body
  json.comment_author_id user.id
  json.poem_id comment.commentable_id
end
