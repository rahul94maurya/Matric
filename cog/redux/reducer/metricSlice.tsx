import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  metric: [
    {
      metricName: "xyz",
      description: "this is description",
      questions: [
        {
          question: "how are you",
          description: "how to do this",
        },
      ],
      applicableTo: ["SD", "ML", "DL"],
    },
    {
      metricName: "pqr",
      description: "this is description",
      questions: [
        {
          question: "how are you",
          description: "how to do this",
        },
      ],
      applicableTo: ["SD", "ML"],
    },
  ],
  error: "",
};

const metricSlice = createSlice({
  name: "metric",
  initialState,
  reducers: {},
});

export default metricSlice.reducer;
