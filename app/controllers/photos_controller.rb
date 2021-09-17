class PhotosController < ApplicationController

def index 
    render json: Photo.all
end

def show
    photo = Photo.find_by(id: params[:id])
    if photo
        render json: photo
    else
        render json: { error: "Photo Not Found" }, status: :not_found
    end
end

def update
    photo = Photo.find(params[:id])
    render json: photo
end


private

def photo_params 
    params.permit(:title, :image)
end 


end
