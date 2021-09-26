class CreatePhotoUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :photo_users do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :photo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
