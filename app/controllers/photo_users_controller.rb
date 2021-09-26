class PhotoUsersController < ApplicationController

    def index
        photo_user = PhotoUser.all
        render json: photo_user 
    end

    def create
        photo = PhotoUser.create!(photo_user_params)
        render json: photo, status: :created
    end

    def show
        photo_user = PhotoUser.find(params[:id])
        render json: photo_user
    end

    def destory
        photo_user = PhotoUser.find(params[:id])
        photo_user.destroy
        head :no_content
    end


    private
    
    def photo_user_params
        params.permit(:photo_id, :user_id, :image, :title, :category)
    end
end
