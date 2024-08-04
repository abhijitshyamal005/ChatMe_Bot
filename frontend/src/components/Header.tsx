import  AppBar  from "@mui/material/AppBar";
import  Toolbar  from "@mui/material/Toolbar";


const Header = () => {
  return <AppBar  sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
    <Toolbar sx={{ display: "flex" }}>
      <h1>ChatMe</h1>
    </Toolbar>

  </AppBar>;
};

export default Header;
