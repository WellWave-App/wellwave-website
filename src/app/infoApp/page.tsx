import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  Stack,
  
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const rewardData = [
  { name: "15 EXP", rate: "10%" },
  { name: "15 EXP", rate: "10%" },
  { name: "15 EXP", rate: "10%" },
  { name: "15 EXP", rate: "10%" },
  { name: "15 EXP", rate: "10%" },
];

const exchangeData = [
  { name: "1 Gem", exchange: "15 EXP", remaining: "10/99" },
  { name: "10 Gem", exchange: "150 EXP", remaining: "10/99" },
  { name: "20 Gem", exchange: "300 EXP", remaining: "10/99" },
  { name: "200 Gem", exchange: "3000 EXP", remaining: "10/99" },
  { name: "1000 Gem", exchange: "1500 EXP", remaining: "10/99" },
];

const RewardPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: "24px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
        เพิ่มข้อมูล / ของรางวัล
      </Typography>

      {/* กล่องของรางวัลทั้งหมด */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Chip label="EXP" color="warning" />
          <Chip label="Gem" color="secondary" />
          <Chip label="ของรางวัล" variant="outlined" />
          <IconButton color="primary">
            <AddCircleIcon />
          </IconButton>
        </Stack>
        <IconButton>
          <Typography>A</Typography>
        </IconButton>
      </Box>

      <Divider sx={{ marginY: "16px" }} />

      {/* กล่องสุ่ม */}
      <Box sx={{ marginBottom: "32px" }}>
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          กล่องสุ่ม
        </Typography>
        <Button variant="contained" sx={{ marginBottom: "16px" }}>
          + เพิ่มกล่องสุ่ม
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ชื่อ <ArrowDropDownIcon fontSize="small" />
                </TableCell>
                <TableCell>
                  อัตราการเกิด <ArrowDropDownIcon fontSize="small" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rewardData.map((reward, index) => (
                <TableRow key={index}>
                  <TableCell>{reward.name}</TableCell>
                  <TableCell>{reward.rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={20}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: "16px", justifyContent: "center", display: "flex" }}
        />
      </Box>

      {/* แลกเปลี่ยน */}
      <Box>
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          แลกเปลี่ยน
        </Typography>
        <Button variant="contained" sx={{ marginBottom: "16px" }}>
          + เพิ่มแลกเปลี่ยน
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ชื่อ <ArrowDropDownIcon fontSize="small" />
                </TableCell>
                <TableCell>
                  แลกแทนรางวัล <ArrowDropDownIcon fontSize="small" />
                </TableCell>
                <TableCell>
                  ยอดคงเหลือ <ArrowDropDownIcon fontSize="small" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exchangeData.map((exchange, index) => (
                <TableRow key={index}>
                  <TableCell>{exchange.name}</TableCell>
                  <TableCell>{exchange.exchange}</TableCell>
                  <TableCell>{exchange.remaining}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={20}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: "16px", justifyContent: "center", display: "flex" }}
        />
      </Box>
    </Box>
  );
};

export default RewardPage;
