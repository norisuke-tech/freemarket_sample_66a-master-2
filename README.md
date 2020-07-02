# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# DB設計
## ER図
[freemarket_sample_66a_ER図](https://www.lucidchart.com/invitations/accept/970a5ef6-1e18-40ed-8379-9ae8dcf671d5)

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|lastname|string|null: false|
|firstname|string|null: false|
|lastname_kana|string|null: false|
|firstname_kana|string|null: false|
|birth_year|integer|null: false|
|birth_month|integer|null: false|
|birth_day|integer|null: false|
|phone_number|string|unique: true|
### Association
- has_many :products
- has_many :comments
- has_one :address, dependent: :destroy
- has_one :card, dependent: :destroy
- has_one :sns_credential, dependent: :destroy


## addressテーブル
|Column|Type|Options|
|------|----|-------|
|postal_code|string|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|street|string|null: false|
|building_name|string||
|phone_optional|string||
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user, inverse_of: :addresses


## cardsテーブル
|Column|Type|Options|
|------|----|-------|
|card_id|string|null: false|
|expiration_month|integer|null: false|
|expiration_year|integer|null: false|
|security_code|integer|null: false|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user


## productsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|description|text|null: false|
|category|references|null: false, foreign_key: true|
|brand|references|foreign_key: true|
|condition|string|null: false|
|delivery_cost|string|null: false|
|delivery_way|string|null: false|
|delivery_days|string|null: false|
|price|integer|null: false|
|buyer_id|integer|foreign_key: true|
|saller_id|integer|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :category
- belongs_to :brand
- has_many :images, dependent: :destroy
- accepts_nested_attributes_for :images, allow_destroy: true
- has_many :comments, dependent: :destroy
- belongs_to :saler, class_name: "User"
- belongs_to :buyer, class_name: "User"


## sns_credentialsテーブル
|Column|Type|Options|
|------|----|-------|
|uid|string|null: false|
|provider|string|null: false|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user|references|null: false, foreign_key: true|
|product|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :product


## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|product|references|null: false, foreign_key: true|
### Association
- belongs_to :product, inverse_of: :images


## categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :products
- has_ancestry


## brandsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :products


## sizesテーブル
|Column|Type|Options|
|------|----|-------|
|size|string||
|ancestry|references|null: false, foreign_key: true|
### Association
- has_many :products
- has_many :category_sizes
- has_many :categories, through: :category_sizes
- has_ancestry