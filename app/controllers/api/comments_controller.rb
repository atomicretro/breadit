class Api::CommentsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @comment = Comment.new(comment_params)
    @poem = Poem.find(params[:poem_id])
    @user = current_user
    @author = @poem.author

    @comment.commentable = @poem
    @comment.user = @user
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
