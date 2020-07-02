class Card < ApplicationRecord
  belongs_to :user

  # include ActiveModel::Model

  # attr_accessor :card_number, :cvc, :exp_month, :exp_year
end
