json.poem do
  json.partial! '/api/poems/poem', poem: @poem
end

json.author do
  json.extract! @poem.author, :id, :name
  json.image_url asset_path(@poem.author.image.url)
end

json.comments Hash.new()
json.comments do
  @poem.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :body
      json.comment_author_id comment.user.id
    end
  end
end

json.comment_authors Hash.new()
json.comment_authors do
  @poem.comments.each do |comment|
    json.set! comment.user.id do
      json.extract! comment.user, :username
    end
  end
end
