class Api::SessionsController < ApplicationController
  # before_action :require_signed_out!, only: [:new, :create]
  # before_action :require_signed_in!, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render 'api/users/show.json.jbuilder'
    else
      flash.now[:errors] = ['Invalid username or password']
    end
  end

  def destroy
    log_out!
  end
end
