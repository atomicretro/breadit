json.author do
  json.partial! 'api/authors/author', author: @author
end

@poems.each do |poem|
  json.set! poem.id do
    json.extract! poem, :id, :title
  end
end
