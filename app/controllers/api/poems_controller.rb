class Api::PoemsController < ApplicationController
  def index
    @poems = Poem.all
    render :index
  end

  def show
    @poem = Poem.find(params[:id])
    render :show
  end

  def create
    if logged_in?
      @poem = Poem.new(poem_params)
      @author = Author.find_or_initialize_by(author_params)
      @poem.author = @author
      if @poem.save && @author.valid?
        @author.save
        render :show
      else
        author_errors = @author[:name].empty? ? ["Author name invalid"] : []
        all_errors = @poem.errors.full_messages + author_errors
        render json: all_errors, status: :unprocessable_entity
      end
    else
      render :index
    end
  end

  def update
    @poem = Poem.find(params[:id])

    if @poem.update_attributes(poem_params)
      render :show
    else
      render json: @poem.errors.full_messages, status: :unprocessable_entity
    end
  end

private
  def poem_params
    params.require(:poem).permit(:title, :body)
  end

  def author_params
    params.require(:poem).permit(:name)
  end
end
