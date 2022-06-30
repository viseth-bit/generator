import "./App.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineIdcard } from "react-icons/ai";
import { FaJsfiddle } from "react-icons/fa";
import { BsFillFileEarmarkBinaryFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdEnhancedEncryption } from "react-icons/md";
import { Menu, MenuItem, ProSidebar, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
/*
import TimeStamp from "./Components/TimeStamp";
import Encrypt from "./Components/Encrypt";
import Base64 from "./Components/Base64";
import UUID from "./Components/UUID";
import JSON from "./Components/JSON"; 
*/
function App() {
  const SideNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);

    // added styles
  
    const onClickMenuIcon = () => {
      setCollapsed(!collapsed);
    };

    return (
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <SidebarHeader style={{ padding: "15px", paddingRight: "20px" }}>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem
            icon={<FaJsfiddle />}
            onClick={() => {
              setCurrentlyViewing("json");
            }}
          >
            {" "}
            JSON
          </MenuItem>
          <MenuItem
            icon={<BsFillFileEarmarkBinaryFill />}
            onClick={() => {
              setCurrentlyViewing("base64");
            }}
          >
            Base64
          </MenuItem>
          <MenuItem
            icon={<AiOutlineIdcard />}
            onClick={() => {
              setCurrentlyViewing("uuid");
            }}
          >
            UUID
          </MenuItem>
          <MenuItem
            icon={<BiTimeFive />}
            onClick={() => {
              setCurrentlyViewing("timestamp");
            }}
          >
            TimeStamp
          </MenuItem>
          <MenuItem
            icon={<MdEnhancedEncryption />}
            onClick={() => {
              setCurrentlyViewing("bcrypt");
            }}
          >
            Bcrypt
          </MenuItem>
        </Menu>
      </ProSidebar>
    );
  };

  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      width: "100%",
    },
  };
  const [setCurrentlyViewing] = useState("");
  
  

  return (
    <div className="App">
      <div style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div style={styles.contentMargin}>
          <th style={{ paddingTop: "10px", paddingLeft: "50px" }}>
            <h1>Generate UUID,TimeStamp,UF8 {"<=>"} Base64, Bcrypt </h1>
          </th>

          {/*"Show JSON"
          {currentlyViewing === "json" && (
           <JSON/>
          )}*/}

          {/*"Show UUID"
          {currentlyViewing === "uuid" && (
           <UUID/>
          )}*/}

          {/*"Show Base64"
          {currentlyViewing === "base64" && (
           <Base64/>
          )}*/}

          {/*"Show timestamp"
          {currentlyViewing === "timestamp" && (
           <TimeStamp/>
          )}*/}

          {/*"Show Bcrypt"
          {currentlyViewing === "bcrypt" && (
          <Encrypt/>
          )}*/}

        </div>
      </div>
    </div>
  );
}

export default App;
