const heading = React.createElement(
    "div", 
    {id :"parent"},
    React.createElement("div", {id:"child"},
    React.createElement("h1", {class:"heading"}, "this is heading"),
    React.createElement("h2", {class:"heading"}, "this is 2nd heading"),
    )
);

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render (heading);