class Api::AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render :index
  end

  def show
    @author = Author.find(params[:id])
    @poems = @author.poems
    render :show
  end

  def create
    @author = Author.find_or_initialize_by(author_params)
    #author must have exact capitalization, otherwise creates new. FIX!
    @author.update(author_picture_params)
    if @author.save
      render :show
    else
      render json: @author.errors.full_messages, status: :unprocessable_entity
    end
  end

private
  def author_params
    params.require(:author).permit(:name)
  end

  def author_picture_params
    params.require(:author).permit(:image)
  end
end
