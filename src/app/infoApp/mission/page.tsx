import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip, Pagination, TextField } from "@mui/material";

interface Task {
  name: string;
  category: string;
  reward: number;
  successRate: string;
  participants: string;
  status: string;
}

const taskData: Task[] = [
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 150, successRate: "50%", participants: "10/99 คน", status: "กำลัง" },
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 150, successRate: "50%", participants: "10/99 คน", status: "ใกล้สำเร็จ" },
  { name: "ภารกิจ", category: "ออกกำลังกาย", reward: 150, successRate: "50%", participants: "10/99 คน", status: "พอใช้" },
  { name: "ภารกิจ", category: "พักผ่อน", reward: 150, successRate: "50%", participants: "10/99 คน", status: "สำเร็จ" },
  // เพิ่มข้อมูลตามต้องการ
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "กำลัง":
      return "warning";
    case "ใกล้สำเร็จ":
      return "error";
    case "พอใช้":
      return "secondary";
    case "สำเร็จ":
      return "success";
    default:
      return "default";
  }
};

const TaskPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = taskData.filter((task) =>
    task.name.includes(searchTerm) || task.category.includes(searchTerm)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>ภารกิจ ทั้งหมด 10 ภารกิจ</h1>

      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <TextField
          label="ค้นหา"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="contained" color="primary">
          + เพิ่มภารกิจ
        </Button>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ชื่อ</TableCell>
              <TableCell>หมวดหมู่</TableCell>
              <TableCell>ของรางวัล</TableCell>
              <TableCell>อัตราสำเร็จ</TableCell>
              <TableCell>จำนวนคนสำเร็จ</TableCell>
              <TableCell>ความคืบหน้า</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.category}</TableCell>
                <TableCell>{task.reward}</TableCell>
                <TableCell>{task.successRate}</TableCell>
                <TableCell>{task.participants}</TableCell>
                <TableCell>
                  <Chip label={task.status} color={getStatusColor(task.status)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Pagination count={20} color="primary" />
      </div>
    </div>
  );
};

export default TaskPage;
