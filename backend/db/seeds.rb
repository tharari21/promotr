# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Club.destroy_all
User.destroy_all
ClubOwner.destroy_all
Review.destroy_all
puts "Seeding Data... 🌱"

city1 = City.create(name: 'New York City')
city1.image.attach(io: File.open("/Users/tomerharari/Projects/promoter/frontend/src/images/New-York.jpg"), filename: "new-york.jpg")
city2 = City.create(name: 'London')
city2.image.attach(io: File.open("/Users/tomerharari/Projects/promoter/frontend/src/images/London.jpg"), filename: "london.jpg")
city3 = City.create(name: 'Paris')
city3.image.attach(io: File.open("/Users/tomerharari/Projects/promoter/frontend/src/images/Paris.jpg"), filename: "paris.jpg")
city4 = City.create(name: 'Miami')
city4.image.attach(io: File.open("/Users/tomerharari/Projects/promoter/frontend/src/images/Miami.jpg"), filename: "miami.jpg")
city5 = City.create(name: 'Los Angeles')
city5.image.attach(io: File.open("/Users/tomerharari/Projects/promoter/frontend/src/images/LA.jpg"), filename: "los-angeles.jpg")
city6 = City.create(name: 'Austin')
city6.image.attach(io: File.open("/Users/tomerharari/Projects/promoter/frontend/src/images/Austin.jpg"), filename: "austin.jpg")

c1 = Club.create(name: 'The Club 1', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city1)
c2 = Club.create(name: 'The Club 2', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city2)
c3 = Club.create(name: 'The Club 3', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city3)
c3 = Club.create(name: 'The Club 4', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city4)
c3 = Club.create(name: 'The Club 5', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city5)
c3 = Club.create(name: 'The Club 6', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city6)
c1 = Club.create(name: 'The Club 7', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city1)
c2 = Club.create(name: 'The Club 8', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city2)
c3 = Club.create(name: 'The Club 9', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city3)
c3 = Club.create(name: 'The Club 10', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city4)
c3 = Club.create(name: 'The Club 11', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city5)
c3 = Club.create(name: 'The Club 12', description: 'Old time music venue with a lot to offer. The Club offers so many great things', city: city6)
u1 = User.create(email: 'tharari21@gmail.com', username: 'tharari', password: 'tomer222')
u2 = User.create(email: 'aarce@gmail.com', username: 'antonio', password: 'antonio')
u3 = User.create(email: 'anya@gmail.com', username: 'anya', password: 'anya214')
u4 = User.create(email: 'georgeofthejungle@gmail.com', username: 'geo', password: 'georgio')
co1 = ClubOwner.create(club: c1, owner: u1)
co1 = ClubOwner.create(club: c2, owner: u1)
co1 = ClubOwner.create(club: c3, owner: u1)

Review.create(reviewee: c1, star_rating: 5, comment: 'Awesome place', reviewer: u2)
Review.create(reviewee: c1, star_rating: 3, comment: 'Ehh', reviewer: u1)
Review.create(reviewee: c1, star_rating: 1, comment: 'Shitty', reviewer: u3)
Review.create(reviewee: c2, star_rating: 1, comment: 'Shitty', reviewer: u1)
Review.create(reviewee: c2, star_rating: 2, comment: 'alright', reviewer: u2)
puts "Done seeding"