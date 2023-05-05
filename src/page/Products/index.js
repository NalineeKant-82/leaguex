import { Box, Grid } from "@mui/material";
import SearchBox from "../../components/SearchBox";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard/indx";
import useAxios from "../../api";
import Loading from "../../components/Loading";
import { useState, useMemo } from "react";
import { filterItem } from "../../utils/filter";

const Products = () => {
  const [filterData, setFilterData] = useState({});
  const [search, setSearch] = useState("");
  const { data, loading } = useAxios();

  const products = useMemo(() => {
    const filteritems = filterItem(data?.data, filterData);
    const searchItemsProduct = () => {
      return filteritems.filter((filterItem) => {
        if (filterItem.name.toUpperCase() === search.toUpperCase()) {
          return filterItem;
        }
        return null;
      });
    };
    const searchItems =
      search.length > 0
        ? search.includes(" ") && search.indexOf(" ") !== search.length - 1
          ? searchItemsProduct()
          : filteritems.filter((item) => {
              return (
                item.name.toUpperCase().indexOf(search.toUpperCase()) !== -1
              );
            })
        : filteritems;

    return searchItems;
  }, [data, filterData, search]);

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
        <SearchBox value={search} onChange={setSearch} />
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
