class Api::BuddiesController < ApplicationController
  before_action :authenticate_user!

  
  def index
    render json: Buddy.all
  end
  
  def show
    render json: Buddy.find(params[:id])
  end
  
  def create
    buddy = Buddy.new(buddy_params)
    if buddy.save
        render json: buddy
    else
      render json: { errors: buddy.errors }, status: :unprocessable_entity
    end
  end
  
  def update
    buddy = Buddy.find(params[:id])
    if buddy.update(buddy_params)
      render json: buddy
    else
      render json: { errors: buddy.errors }, status: :unprocessable_entity
    end
  end

  def add_buddy
    current_user.liked_buddies << params[:id].to_i
    current_user.save
  end

  def remove_buddy
    # buddygone= current_user.liked_buddies.find(params[:id]).to_s.to_i
    current_user.liked_buddies.pop(params[:id].to_i)
    current_user.save
  end

  
  def destroy
    render json: Buddy.find(params[:id]).destroy
  end
  
  # def remove_buddy
  #   render json: current_user.liked_buddies.find(params[:id].to_i).destroy
  # end


  # def remove_mybuddy
  #   render json: User.get_non_buddies(current_user.liked_buddies)
    
  # end

  def my_buddies
    render json: User.liked(current_user.liked_buddies)
  end
  
  private
  
  def buddy_params
    params.require(:buddy).permit(:name, :email, :avatar)
  end
end