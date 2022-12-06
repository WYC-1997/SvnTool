import loadmore from './loadmore'

const install = Vue => {
  Vue.directive('loadmore', loadmore)
}
if (window.Vue) {
  window.waves = loadmore
  Vue.use(install); // eslint-disable-line
}

loadmore.install = install
export default loadmore
