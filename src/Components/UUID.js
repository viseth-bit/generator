import { useState } from "react";

function UUID() {
  const [uuIds, setUuIds] = useState([]);

  const [amountOfUuIdsToGenerate, setAmountOfUuIdsToGenerate] = useState(1);
  return (
    <div>
    <div
      className=" input-group col-md-5 text-right"
      style={{ paddingLeft: "50px" }}
    >
      <div className="input-group">
        <h3>Generate UUID</h3>
      </div>
      <input
        className="form-control"
        value={amountOfUuIdsToGenerate}
        onChange={(e) => {
          setAmountOfUuIdsToGenerate(e.target.value);
          setUuIds([]);
        }}
        type="number"
      />
      <button
        style={{ paddingLeft: "25px", paddingRight: "25px" }}
        className="btn btn-light"
        onClick={() => {
          let nextUuIds = [];
          for (let i = 0; i < amountOfUuIdsToGenerate; i++) {
            nextUuIds.push(crypto.randomUUID());
          }
          setUuIds(nextUuIds);
        }}
      >
        {"       "}
        Generate{"      "}
      </button>
    </div>


            {uuIds && (
              <div style={{ padding: "50px" }}>
                <table className="table col-md-4">
                  {uuIds.map((uuId, index) => {
                    return (
                      <tr>
                        <td>{index + 1} </td>
                        <td>{uuId}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}
    </div>
    
  );
  
}
export default UUID;
