

export const Header = () => {
    let customCSS="lod";
    const isLoggedIn=true;
    const greeting=isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
  return <>
  <div><center>
    <h1 className="banner" > Bane </h1></center>
    <hr></hr>
    <p className="ter">Second day of react</p>
    <p className={customCSS}>25+45={25+45}</p>
    {greeting}
  </div>
  </>;
  
};
