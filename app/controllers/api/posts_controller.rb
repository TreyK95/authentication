class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.posts
  end

  def show 
    render json: current_user.posts.find(params[:id])
  end

  def create
    new_post = current_user.posts.new(post_params)
    if new_post.save
      render json: new_post
    else
      render json: {errors: new_post.errors}, status: 422
    end
  end

  def update
    post = current_user.posts.find(params[:id])
    if post.update(post_params)
      render json: post
    else
      render json: {errors: job.errors}, status: 422
    end
  end

  def destroy
    render json: current_user.posts.find(params[:id]).destroy
  end

  private

  def post_params
    params.require(:post).permit(:name, :description, :likes)
  end
end
