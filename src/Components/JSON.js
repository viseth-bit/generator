import { useState } from "react";
import ReactJson from "react-json-view";

function JSON() {
  const [jsonObject, setJsonObject] = useState(undefined);
  return (
    <div>
      <div style={{ paddingLeft: "50px" }}>
        <h3>Click the Button to Clipboard</h3>
        <button
          className="btn btn-light "
          onClick={async () => {
            try {
              let clipboard = await navigator.clipboard.readText();
              console.info("clipboard", clipboard);
              let json = JSON.parse(clipboard);
              setJsonObject(json);
            } catch {
              console.error("not json");
              setJsonObject(undefined);
            }
          }}
        >
          {" "}
          Clipboard{" "}
        </button>
      </div>

      {jsonObject && (
        <ReactJson
          collapsed={1}
          indentWidth={1}
          theme="monokai"
          className="jsonObjectContainer"
          src={jsonObject}
        />
      )}
    </div>
  );
}
export default JSON;
