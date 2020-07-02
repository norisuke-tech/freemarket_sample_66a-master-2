class MypageController < ApplicationController

  def index
  end

  def credit
  end

  def logout
    @user = User.new
  end

end
