json.extract! poem, :id, :title, :body, :author_id
json.image_url asset_path(poem.image.url)
json.author_image asset_path(poem.author.image.url)
