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
      json.extract! comment, :id, :body, :created_at
      json.comment_author_id comment.user.id
      json.poem_id comment.commentable_id
    end
  end
end

json.comment_authors Hash.new()
json.comment_authors do
  @poem.comments.each do |comment|
    json.set! comment.user.id do
      json.extract! comment.user, :id, :username
    end
  end
end

json.annotations Hash.new()
json.annotations do
  @poem.annotations.each do |annotation|
    json.set! annotation.id do
      json.extract! annotation, :id, :body, :starting_character, :ending_character, :poem_id
      json.annotator_id annotation.user_id
    end
  end
end

json.annotators Hash.new()
json.annotators do
  @poem.annotations.each do |annotation|
    json.set! annotation.annotator.id do
      json.extract! annotation.annotator, :id, :username
    end
  end
end

json.votes do
  @poem.votes.each do |vote|
    json.set! vote.id do
      json.partial! 'api/votes/votes', vote: vote
    end
  end
end
