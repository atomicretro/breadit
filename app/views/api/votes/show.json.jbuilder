json.vote do
  json.partial! '/api/votes/vote', vote: @vote
end

json.poem do
  json.id @poem.id
  json.score @poem.votes.length
end
