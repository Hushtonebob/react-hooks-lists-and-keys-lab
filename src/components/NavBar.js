import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const newLinks = links.map((blam) => {return (<a key={blam} href={'#'+(blam)}>{blam}</a>)});

  return <nav> {newLinks} </nav>;
}

export default NavBar;
