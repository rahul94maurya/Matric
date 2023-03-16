import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  teams: [
    {
      id: 1,
      teamName: "abc",
      quarters: [
        {
          quarterName: "april-june",
          sprints: [
            {
              sprintNo: 1,
              startDate: "10/4/2023",
              dueDate: "30/5/2023",
            },
            {
              sprintNo: 2,
              startDate: "15/4/2023",
              dueDate: "1/5/2023",
            },
          ],
        },
        {
          quarterName: "jan-march",
          sprints: [
            {
              sprintNo: 1,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
            {
              sprintNo: 2,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
          ],
        },
      ],
      members: [
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "sprint no:1 , quarter: april-june ",
              quarter: "april-june",
              sprintNo: 1,
            },
            {
              ticketNumber: 125,
              ticketDescription: "sprint no:2 , quarter: jan-march ",
              quarter: "jan-march",
              sprintNo: 2,
            },
          ],
        },
        {
          id: 1451,
          name: "ravi",
          role: ["ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 130,
              ticketDescription: "sprint no:1 , quarter: april-june ",
              quarter: "april-june",
              sprintNo: 1,
            },
            {
              ticketNumber: 135,
              ticketDescription: "sprint no:2 , quarter: jan-march ",
              quarter: "jan-march",
              sprintNo: 2,
            },
          ],
        },
        {
          id: 15,
          name: "ram",
          role: ["DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 14,
              ticketDescription: "sprint no:1 , quarter: april-june",
              quarter: "april-june",
              sprintNo: 1,
            },
            {
              ticketNumber: 25,
              ticketDescription: "sprint no:2 , quarter: jan-march",
              quarter: "jan-march",
              sprintNo: 2,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      teamName: "xyz",
      quarters: [
        {
          quarterName: "april-june",
          sprints: [
            {
              sprintNo: 1,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
            {
              sprintNo: 2,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
          ],
        },
        {
          quarterName: "april-june",
          sprints: [
            {
              sprintNo: 1,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
            {
              sprintNo: 2,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
          ],
        },
      ],
      members: [
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumber: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
          ],
        },
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumber: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
          ],
        },
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumber: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      teamName: "def",
      quarters: [
        {
          quarterName: "april-june",
          sprints: [
            {
              sprintNo: 1,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
            {
              sprintNo: 2,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
          ],
        },
        {
          quarterName: "april-june",
          sprints: [
            {
              sprintNo: 1,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
            {
              sprintNo: 2,
              startDate: "1/4/2023",
              dueDate: "12/5/2023",
            },
          ],
        },
      ],
      members: [
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumber: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
          ],
        },
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumber: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
          ],
        },
        {
          id: 1245,
          name: "rahul",
          role: ["SD", "ML", "DL"],
          ifOnlyMLThenSD: "demo",
          allowAddEditTeams: "yes",
          allowAddEditSprint: "yes",
          allowToSeePerformance: "No",
          ticketAssigned: [
            {
              ticketNumber: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumber: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
          ],
        },
      ],
    },
  ],
  error: "",
};

const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
});

export default teamSlice.reducer;
