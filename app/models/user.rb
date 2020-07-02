class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :buyed_products, foreign_key: "buyer_id", class_name: "product"
  has_many :saling_products, -> { where("buyer_id is NULL") }, foreign_key: "saler_id", class_name: "product"
  has_many :sold_products, -> { where("buyer_id is not NULL") }, foreign_key: "saler_id", class_name: "product"


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :products
  has_many :comments
  has_one :card, dependent: :destroy
  has_one :sns_credential, dependent: :destroy

  # mount_uploader :icon, ImageUploader
  

  VALID_EMAIL_REGEX = /\A[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\z/
  VALID_PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}\z/i
  VALID_PHONE_REGEX = /\A0\d{9,10}\z/
      
  validates :nickname,                    presence: true
  validates :email,                   presence: true, uniqueness: true,  format: { with: VALID_EMAIL_REGEX }
  validates :password,                confirmation: true, length: {minimum: 7, maximum: 128}, on: :create
  validates :password_confirmation,   length: {minimum: 7, maximum: 128}, on: :create
  validates :lastname,                presence: true
  validates :firstname,               presence: true
  validates :lastname_kana,           presence: true
  validates :firstname_kana,          presence: true
  validates :birth_year,              presence: true
  validates :birth_month,             presence: true
  validates :birth_day,               presence: true
  validates :phone_number,                    uniqueness: true
  validates :destination_firstname,                presence: true, on: :new
  validates :destination_lastname,               presence: true
  validates :destination_firstname_kana,           presence: true
  validates :destination_lastname_kana,          presence: true
  validates :postal_code,              presence: true
  validates :prefectures,             presence: true
  validates :city,               presence: true
  validates :address,             presence: true
#   validates :room_number,                    uniqueness: true
#   validates :delivery_number,                    uniqueness: true

end
