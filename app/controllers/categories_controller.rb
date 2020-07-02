class CategoriesController < ApplicationController
  before_action :apply_gon
  before_action :set_parents

  def new
    @children = Category.find(params[:parent_id]).children
    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @category_name = Category.find(params[:id])
    if @category_name.has_children?
      @products = Product.where(category_id: @category_name.descendant_ids).where.not(transaction_status: 2).order("created_at DESC")
    else
      @products = Product.where(category_id: params[:id]).where.not(transaction_status: 2).order("created_at DESC")
    end
  end

  def apply_gon
    gon.payjp_key = ENV["PAYJP_KEY"]
  end  
end

