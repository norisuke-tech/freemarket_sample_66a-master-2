class SignupController < ApplicationController
  def index
  end

  def member
    @user = User.new
  end
  
  def phonenumber
    session[:nickname] = user_params[:nickname]
    session[:email] = user_params[:email]
    session[:password] = user_params[:password]
    session[:password_confirmation] = user_params[:password_confirmation]
    session[:lastname] = user_params[:lastname]
    session[:firstname] = user_params[:firstname]
    session[:lastname_kana] = user_params[:lastname_kana]
    session[:firstname_kana] = user_params[:firstname_kana]
    session[:birth_year] = user_params[:birth_year]
    session[:birth_month] = user_params[:birth_month]
    session[:birth_day] = user_params[:birth_day]
    @user = User.new
  end

  def addressinformation
    session[:phone_number] = user_params[:phone_number]
    @user = User.new
  end

  def completed
    session[:destination_firstname] = user_params[:destination_firstname]
    session[:destination_lastname] = user_params[:destination_lastname]
    session[:destination_firstname_kana] = user_params[:destination_firstname_kana]
    session[:destination_lastname_kana] = user_params[:destination_lastname_kana]
    session[:postal_code] = user_params[:postal_code]
    session[:prefectures] = user_params[:prefectures]
    session[:city] = user_params[:city]
    session[:address] = user_params[:address]
    session[:room_number] = user_params[:room_number]
    session[:delivery_number] = user_params[:delivery_number]
    @user = User.new(
      nickname: session[:nickname], # sessionに保存された値をインスタンスに渡す
      email: session[:email],
      password: session[:password],
      password_confirmation: session[:password_confirmation],
      lastname: session[:lastname], 
      firstname: session[:firstname], 
      lastname_kana: session[:lastname_kana], 
      firstname_kana: session[:firstname_kana], 
      phone_number: session[:phone_number], # sessionに保存された値をインスタンスに渡す
      destination_firstname: session[:destination_firstname],
      destination_lastname: session[:destination_lastname],
      destination_firstname_kana: session[:destination_firstname_kana],
      destination_lastname_kana: session[:destination_lastname_kana], 
      postal_code: session[:postal_code], 
      prefectures: session[:prefectures], 
      city: session[:city], 
      address: session[:address], 
      room_number: session[:room_number], 
      delivery_number: session[:delivery_number],
      birth_year: session[:birth_year], 
      birth_month: session[:birth_month], 
      birth_day: session[:birth_day]
      
    )
    if @user.save
      # session[:id] = @user.id
    else

      # render '/signup/completed'

      render :addressinformation

    end
  end

    

  private
  # 許可するキーを設定します
  def user_params
    params.require(:user).permit(
      :nickname, 
      :email, 
      :password, 
      :password_confirmation, 
      :lastname, 
      :firstname, 
      :lastname_kana, 
      :firstname_kana, 
      :phone_number,
      :destination_firstname,
      :destination_lastname,
      :destination_firstname_kana,
      :destination_lastname_kana,
      :postal_code,
      :prefectures,
      :city,
      :address,
      :room_number,
      :delivery_number,
      :birth_year,
      :birth_month,
      :birth_day,

    )
  end

end
