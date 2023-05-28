import {
  Box,

} from "@mui/material";
import { useConfigurator } from "../contexts/ConfiguratorContext";
import { useEffect } from "react";

export const Logo = () => {
  const { legs, tableName, setTableName } = useConfigurator();
  useEffect(() => {
    if (legs === 0) {
      setTableName("Table 1")
    }
    if (legs === 1) {
      setTableName("Table 2")
    }
    if (legs === 2) {
      setTableName("Table 3")
    }
  }, [legs])

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0
        }}

      >
        <img style={{
          padding: 20,
          width: "94px",
          height: "94px",
          objectFit: "contain",
        }} src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt="Logo" />




      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 70,
          left: 600
        }}

      >
        <h1 style={{ marginTop: 0, marginLeft: 0 }}>{tableName}</h1>
      </Box>
    </>
  );
};