Rails.application.routes.draw do

  get 'positions/create'
  get 'positions/index'
<<<<<<< HEAD
=======

>>>>>>> 5f1de54c816136ab3c9a810fdafe1d7e09f07f94
  get 'portfolios/new'
  post 'portfolios/create'
  get 'portfolios/edit'
  post 'portfolios/update'
  get 'portfolios/show'

  get 'allocations/new'
  post 'allocations/create'
  get 'allocations/edit'
  post 'allocations/update'
  get 'orders/new'
  post 'orders/create'
  get 'orders/index'
  post 'orders/update'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
