class PhotosController < ApplicationController
    skip_before_action :authorize, only: :index

def index 
    render json: Photo.all
end

def show
    photo = Photo.find(params[:id])
    render json: photo
end

def update
    photo = Photo.find(params[:id])
    render json: photo
end


def create
    user = User.find_by(id: session[:user_id])
    photo = user.photos.create!(photo_params)  
    render json: photo, status: :created
end


private

def photo_params 
    params.permit(:title, :image, :category, :user_id)
end 


end
