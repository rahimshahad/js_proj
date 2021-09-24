class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :condition, :price, :category_id

  belongs_to :category
end
