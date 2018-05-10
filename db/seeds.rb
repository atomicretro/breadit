# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'guest', password: 'guestlogin')

author1 = Author.create(name: 'bonnibel')

poem1 = Poem.create(title: 'test', body: 'testing', author_id: author1.id, image_url: 'hi')
