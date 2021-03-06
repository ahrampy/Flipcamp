Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :sites, only: [:index, :show, :create, :edit, :destroy] do
      resources :bookings, only: [:create, :edit]
      resources :reviews, only: [:create, :edit]
    end
    resources :reviews, only: [:index, :destroy]
    resources :bookings, only: [:index, :destroy]
  end

  root to: 'static_pages#root'
end
