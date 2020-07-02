class HomesController < ApplicationController

  def index
    @products_ladies = Product.where(category_id: 1..205).order("created_at DESC").limit(10)
    @products_mens = Product.where(category_id: 206..350).order("created_at DESC").limit(10)
    @products_home_electronics = Product.where(category_id: 899..984).order("created_at DESC").limit(10)
    @products_toys = Product.where(category_id: 686..798).order("created_at DESC").limit(10)
    @products_chanel = Product.where(brand: "シャネル").order("created_at DESC").limit(10)
    @products_louis_vuitton = Product.where(brand: "ルイヴィトン").order("created_at DESC").limit(10)
    @products_supreme = Product.where(brand: "シュプリーム").order("created_at DESC").limit(10)
    @products_nike = Product.where(brand: "ナイキ").order("created_at DESC").limit(10)
    @parents = Category.where(ancestry: nil)
    parent_id = params[:parent_id]
    @children = Category.find_by(parent_id).children

    # @product=Product.images
  end



  def new
    @product = Product.new
    @product.images.new
    @category_parent_array = Category.where(ancestry: nil)
  end


  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      @category_parent_array = Category.where(ancestry: nil)
      render :new
    end

  end

  def show
    @product = Product.find(params[:id])

  end

  def edit
    @product = Product.new
    @product.images.new
    @category_parent_array = Category.where(ancestry: nil)
  end

  def destroy
    
    if @product.user_id == current_user.id && @product.destroy
      redirect_to root_path, notice: '商品を削除しました。'
    else
      redirect_to edit_product_path, alert: '商品の削除に失敗しました。'
    end
  end  


  private
  def product_params
    params.require(:product).permit(:name, :description, :condition, :delivery_cost, :delivery_origin, :delivery_days, :price,
                                    :category_id, :brand_id, :size_id, :buyer_id, images_attributes: [:id, :image] ).merge(user_id: current_user.id).merge(saler_id: current_user.id)
  end

end
