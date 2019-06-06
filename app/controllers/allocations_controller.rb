class AllocationsController < ApplicationController
  before_action :set_allocation, only: [:update, :edit]

  def new
    @allocation = Allocation.new
    @portfolio = Portfolio.find(params[:portfolio_id])
  end

  def show
  end

  def create
    # @portfolio = Portfolio.find(params[:portfolio_id]
    @allocation = Allocation.new(allocation_params)
    @portfolio = params[:portfolio_id]

    if params[:crypto].values.map(&:to_i).sum != 100
      flash[:failure] = "Allocation must total 100% !"
      redirect_to new_portfolio_allocation_path(@portfolio)
    else
      params[:crypto].each do |coin, percentage|
        @allocation = Allocation.new
        @allocation.portfolio_id = @portfolio
        @allocation.coin_id = Coin.find_by(name: coin).id
        @allocation.allocation_pct = percentage.to_i
        @allocation.save
        Allocation.create(allocation_pct: 0, coin_id: 8, portfolio_id: @portfolio)
      end
      unless Allocation.last.portfolio_id.nil?
        flash[:success] = "Allocations have been saved!"
        redirect_to portfolio_path(@portfolio)
      else
        flash[:failure] = "There has been a problem allocating, Please try again!"
        redirect_to new_portfolio_allocation_path(@portfolio)
      end
    end
  end

#allocation_pct: 10, created_at: "2019-06-06 10:09:07", updated_at: "2019-06-06 10:09:07", coin_id: 1, portfolio_id: 2

  def edit
    @allocation = Allocation.new
  end

  def update
    if @allocation.update(allocation_params)
      redirect_to portfolio_path(@portfolio)
    else
      render :edit
    end
  end
end

private

def set_allocation
  @allocation = Allocation.find(params[:id])
end

def allocation_params
  params.require(:crypto).permit(:crypto)
end
