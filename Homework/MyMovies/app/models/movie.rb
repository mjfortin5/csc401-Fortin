class Movie < ActiveRecord::Base
  attr_accessible :rating, :title
  belongs_to :user
end
