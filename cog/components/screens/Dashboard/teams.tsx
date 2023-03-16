import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";

const Teams = function () {
  const [sprints, setSprints] = useState<any>([]);
  const [selectedQuarter, setSelectedQuarter] = useState<any>("");
  const [selectedSprint, setSelectedSprint] = useState<any>({});

  const location = useLocation();
  const teamName = location.state.teamName;
  const teams = useAppSelector((state) => state.teams.teams);
  const [selectedTeam] = teams.filter((e) => e.teamName === teamName);

  const availableQuarter = selectedTeam.quarters.map((e) => e.quarterName);
  // console.log("available quarter", availableQuarter);
  // console.log("location", selectedTeam);

  const quarterHandler = function (e: any) {
    // console.log("selected quarter", e.target.value);
    setSelectedQuarter(e.target.value);
    const [{ sprints }] = selectedTeam.quarters.filter(
      (a) => a.quarterName === e.target.value
    );
    setSprints(sprints);
    // console.log("sprint", sprints);
  };
  const sprintHandler = function (e: any) {
    const [selectedSprint] = sprints.filter(
      (a: any) => a.sprintNo === +e.target.value
    );
    setSelectedSprint(selectedSprint);
  };

  // const assignedTikcet = selectedTeam.members.map();

  return (
    <>
      <div>
        <div>
          <form>
            <label htmlFor="quarter">select Quarter : </label>
            <select name="quarter" id="quarter" onClick={quarterHandler}>
              {availableQuarter.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div>
          <form>
            <label htmlFor="sprint">select sprint : </label>
            <select name="sprint" id="sprint" onClick={sprintHandler}>
              {sprints.map((e: any) => (
                <option value={e.sprintNo} key={e.sprintNo}>
                  {e.sprintNo}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div>
          <div>Sprint Start date : {selectedSprint.startDate}</div>
        </div>
        <div>Sprint Due date : {selectedSprint.dueDate}</div>
      </div>
      <div>
        {selectedTeam.members.map((e) => (
          <div key={e.id}>
            <strong>Members :{e.name}</strong>
            <div>
              Role :
              {e.role.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </div>
            <div>
              Ticket Assigned :
              {e.ticketAssigned
                .filter((e) => e.quarter === selectedQuarter)
                .filter((e) => e.sprintNo === selectedSprint.sprintNo)
                .map((e) => (
                  <div key={e.ticketNumber}>
                    <span>{e.ticketNumber}</span>
                    <span>{e.ticketDescription}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Teams;
