import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const ProductCart = ({ product, onDelete }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: 100,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid item xs={2.5} sx={{ height: 1 }}>
        <img
          style={{ height: "100%", width: "100%" }}
          alt="no data"
          src={product?.imageURL}
        />
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          height: 1,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>{product.name}</Typography>
          <Typography sx={{ fontWeight: 700 }}>Rs {product.price}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #c3c4c3",
            borderRadius: "5px",
            px: 1,
            height: 37,
          }}
        >
          <Typography>Qty: {product.count}</Typography>
        </Box>
        <Box>
          <Button
            onClick={() => onDelete(product.id)}
            sx={{ borderRadius: "5px !important" }}
            variant="outlined"
          >
            Delete
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductCart;
