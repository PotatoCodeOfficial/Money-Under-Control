class Category < ApplicationRecord
  def attributes
    {
      id: id,
      name: name,
      category_type: category_type,
      icon: icon
    }
  end
end
