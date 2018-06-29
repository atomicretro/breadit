Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get 'poems/newest', to: 'poems#newest'
    get 'poems/random', to: 'poems#random'
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :poems, only: [:index, :show, :create, :update] do
      resources :comments, only: [:create]
      resources :upvotes, only: [:create, :destroy]
    end
    resources :authors, only: [:index, :show, :create]
    resources :annotations, only: [:show, :create]

    post 'poems/:id/downvote', to: 'downvotes#create'
    delete 'poems/:id/downvote', to: 'downvotes#destroy'
    post 'comments/:id/upvote', to: 'upvotes#create'
    delete 'comments/:id/upvote', to: 'upvotes#destroy'
    post 'comments/:id/downvote', to: 'downvotes#create'
    delete 'comments/:id/downvote', to: 'downvotes#destroy'
    post 'annotations/:id/upvote', to: 'upvotes#create'
    delete 'annotations/:id/upvote', to: 'upvotes#destroy'
    post 'annotations/:id/downvote', to: 'downvotes#create'
    delete 'annotations/:id/downvote', to: 'downvotes#destroy'
  end
end
