class Product < ApplicationRecord
  has_many :images, dependent: :destroy, inverse_of: :product
  accepts_nested_attributes_for :images, allow_destroy: true
  validates_associated :images
  belongs_to :category
  belongs_to :size, optional: true
  belongs_to :saler, class_name: "User"
  belongs_to :buyer, class_name: "User", optional: true
  belongs_to :user

  
  validates :images, :category_id, :condition,:delivery_cost, :delivery_origin,:delivery_days,presence: true
  validates :name, presence: true, length: { maximum: 40 }
  validates :description, presence: true, length: { maximum: 1000 }
  validates :size_id, presence: true, allow_nil: true
  validates :price, presence: true, 
                    numericality: { only_integer: true,
                                    greater_than_or_equal_to: 300,
                                    less_than_or_equal_to: 9999999 }  


end
