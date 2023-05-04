import React, { useContext } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import Context from "../../Context";

const ProductCard = ({ product }) => {
  const { setProductDetail } = useContext(Context);

  const onAddtoCard = () => {
    setProductDetail((prev) => {
      const prevArr = [...prev];
      const index = prev.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        if (prevArr[index].quantity === prevArr[index].count) {
          alert(
            `sorry you can't add more then${prevArr[index].quantity} quantity`
          );
        } else {
          prevArr[index] = { ...product, count: prevArr[index].count + 1 };
        }
      } else {
        prevArr.push({ ...product, count: 1 });
      }
      return prevArr;
    });
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
