class AddTitleImageCategoryToPhoto < ActiveRecord::Migration[6.1]
  def change
    add_column :photo_users, :image, :string
    add_column :photo_users, :title, :string
    add_column :photo_users, :category, :string
  end
end
