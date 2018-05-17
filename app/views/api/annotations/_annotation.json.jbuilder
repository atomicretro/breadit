json.annotation Hash.new()
json.annotation do
  json.extract! annotation, :id, :body, :starting_character, :ending_character, :poem_id
  json.annotator user.id
end
