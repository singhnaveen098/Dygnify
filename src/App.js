import "./App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Persondetail from "./components/persondetail";
import Loandetail from "./components/loandetail";
import Businessdetail from "./components/businessdetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [value, setValue] = useState("1");
  const [persondetails, setpersondetails] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    age: "",
    address: "",
    pincode: "",
    state: "",
  });
  const [loandetails, setloandetails] = useState({
    loanamount: "",
    interestrate: "",
    loantenure: "",
    loanpurpose: "",
  });
  const [businessdetails, setbusinessdetails] = useState({
    companyname: "",
    gstno: "",
    companyphone: "",
    businesstype: "",
    companyaddress: "",
    companypincode: "",
    companystate: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue((parseInt(value) + 1).toString());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleSave = async () => {
    try {
      const bodydata = { ...persondetails, ...businessdetails, ...loandetails };
      const response = await fetch(`/api/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodydata),
      });
      const userdata = await response.json();
      if (userdata.success) {
        toast.success("User data successfully added to database", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setValue("1");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setpersondetails({
          firstname: "",
          lastname: "",
          phone: "",
          age: "",
          address: "",
          pincode: "",
          state: "",
        });
        setloandetails({
          loanamount: "",
          interestrate: "",
          loantenure: "",
          loanpurpose: "",
        });
        setbusinessdetails({
          companyname: "",
          gstno: "",
          companyphone: "",
          businesstype: "",
          companyaddress: "",
          companypincode: "",
          companystate: "",
        });
      } else {
        toast.error("Internal server error", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Internal server error", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="text-center drop-shadow-2xl font-bold text-3xl sm:text-4xl xl:text-5xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
        Loan Application Form
      </h1>
      <div className="m-4 px-4 py-8 border-2 shadow-2xl rounded-md">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              maxWidth: "100%",
              bgcolor: "background.paper",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                label="Item One"
                value="1"
                sx={{
                  border: 1,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottom: 0,
                }}
              />
              <Tab
                label="Item Two"
                value="2"
                sx={{
                  border: 1,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottom: 0,
                }}
              />
              <Tab
                label="Item Three"
                value="3"
                sx={{
                  border: 1,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottom: 0,
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value="1">
            <Persondetail
              handleNext={handleNext}
              setpersondetails={setpersondetails}
              persondetails={persondetails}
            />
          </TabPanel>
          <TabPanel value="2">
            <Businessdetail
              handleNext={handleNext}
              setbusinessdetails={setbusinessdetails}
              businessdetails={businessdetails}
            />
          </TabPanel>
          <TabPanel value="3">
            <Loandetail
              handleSave={handleSave}
              setloandetails={setloandetails}
              loandetails={loandetails}
            />
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
}

export default App;
