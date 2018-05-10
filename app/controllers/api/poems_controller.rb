class Api::PoemsController < ApplicationController
  before_action :ensure_logged_in

  def index
  end

  def show
    @poem = Poem.find(params[:id])
    render :show
  end

  def create
    @poem = Poem.new(poem_params)
    if @poem.save
      render :show
    else
      render json: @poem, status: :unprocessable_entity
    end
  end

  def update
    @poem = Poem.find(params[:id])
    if @poem.update_attributes(poem_params)
      render :show
    else
      render json: @poem, status: :unprocessable_entity
    end
  end

private
  def poem_params
    params.require(:poem).permit(:title, :body)
  end
end
