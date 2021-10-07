class ItemsController < ApplicationController
  def index
    items = Item.all
    
    render json: items
  end

  # GET /items/1
  def show
    item = Item.find_by(params[:id])
    render json: item
  end

  # POST /items
  def create
    # byebug
    item = Item.new(item_params)

    if item.save
      render json: item, status: :created, location: item
    else
      render json: {error: "Couldn't save"}
    end
  end

  # PATCH/PUT /items/1
  def update
    item = Item.find_by(params[:id])
    if item.update(item_params)
      render json: item
    else
      render json: {error: "Couldn't update"}
    end
  end

  # DELETE /items/1
  def destroy
    item = Item.find(params[:id])
    item.destroy
    render json: {message: "#{item.name} destroyed"}
  end

  private
    # Only allow a list of trusted parameters through.
    def item_params
      params.require(:item).permit(:name, :description, :condition, :price, :category_id)
    end
end
