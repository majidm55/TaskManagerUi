import {
  Box,
  Typography,
  Pagination,
  Stack,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

interface SimplePaginationProps {
  page: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  isLoading?: boolean;
}

export default function SimplePagination({
  page,
  pageSize,
  totalPages,
  onPageChange,
  onPageSizeChange,
  isLoading = false,
}: SimplePaginationProps) {
  const handlePageChange = (__: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    onPageSizeChange(Number(event.target.value));
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2">Items per page:</Typography>
        <FormControl size="small" sx={{ minWidth: 80 }}>
          <Select
            value={pageSize}
            onChange={handlePageSizeChange}
            disabled={isLoading}
            size="small"
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        size="small"
        showFirstButton
        showLastButton
        siblingCount={1}
        boundaryCount={1}
        disabled={isLoading}
      />
    </Stack>
  );
}
