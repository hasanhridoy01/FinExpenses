import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Checkbox,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    field: "receiptType",
    headerName: "Receipt Type",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "expenceType",
    headerName: "Expence Type",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "vendorDetails",
    headerName: "Vendor Details",
    width: 150,
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
    field: "amount",
    headerName: "Amount",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
];

const rows = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  receiptType: "Company Paid",
  expenceType: "Office Depot (Dallas, Texas)",
  vendorDetails: "Office Supplies",
  date: "06/01/2023",
  amount: `$${(298.0 + index).toFixed(2)}`,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AddExpenses = () => {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 9H13.5"
            stroke="#222222"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 13.5V4.5"
            stroke="#222222"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add Expanse
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Typography variant="h6" color="primary.main">
            Add Expanses{" "}
          </Typography>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={handleClose}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#D2D2D2" />
              <g clip-path="url(#clip0_94_5176)">
                <path
                  d="M31 18.41L29.59 17L24 22.59L18.41 17L17 18.41L22.59 24L17 29.59L18.41 31L24 25.41L29.59 31L31 29.59L25.41 24L31 18.41Z"
                  fill="#322F35"
                />
              </g>
              <defs>
                <clipPath id="clip0_94_5176">
                  <rect
                    x="4"
                    y="4"
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </DialogTitle>
        <DialogContent sx={{ width: "1070px", height: "auto" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontWeight: "500",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    borderBottom: "none",
                    fontFamily: '"Poppins", sans-serif',
                  },
                  "& .Mui-selected": {
                    borderBottom: "2px solid #172B4D",
                    backgroundColor: "primary.light",
                    color: "#172B4D",
                  },
                }}
              >
                <Tab label="Available Expanses (10) " {...a11yProps(0)} />
                <Tab label="Create New " {...a11yProps(1)} />
              </Tabs>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  label="Search"
                  size="small"
                  sx={{
                    mr: 2,
                    "& .MuiOutlinedInput-root": {
                      border: "none",
                      "& fieldset": {
                        border: "none", // Removes the border around the TextField
                      },
                      "&:hover fieldset": {
                        border: "none", // Ensures no border on hover
                      },
                      "&.Mui-focused fieldset": {
                        border: "none", // Removes the border when focused
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.66634 13.9997C11.1641 13.9997 13.9997 11.1641 13.9997 7.66634C13.9997 4.16854 11.1641 1.33301 7.66634 1.33301C4.16854 1.33301 1.33301 4.16854 1.33301 7.66634C1.33301 11.1641 4.16854 13.9997 7.66634 13.9997Z"
                            stroke="#555555"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.6663 14.6663L13.333 13.333"
                            stroke="#555555"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            indeterminate={
                              numSelected > 0 && numSelected < rowCount
                            }
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
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
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
                                  onChange={(event) =>
                                    handleClick(event, row.id)
                                  }
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
                                  <TableCell
                                    key={column.field}
                                    align={column.align}
                                  >
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
              </Paper>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Button variant="contained" color="surface">
                  Delete Report
                </Button>
                <Button variant="contained" color="primary">
                  Add to report
                </Button>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {/* Recently Used */}
              <Accordion defaultExpanded sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Recently Used</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="medium" gutterBottom>
                    Office Supplies
                  </Typography>
                  <Typography variant="medium" gutterBottom>
                    Car Rental
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Business Promotions */}
              <Accordion defaultExpanded sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">Business Promotions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="medium" gutterBottom>
                    Misc. Promotional Expense
                  </Typography>
                  <Typography variant="medium" gutterBottom>
                    Trade Shows
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Communications */}
              <Accordion sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="h6">Communications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="medium" gutterBottom>
                    No items available
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Communications */}
              <Accordion sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="h6">Communications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="medium" gutterBottom>
                    No items available
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CustomTabPanel>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AddExpenses;
