class Api::PoemsController < ApplicationController
  def index
    @poems = Poem.all
    @authors = Author.all
    render :index
  end

  def newest
    @poems = Poem.recent(10).reverse
    render :newest
  end

  def random
    @poems = []
    random_poems = Poem.order("RANDOM()")
    2.times { |i| @poems << random_poems[i] }
    render :random
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
      render json: ['You must be logged in to create a poem'], status: :unprocessable_entity
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
    params.require(:poem).permit(:title, :body, :image)
  end

  def author_params
    params.require(:author).permit(:name)
  end
end
