Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :poems, only: [:index, :show, :create, :update] do
      resources :comments, only: [:create]
    end
    resources :authors, only: [:index, :show, :create]
    resources :annotations, only: [:show, :create]
  end
end
