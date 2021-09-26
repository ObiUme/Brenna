class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category
end
