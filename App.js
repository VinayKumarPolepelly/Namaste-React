const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{id:"h1"},"iam h1 tag")));
console.log("Sdf1");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);