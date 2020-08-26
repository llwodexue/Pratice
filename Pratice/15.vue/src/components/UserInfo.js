var template = `<div id="app">
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
</div>`;

export default{
    props: ["name", "age"],
    template,
};
