class Api::AnnotationsController < ApplicationController
  before_action :ensure_logged_in

  def show
    @annotation = Annotation.find(params[:id])
    render :show
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @poem = Poem.find(annotation_params[:poem_id])
    @user = current_user

    @annotation.poem = @poem
    @annotation.annotator = @user
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: :unprocessable_entity
    end
  end

private
  def annotation_params
    params.require(:annotation).permit(:body, :starting_character, :ending_character, :poem_id)
  end
end
