import React, { useContext } from "react";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import Context from "../../Context";
import { addToCart } from "../../utils/addToCart";

const prodductCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ProductCart = ({ product, onDelete, setPrice }) => {
  const { setProductDetail } = useContext(Context);
  const handleChange = (e) => {
    setProductDetail((prev) =>
      addToCart({ arr: prev, id: product.id, count: e.target.value })
    );
  };

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
        <Select value={product.count} label="Age" onChange={handleChange}>
          {prodductCount.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
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
