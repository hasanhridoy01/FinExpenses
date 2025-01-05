import React, { useState } from "react";
import { Box, Button, Checkbox, Tooltip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  {
    field: "alert",
    headerName: "All",
    width: 50,
    headerAlign: "center",
    align: "center",
    renderCell: () => (
      <Tooltip title="Alert">
        <span style={{ color: "#ffcc00", fontSize: "1.5em" }}>⚠️</span>
      </Tooltip>
    ),
    sortable: false,
  },
  {
    field: "receiptTitle",
    headerName: "Receipt Title",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "purpose",
    headerName: "Purpose",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "type",
    headerName: "Type",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "costCenter",
    headerName: "Cost Center",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "requested",
    headerName: "Requested",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "submit",
    headerName: "Action",
    width: 100,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <Button
        variant="contained"
        sx={{
          backgroundColor: "primary.light",
          boxShadow: "none", // Removes shadow
          color: "#000", // Default text color
          border: "1px solid #CDD9FF",
          borderRadius: "35px",
        }}
        size="small"
        onClick={() => console.log(`Submitted: ${params.row.id}`)}
      >
        Submit
      </Button>
      //   <Button
      //   variant="contained"
      //   sx={{
      //     backgroundColor: "#F0FAE9",
      //     boxShadow: "none", // Removes shadow
      //     color: "#000", // Default text color
      //     border: "1px solid #D2F0BB",
      //     borderRadius: "35px",
      //   }}
      //   size="small"
      //   onClick={() => console.log(`Submitted: ${params.row.id}`)}
      // >
      //   View
      // </Button>
    ),
    sortable: false,
  },
];

const rows = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  receiptTitle: "Company Paid",
  purpose: "Company Paid",
  type: "Office Depot (Dallas, Texas)",
  date: "06/01/2023",
  costCenter: "Office Supplies",
  requested: `$${(298.0 + index).toFixed(2)}`,
}));

const ExpensesList = () => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const isSelected = (id) => selected.includes(id);
  const rowCount = rows.length;
  const numSelected = selected.length;

  const onSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all rows",
                  }}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align}
                  style={{ minWidth: column.width }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onChange={(event) => handleClick(event, row.id)}
                        inputProps={{
                          "aria-labelledby": `enhanced-table-checkbox-${row.id}`,
                        }}
                      />
                    </TableCell>
                    {columns.map((column) => {
                      const value = column.renderCell
                        ? column.renderCell({ row })
                        : row[column.field];
                      return (
                        <TableCell key={column.field} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ExpensesList;
