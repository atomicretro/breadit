json.poem do
  json.partial! '/api/poems/poem', poem: @poem
end

json.author do
  json.extract! @poem.author, :id, :name
  json.image_url asset_path(@poem.author.image.url)
end
