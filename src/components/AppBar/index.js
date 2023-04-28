import React, { useContext } from "react";
import { AppBar, Badge, Box, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Context from "../../Context";

const CustomeAppBar = () => {
  const { productDetail } = useContext(Context);
  return (
    <Box sx={{ width: "100%", height: "50px" }}>
      <AppBar
        position="static"
        sx={{
          background: "#eeeeee",
          color: "black",
          height: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          px: 2,
        }}
      >
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          TeeRex Store
        </Link>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Products
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <IconButton>
              <Badge badgeContent={productDetail.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
};
export default CustomeAppBar;
