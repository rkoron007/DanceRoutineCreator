class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render 'api/users/show.json.jbuilder'
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
