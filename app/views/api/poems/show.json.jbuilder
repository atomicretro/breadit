json.poem do
  json.partial! '/api/poems/poem', poem: @poem
end
