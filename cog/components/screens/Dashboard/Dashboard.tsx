import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";

const Dashboard = () => {
  const teams = useAppSelector((state) => state.teams.teams);
  const navigate = useNavigate();

  const clickHandler = function (team: any) {
    navigate("/teams", { state: { teamName: team } });
  };
  // const dispatch = useDispatch();

  return (
    <>
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
