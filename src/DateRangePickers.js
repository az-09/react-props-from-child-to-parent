import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function DateRangePickers(props) {
  const { dates, handleParameters } = props;

  return (
    <Container component="main" maxWidth="xl">
      <TextField
        id="fromDate"
        label="From Date"
        type="date"
        defaultValue={dates.fromDate}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        onChange={handleParameters}
      />
      <TextField
        id="toDate"
        label="To Date"
        type="date"
        defaultValue={dates.toDate}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        onChange={handleParameters}
      />
    </Container>
  );
}
