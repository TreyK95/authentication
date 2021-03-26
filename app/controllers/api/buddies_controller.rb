class Api::BuddiesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Buddy.all
  end
  
  def show
    buddy = Buddy.find(params[:id])
    render json: {buddy: buddy}
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
    buddy = Buddy.find(params[:id]).destroy
    render json: buddy
  end
  
  private
  
  def buddy_params
    params.require(:buddy).permit(:name, :email, :avatar)
  end
end