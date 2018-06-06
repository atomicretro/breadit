json.array! @poems do |poem|
  json.extract! poem, :id, :title
  json.author_name poem.author.name
end
