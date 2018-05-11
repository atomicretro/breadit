Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :poems, only: [:index, :show, :create, :update]
    resources :author, only: [:create, :show]
  end
end
