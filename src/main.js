// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnalysisPage from './pages/detail/analysis'
import DetailCountPage from './pages/detail/count'
import DetailForecastPage from './pages/detail/forecast'
import DetailPublishPage from './pages/detail/publish'
import OrderListPage from './pages/orderList'
//Vue.config.productionTip = false

import store from  './store/index'
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnalysisPage
        },
        {
          path: 'count',
          component: DetailCountPage
        },
        {
          path: 'forecast',
          component: DetailForecastPage
        },
        {
          path: 'publish',
          component: DetailPublishPage
        }
      ]
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
});
