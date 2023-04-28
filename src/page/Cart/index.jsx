import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import ProductCart from "../../components/ProductCart";
import Context from "../../Context";

const Cart = () => {
  const { productDetail, setProductDetail } = useContext(Context);

  const onDelete = (id) => {
    setProductDetail((prev) => {
      const prevArr = [...prev];
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        prevArr.splice(index, 1);
      }
      return prevArr;
    });
  };

  return (
    <Box
      sx={{
        height: 1,
        width: [1, 0.8, 0.6],
        display: "flex",
        justifyContent: "center",
        pt: 2,
      }}
    >
      <Box
        sx={{
          width: [1, 0.9, 0.8],
        }}
      >
        <Box>
          <Typography>Shopping Cart</Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
            mt: 2,
            height: "calc(100% - 50px)",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              width: 0.9,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pl: [0, 3, 6, 9],
            }}
          >
            {productDetail.map((product) => (
              <Box key={product.id} sx={{ minWidth: 300 }}>
                <ProductCart onDelete={onDelete} product={product} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
