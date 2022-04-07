import React from "react";

const styleLayout = {
	textAlign: "center",
	backgroundColor: "var(--takuya)",
	minHeight: "100vh",
  minWidth: "100%",
	padding: "40px 90px",
	maxWidth: "100vw",

};

const Layout = ({ children }) => {

return (

<div className="Layout" 
	style={styleLayout}
>
	{children}
</div>

); }; export { Layout };
