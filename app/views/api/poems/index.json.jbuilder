@poems.each do |poem|
  json.set! poem.id do
    json.extract! poem, :id, :title
    json.author_name poem.author.name
  end
end
