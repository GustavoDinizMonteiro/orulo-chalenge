class BuildingsController < ApplicationController
  before_action :set_building, only: [:show, :update, :destroy]
  before_action :building_to_delete, only: [:create]

  # GET /buildings
  def index
    @buildings = Building.all

    render json: @buildings
  end

  # GET /buildings/1
  def show
    render json: @building
  end

  # POST /buildings
  def create
    if building_params[:favorite]    
      @building = Building.new(building_params)
  
      if @building.save
        render json: @building, status: :created, location: @building
      else
        render json: @building.errors, status: :unprocessable_entity
      end
    else
      @building.destroy
    end
  end

  # PATCH/PUT /buildings/1
  def update
    if @building.update(building_params)
      render json: @building
    else
      render json: @building.errors, status: :unprocessable_entity
    end
  end

  # DELETE /buildings/1
  def destroy
    @building.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_building
      @building = Building.find(params[:id])
    end

    def building_to_delete
      @building = Building.find_by(external_id: params[:external_id])
    end

    # Only allow a trusted parameter "white list" through.
    def building_params
      params.require(:building).permit(:favorite, :external_id, :user_id)
    end
end
