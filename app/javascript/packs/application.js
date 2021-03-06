import "bootstrap";

import { apiHelper, portfolioHelper, dashboardHelper } from 'components/onboarding'
import { rebalanceConf, sellConf } from 'components/button_confirms';
import { get_price_change } from 'components/price_changes';
import { addValues, listeners, allocationChart } from 'components/allocation_chart';
import { loadChart } from 'components/portfolio_chart';

const portfolioPage = document.querySelector('.portfolios.show');
if (portfolioPage != null) {
  dashboardHelper();
  rebalanceConf();
  sellConf();
  loadChart();
  get_price_change();
}

const allocationsNewPage = document.querySelector('.portfolios.new');
if (allocationsNewPage != null) {
  listeners();
  portfolioHelper();
  addValues();
  allocationChart();
  // loadIndex();
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

if($('.alert').hasClass('show')) {
  setTimeout(() => {
    $('.alert').fadeOut();
  }, 6000)
}


