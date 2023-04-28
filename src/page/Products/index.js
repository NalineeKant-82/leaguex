import { Box, Grid } from "@mui/material";
import SearchBox from "../../components/SearchBox";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard/indx";
import useAxios from "../../api";
import Loading from "../../components/Loading";
import { useState, useMemo } from "react";

const Products = () => {
  const [filterData, setFilterData] = useState({});
  const { data, loading } = useAxios();

  const products = useMemo(() => {
    const newArr = [...(data?.data || [])];

    newArr.filter((item) => {
      return item;
    });

    return newArr;
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid container sx={{ height: 1, width: 1 }}>
      <Grid
        item
        xs={0}
        md={3}
        sx={{
          height: 1,
          width: 1,
          justifyContent: "center",
          alignItems: "center",
          display: ["none", "none", "flex"],
          flexDirection: "row",
        }}
      >
        <Filter filterData={filterData} setFilterData={setFilterData} />
      </Grid>
      <Grid item xs={12} md={9} sx={{ p: 2, height: 1, overflow: "auto" }}>
        <SearchBox />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: [1, 2, 3],
            justifyContent: "center",
          }}
        >
          {products?.map((product, index) => (
            <Box key={index}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
export default Products;
