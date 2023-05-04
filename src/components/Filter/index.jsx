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
    name: "color",
    childrens: [
      { label: "Red", value: "Red" },
      { label: "Blue", value: "Blue" },
      { label: "Green", value: "Green" },
      { label: "Black", value: "Black" },
    ],
  },
  {
    name: "gender",
    childrens: [
      { label: "Men", value: "Men" },
      { label: "Women", value: "Women" },
    ],
  },
  {
    name: "price",
    childrens: [
      { label: "0-Rs250", value: 0 },
      { label: "Rs250-Rs450", value: 250 },
      { label: "Rs450", value: 450 },
    ],
  },
  {
    name: "type",
    childrens: [
      { label: "Polo", value: "Polo" },
      { label: "Hoodie", value: "Hoodie" },
      { label: "Basic", value: "Basic" },
    ],
  },
];

const Filter = ({ filterData, setFilterData }) => {
  const handleChange = (value, pKey, cKey) => {
    setFilterData((prev) => {
      let newObj = { ...prev };
      newObj[pKey] = newObj[pKey]
        ? { ...newObj[pKey], [cKey]: value }
        : { [cKey]: value };

      return newObj;
    });
  };

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
      {Test.map((type) => {
        return (
          <Box key={`cat${type.name}`}>
            <Typography>{type.name}</Typography>
            <FormGroup sx={{ ml: 0.5 }}>
              {type.childrens.map((item) => {
                const keys = filterData[type.name];
                const values = keys && keys[item.value];

                return (
                  <FormControlLabel
                    key={`che${item.label}`}
                    control={
                      <Checkbox
                        checked={values}
                        onChange={(event) =>
                          handleChange(
                            event.target.checked,
                            type.name,
                            item.value
                          )
                        }
                        size="small"
                      />
                    }
                    label={item.label}
                  />
                );
              })}
            </FormGroup>
          </Box>
        );
      })}
    </Paper>
  );
};

export default Filter;
