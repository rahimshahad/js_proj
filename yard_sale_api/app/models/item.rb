class Item < ApplicationRecord
    belongs_to :category

    validates :name, :description, :condition, :price, presence: true
end
