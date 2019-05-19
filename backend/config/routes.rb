Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :incomes, controller: 'income'
  resources :expenses, controller: 'expense'
  resources :categories, controller: 'category'
end
