import { Box, TextField } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
const SearchBox = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: [1, 0.7, 0.4] }}>
        <TextField
          fullWidth
          label="Search field"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant="filled"
        />
      </Box>
      <Box>
        <PageviewIcon sx={{ width: "48px", height: "80px" }} color="disabled" />
      </Box>
    </Box>
  );
};
export default SearchBox;
