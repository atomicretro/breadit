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

poem1 = Poem.create(title: 'test', body: 'testing', author_id: author1.id)
poem2 = Poem.create(title: "come along with me", body: "and the butterflies and bees\nwe'll wander through the forest\nand do so as we please", author_id: author2.id)
poem3 = Poem.create(title: 'truths', body: 'sucking at something is the first step to being sorta good at something', author_id: author3.id)

kipling = Author.create(name: 'Rudyard Kipling')
if_poem = Poem.create(title: 'If', author: kipling, body: "If you can keep your head when all about you\n
Are losing theirs and blaming it on you,\n
If you can trust yourself when all men doubt you,\n
But make allowance for their doubting too;\n
If you can wait and not be tired by waiting,\n
Or being lied about, don’t deal in lies,\n
Or being hated, don’t give way to hating,\n
And yet don’t look too good, nor talk too wise:\n
\n\n
If you can dream—and not make dreams your master;\n
If you can think—and not make thoughts your aim;\n
If you can meet with Triumph and Disaster\n
And treat those two impostors just the same;\n
If you can bear to hear the truth you’ve spoken\n
Twisted by knaves to make a trap for fools,\n
Or watch the things you gave your life to, broken,\n
And stoop and build ’em up with worn-out tools:\n
\n\n
If you can make one heap of all your winnings\n
And risk it on one turn of pitch-and-toss,\n
And lose, and start again at your beginnings\n
And never breathe a word about your loss;\n
If you can force your heart and nerve and sinew\n
To serve your turn long after they are gone,\n
And so hold on when there is nothing in you\n
Except the Will which says to them: ‘Hold on!’\n
\n\n
If you can talk with crowds and keep your virtue,\n
Or walk with Kings—nor lose the common touch,\n
If neither foes nor loving friends can hurt you,\n
If all men count with you, but none too much;\n
If you can fill the unforgiving minute\n
With sixty seconds’ worth of distance run,\n
Yours is the Earth and everything that’s in it,\n
And—which is more—you’ll be a Man, my son!")
