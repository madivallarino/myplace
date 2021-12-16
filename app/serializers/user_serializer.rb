class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :password_digest
end
