class Api::StaticController < ApplicationController

  def api_test
    render json: {dataHere:'Working'}
  end
end
