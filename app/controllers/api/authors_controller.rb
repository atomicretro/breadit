class Api::AuthorsController < ApplicationController
  def create
    @author = Author.new(author_params)
    if @author.save
      render :show
    else
      render json: @author, status: :unprocessable_entity
    end
  end

private
  def author_params
    params.require(:author).permit(:name)
  end
end
