class Api::PoemsController < ApplicationController
  before_action :ensure_logged_in

  def show
    render :show
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @poem = Poem.find(params[:poem_id])
    @user = current_user
    @author = @poem.author

    @annotation.commentable = @poem
    @annotation.user = @user
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: :unprocessable_entity
    end
  end

private
  def annotation_params
    params.require(:annotation).permit(:body, :starting_character, :ending_character)
  end
end
