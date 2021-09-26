class PhotoUserSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :photo
end
