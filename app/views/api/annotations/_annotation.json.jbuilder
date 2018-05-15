json.annotation do
  json.extract! annotation, :id, :body, :starting_character, :ending_character
  json.annotator user.id
  json.poem_id annotation.commentable_id
end
