import "bootstrap";

import { get_price_change } from 'components/price_changes';
import { allocationChart, setListeners, updateChart, initdataArray, sumAllocations} from 'components/allocation_chart';
import { loadChart } from 'components/portfolio_chart';

const portfolioPage = document.querySelector('.portfolios.show');
if (portfolioPage != null) {
  loadChart();
  get_price_change();
}
const allocationsPage = document.querySelector('.allocations');
if (allocationsPage != null) {
  allocationChart();
  initdataArray()
  setListeners();
  updateChart();
  sumAllocations();
}
