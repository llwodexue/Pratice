import UseInfo from "./components/UserInfo.js";

var template = `
<div id="app">
<h1>{{title}}</h1>
<UseInfo v-for="(item, i) in users" :key="i" :name="item.name" :age="item.age" />
</div>`;

export default {
    template,
    components: {
        UseInfo,
    },
    data() {
        return {
            title: "Vue",
            users: [
                { name: "iphone", age: "1" },
                { name: "huawei", age: "4" },
                { name: "xiaomi", age: "6" },
            ],
        };
    },
};
