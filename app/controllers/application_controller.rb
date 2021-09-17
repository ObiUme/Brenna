class ApplicationController < ActionController::API
    include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response  

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end

      def render_unprocessable_entity_response(exeception)
        render json: { errors: exeception.record.errors.full_messages }, status: :unprocessable_entity 
      end

      
      
end
