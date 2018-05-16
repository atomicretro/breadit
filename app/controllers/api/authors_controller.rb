class Api::AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render :index
  end

  def show
    @author = Author.find(params[:id])
    render :show
  end

  def create
    @author = Author.new(author_params)
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
end
