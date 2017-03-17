const Vue = require("./js/vendor/vue.min.js");

// register
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
});

// root instance
new Vue({
  el: '#register1'
});

// local register
// ======================================================/
let Child = {
  template: '<div>template from child</div>'
};

new Vue({
  el: "#register1",
  components: {
    'my-component2': Child
  }
});

// local register2
// ======================================================/
let Child2 = {
  template: '<div>template from child2</div>'
};

new Vue({
  el: "#register1",
  components: {
    'my-component3': Child2
  }
});



