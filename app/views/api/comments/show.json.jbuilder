json.partial! '/api/comments/comment', comment: @comment, user: @user

json.current_user do
  json.partial! '/api/users/user', user: @user
end
