json.poems do
  @poems.each do |poem|
    json.set! poem.id do
      json.extract! poem, :id, :title, :author_id
    end
  end
end

json.authors do
  @authors.each do |author|
    json.set! author.id do
      json.extract! author, :id, :name
    end
  end
end
