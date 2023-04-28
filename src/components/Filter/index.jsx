import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Test = [
  {
    name: "Colors",
    childrens: [
      { label: "Red", value: "red" },
      { label: "Green", value: "green" },
    ],
  },
  {
    name: "Gender",
    childrens: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  },
  {
    name: "Price",
    childrens: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  },
  {
    name: "Type",
    childrens: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  },
];

const Filter = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: 0.8,
        width: 0.8,
        p: 3,
        overflow: "auto",
        display: ["none", "none", "flex"],
        flexDirection: "column",
      }}
    >
      {Test.map((i) => {
        return (
          <Box key={`cat${i.name}`}>
            <Typography>{i.name}</Typography>
            <FormGroup sx={{ ml: 0.5 }}>
              {i.childrens.map((item) => (
                <FormControlLabel
                  key={`che${item.label}`}
                  control={<Checkbox size="small" />}
                  label={item.label}
                />
              ))}
            </FormGroup>
          </Box>
        );
      })}
    </Paper>
  );
};

export default Filter;
