json.partial! '/api/annotations/annotation', annotation: @annotation, user: @user

json.current_user do
  json.partial! '/api/users/user', user: @user
end
