import { useState } from "react";
function TimeStamp() {
  const [timestampInteger, setTimestampInteger] = useState(0);
  return (
    <div >
      <div className="col-md-5 text-left" style={{ paddingLeft: "50px" }}>
        <h3>Convert TimeStamp</h3>
        <input
          style={{ padding: "30px" }}
          className="form-control"
          onChange={(e) => {
            setTimestampInteger(e.target.value);
          }}
          type="number"
        />
      </div>

      {timestampInteger > 0 && (
        <div style={{ padding: "50px", }}>
        <h3>
          {timestampInteger} {"    "}
          {new Date(timestampInteger * 1000).toString()}
        </h3>
        </div>
      )}
    </div>
  );
}

export default TimeStamp;
