import React from "react";
import ReactDOM from 'react-dom/client';  // ✅ Correct import

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I am an h1 tag"),
//     ])
// ]);

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "child-1" }, [
      React.createElement("h1", { key: "h1-1" }, "I am an h1 tag")
    ])
  ]); 
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
