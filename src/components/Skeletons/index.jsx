import { Container, Skeleton } from "@mui/material";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth="xxl">
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "10px" }}
      />
    </Container>
  );
};
