json.partial! '/api/annotations/annotation', annotation: @annotation, user: @user

json.current_user do
  json.partial! '/api/users/user', user: @user
end

json.annotations Hash.new()
json.annotations do
  @poem.annotations.each do |annotation|
    json.set! annotation.id do
      json.extract! annotation, :id, :body, :starting_character, :ending_character, :poem_id
      json.annotator annotation.user_id
    end
  end
end
