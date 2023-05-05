import React, { useContext } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import Context from "../../Context";
import { addToCart } from "../../utils/addToCart";

const ProductCard = ({ product }) => {
  const { setProductDetail } = useContext(Context);

  const onAddtoCard = () => {
    setProductDetail((prev) =>
      addToCart({ arr: prev, id: product.id, product })
    );
  };

  return (
    <Card sx={{ width: [1, 250], maxWidth: 300 }}>
      <Box sx={{ p: 1 }}>
        <Box sx={{ height: 140 }}>
          <img
            style={{ height: "100%", width: "100%" }}
            alt="no data"
            src={product?.imageURL}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box sx={{ width: 0.5, textAlign: "center" }}>
            <Typography>{`Rs ${product?.price}`}</Typography>
          </Box>
          <Typography>{product?.name}</Typography>
          <Button onClick={onAddtoCard} sx={{ width: 0.5 }} variant="contained">
            Add to card
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
