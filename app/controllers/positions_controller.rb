class PositionsController < ApplicationController

  def create
    @position = Position.new
  end


  def index
    @positions = Position.all
  end

  def create
  end
end
