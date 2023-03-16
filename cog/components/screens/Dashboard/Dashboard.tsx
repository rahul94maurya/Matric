import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../redux/reducer/userSlice";
import { useAppSelector } from "../../../redux/store";

const Dashboard = () => {
  const user = useAppSelector((state) => state.user.users);
  const teams = useAppSelector((state) => state.teams.teams);
  const teamName = teams.map((e) => e.teamName);
  const navigate = useNavigate();
  const clickHandler = function (team: any) {
    navigate("/teams", { state: { teamName: team } });
  };
  console.log("teams", teamName);
  const dispatch = useDispatch();

  return (
    <>
      <div>dashboard</div>
      <div className="col">
        <div className="row mt-3">
          {teams.map((e) => (
            <div
              className="col-lg-3 "
              key={e.id}
              onClick={() => clickHandler(e.teamName)}
            >
              <div className="card card-hover">
                <div>
                  Team Name : <span>{e.teamName}</span>
                </div>
                <div>
                  Total Member <span>{e.members.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
