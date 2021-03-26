# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

5.times do
  name = Faker::Internet.username
  email = Faker::Internet.email
  avatar = Faker::Avatar.image(slug: name, size: '150x150', format: 'png', set: 'set1')
  Buddy.create(name: name, email: email, avatar: avatar)
end

puts "#{Buddy.all.size} buddies seeded"
