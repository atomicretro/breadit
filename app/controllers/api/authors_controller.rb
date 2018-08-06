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
    @author = Author.find_or_initialize_by(name: author_params["name"])
    #Doesn't create a new author now, but still doesn't update pic
    if @author.valid?
      @author.save
      render :show
    else
      render json: @author.errors.full_messages, status: :unprocessable_entity
    end
  end

private
  def author_params
    params.require(:author).permit(:name, :image)
  end
end
