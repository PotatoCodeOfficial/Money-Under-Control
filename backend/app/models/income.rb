class Income < ApplicationRecord
  after_initialize :set_defaults, unless: :persisted?

  belongs_to :category


  def attributes
    {
      id: id,
      name: name,
      description: description,
      amount: amount,
      uid: uid,
      date: date.strftime("%d/%m/%Y"),
      category: category.attributes
    }
  end

  def set_defaults
    self.date = Time.now
  end
end
