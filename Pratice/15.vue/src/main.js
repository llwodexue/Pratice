import App from "./App.js";

var vm = new Vue({
    render: (createElement) => createElement(App),
}).$mount("#app");
