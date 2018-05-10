# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'guest', password: 'guestlogin')
user2 = User.create(username: 'coolguy', password: '123456')
user3 = User.create(username: 'coolgal', password: '123456')

author1 = Author.create(name: 'bonnibel')
author2 = Author.create(name: 'finn')
author3 = Author.create(name: 'jake')

poem1 = Poem.create(title: 'test', body: 'testing', author_id: author1.id, image_url: 'hi')
poem2 = Poem.create(title: "come along with me', body: 'and the butterflies and bees\nwe'll wander through the forest\nand do so as we please", author_id: author1.id, image_url: 'bye')
poem3 = Poem.create(title: 'truths', body: 'sucking at something is the first step to being sorta good at something', author_id: author1.id, image_url: 'ok')
