import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  members: [
    {
      name: "rahul",
      teams: [
        {
          teamName: "demo",
          quarter: [
            {
              quarterName: "april-june",
              sprint: [
                {
                  sprintNo: 1,
                  startDate: "12/12/2023",
                  dueDate: "30/12/2023",
                  ticketAssigned: [
                    {
                      ticketNo: 458,
                      matricApplied: [
                        {
                          matricName: "xyz",
                          comments: "comments-1",
                          questions: [
                            {
                              question: "do you know anything",
                              rating: 3,
                            },
                            {
                              question: "what is pet",
                              rating: 3,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ravi",
      teams: [
        {
          teamName: "demo",
          quarter: [
            {
              quarterName: "april-june",
              sprint: [
                {
                  sprintNo: 1,
                  startDate: "12/12/2023",
                  dueDate: "30/12/2023",
                  ticketAssigned: [
                    {
                      ticketNo: 458,
                      matricApplied: [
                        {
                          matricName: "xyz",
                          comments: "comments-1",
                          questions: [
                            {
                              question: "do you know anything",
                              rating: 3,
                            },
                            {
                              question: "what is pet",
                              rating: 3,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "rohit",
      teams: [
        {
          teamName: "demo",
          quarter: [
            {
              quarterName: "april-june",
              sprint: [
                {
                  sprintNo: 1,
                  startDate: "12/12/2023",
                  dueDate: "30/12/2023",
                  ticketAssigned: [
                    {
                      ticketNo: 458,
                      matricApplied: [
                        {
                          matricName: "xyz",
                          comments: "comments-1",
                          questions: [
                            {
                              question: "do you know anything",
                              rating: 3,
                            },
                            {
                              question: "what is pet",
                              rating: 3,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  error: "",
};

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
});

export default memberSlice.reducer;
