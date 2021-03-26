class Api::BuddiesController < ApplicationController
  # before_action :authenticate_user!

  
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
  
  def destroy
    render json: Buddy.find(params[:id]).destroy
  end
  
  private
  
  def buddy_params
    params.require(:buddy).permit(:name, :email, :avatar)
  end
end