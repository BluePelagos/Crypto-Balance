class AddPortfoiloToAllocations < ActiveRecord::Migration[5.2]
  def change
    add_reference :allocations, :portfolio, foreign_key: true
  end
end
