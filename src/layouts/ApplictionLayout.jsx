import React, { useState } from "react";
import CustomeAppBar from "../components/AppBar";
import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routesConfig } from "../router";
import Context from "../Context";

const ApplictionLayout = () => {
  const [productDetail, setProductDetail] = useState([]);
  const routes = useRoutes(routesConfig);

  return (
    <Box sx={{ height: 1, width: 1 }}>
      <Context.Provider value={{ productDetail, setProductDetail }}>
        <CustomeAppBar />

        <Box
          sx={{
            height: "calc(100% - 50px)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {routes}
        </Box>
      </Context.Provider>
    </Box>
  );
};

export default ApplictionLayout;
