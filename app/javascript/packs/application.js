import "bootstrap";

import {apiHelper, portfolioHelper} from 'components/onboarding.js'
import { rebalanceConf, sellConf } from 'components/button_confirms';
import { get_price_change } from 'components/price_changes';
import { allocationChart, listeners, setListeners, updateChart, initdataArray, sumAllocations, addValues} from 'components/allocation_chart';
import { loadChart } from 'components/portfolio_chart';

const portfolioPage = document.querySelector('.portfolios.show');
if (portfolioPage != null) {
  loadChart();
  get_price_change();
  rebalanceConf();
  sellConf();
}
const allocationsNewPage = document.querySelector('.portfolios.new');
if (allocationsNewPage != null) {
  portfolioHelper();
  addValues();
  listeners();
  allocationChart();
}

const allocationsEditPage = document.querySelector('.portfolios.edit');
if (allocationsEditPage != null) {
  addValues();
  listeners();
  allocationChart();
}

const signUpPage = document.querySelector('.registrations.new');
if (signUpPage != null) {
  apiHelper();
}

const newPortfolioPage = document.querySelector('.portfolio.new');
if (newPortfolioPage != null) {

}


