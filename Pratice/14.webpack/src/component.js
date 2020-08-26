let styles = require("./component.css");

exports.init = function ($dom) {
    $dom.innerHTML = `<p class="${styles.p}">我是一个自给自足的组件</p>
                    <p class="${styles.p} ${styles.red}">我是红的</p>
                    <p class="${styles.p} ${styles.green}">我是绿的</p>`;
};
