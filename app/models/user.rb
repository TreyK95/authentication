# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy
  serialize :liked_buddies, Array

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.get_added_buddies(ids)
    ids = ids.empty? ? [0] : ids
    Buddy.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Buddy.where("id IN (?)", ids)
  end

end
