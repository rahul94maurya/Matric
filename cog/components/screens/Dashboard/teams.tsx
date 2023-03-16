import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";

const Teams = function () {
  const location = useLocation();
  const teamName = location.state.teamName;
  const teams = useAppSelector((state) => state.teams.teams);

  const [selectedTeam] = teams.filter((e) => e.teamName === teamName);

  console.log("location", selectedTeam);
  return (
    <>
      <div>
        <div>
          <div>select Quarter : </div>
        </div>
        <div>
          <div>select sprint : </div>
        </div>
        <div>
          <div>start date : </div>
        </div>
        <div>due date : </div>
      </div>
    </>
  );
};
export default Teams;
