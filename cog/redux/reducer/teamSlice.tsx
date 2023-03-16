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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
              ticketDescription: "this is demo",
              quarter: "april-june",
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
              ticketNumer: 130,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 135,
              ticketDescription: "this is demo",
              quarter: "april-june",
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
              ticketNumer: 14,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 25,
              ticketDescription: "this is demo",
              quarter: "april-june",
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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
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
              ticketNumer: 124,
              ticketDescription: "this is demo",
              quarter: "april-june",
              sprintNo: 2,
            },
            {
              ticketNumer: 125,
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
