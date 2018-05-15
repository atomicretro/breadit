json.partial! '/api/comments/comment', comment: @comment, user: @user

json.current_user do
  json.extract! @user, :id, :username
end
