class Api::UpvotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    @poem = Poem.find(params['poem_id'])
    @vote.votable = @poem
    @vote.voter = current_user
    if @vote.save
      render '/api/poems/show'
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find(params['id'])
    if @vote.destroy
      @poem = Poem.find(params['poem_id'])
      render '/api/poems/show'
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

private
  def vote_params
    params.permit(:direction)
  end
end
