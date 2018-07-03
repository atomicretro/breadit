class Api::UpvotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    @poem = Poem.find(params['poem_id'])
    @vote.votable = @poem
    @vote.user_id = current_user.id
    if @vote.save
      render '/api/poems/show'
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

private
  def vote_params
    params.permit(:vote_direction)
  end
end
