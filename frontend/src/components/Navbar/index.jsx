import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router

import { Button, List, Text, Img } from "components";
import hospitalImage from "../../data/images/hospitalimage.jpeg";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "../../styles/home.module.css";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
// import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Buttonn from "@mui/material/Button";
// import Collapse from '@mui/material/Collapse';
// import ListItem from '@mui/material/ListItem';

import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StyledImage = styled(Img)({
  mixBlendMode: "lighten", // Change the blend mode here as per your requirement
});

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#1976d2", 0.15),
  "&:hover": {
    backgroundColor: alpha("#1976d2", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search..."
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

const AboutUsNavbar = ({ activePage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [widthdata, setWidthData] = useState(
    window.innerWidth > 768 ? true : false
  );

  const [insidedropdownOpen, insidesetDropdownOpen] = useState(false);

  const insideSetDropdownOpen = () => {
    insidesetDropdownOpen(!insidedropdownOpen);
  };

  const [open, setState] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
  };

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  const navigate = useNavigate();

  const isPageActive = (page) => {
    return page === activePage
      ? "text-white-A70 bg-blue-600 cursor-pointer"
      : "text-blue-800 font-semibold cursor-pointer";
  };

  const handleServiceChange = (service) => {
    navigate(`/${service}`);
  };

  return (
    <>
      {!widthdata ? (
        <>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#1976d2",
            }}
          >
            <Container maxWidth="lg" disableGutters={true}>
              <Toolbar>
                <Typography
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="h6"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Aryan Hospital
                </Typography>

                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  className={style.hum}
                  onClick={toggleDrawer(true)}
                  sx={{
                    mr: 2,
                    display: {
                      xs: "block",
                      md: "none",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>

                {/* The outside of the drawer */}
                <Drawer
                  //from which side the drawer slides in
                  anchor="right"
                  //if open is true --> drawer is shown
                  open={open}
                  //function that is called when the drawer should close
                  onClose={toggleDrawer(false)}
                  //function that is called when the drawer should open
                  onOpen={toggleDrawer(true)}
                >
                  {/* The inside of the drawer */}
                  <Box
                    sx={{
                      p: 2,
                      height: 1,
                      backgroundColor: "white",
                    }}
                  >
                    {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                    <IconButton sx={{ mb: 2 }}>
                      <CloseIcon onClick={toggleDrawer(false)} />
                    </IconButton>

                    <Divider sx={{ mb: 2 }} />

                    <Box sx={{ mb: 2 }}>
                      <ListItemButton href="/">
                        <ListItemIcon>
                          <HomeIcon sx={{ color: "#1976d2" }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItemButton>

                      <ListItemButton href="/aboutus">
                        <ListItemIcon>
                          <AddBoxIcon sx={{ color: "#1976d2" }} />
                        </ListItemIcon>
                        <ListItemText primary="About us" />
                      </ListItemButton>

                      <ListItemButton
                        onClick={() =>
                          insideSetDropdownOpen(!insidedropdownOpen)
                        }
                      >
                        <ListItemIcon>
                          <DescriptionIcon sx={{ color: "#1976d2" }} />
                        </ListItemIcon>

                        <ListItemText primary="Services" />
                      </ListItemButton>

                      {insidedropdownOpen ? (
                        <List>
                          <ListItemButton href="/Critical-Care">
                            <ListItemText primary="Critical Care" />
                          </ListItemButton>
                          <ListItemButton href="/Kidney-Dialysis">
                            <ListItemText primary="Kidney Dialysis" />
                          </ListItemButton>
                          <ListItemButton href="/Gynaecology">
                            <ListItemText primary="Gynaecology" />
                          </ListItemButton>
                          <ListItemButton href="/IVF-Treatment">
                            <ListItemText primary="IVF" />
                          </ListItemButton>
                          <ListItemButton href="/Pediatrics">
                            <ListItemText primary="Pediatrics" />
                          </ListItemButton>
                          <ListItemButton href="/Neurology">
                            <ListItemText primary="Neurology" />
                          </ListItemButton>
                          <ListItemButton href="/Laparoscopic-Surgery">
                            <ListItemText primary="Laparoscopic Surgery" />
                          </ListItemButton>
                          <ListItemButton href="/Orthopedics">
                            <ListItemText primary="Orthopedic" />
                          </ListItemButton>
                          <ListItemButton href="/Bariatric-Surgery">
                            <ListItemText primary="Bariatric Surgery" />
                          </ListItemButton>

                          <ListItemButton href="/Surgical-Oncology">
                            <ListItemText primary="Surgical Oncology" />
                          </ListItemButton>
                        </List>
                      ) : null}

                      <ListItemButton href="/doctors">
                        <ListItemIcon>
                          <MedicalServicesIcon sx={{ color: "#1976d2" }} />
                        </ListItemIcon>

                        <ListItemText primary="Doctors" />
                      </ListItemButton>

                      <ListItemButton href="/news">
                        <ListItemIcon>
                          <FolderIcon sx={{ color: "#1976d2" }} />
                        </ListItemIcon>

                        <ListItemText primary="Blogs" />
                      </ListItemButton>

                      <ListItemButton href="/contact">
                        <ListItemIcon>
                          <PersonIcon sx={{ color: "#1976d2" }} />
                        </ListItemIcon>

                        <ListItemText primary="Contact" />
                      </ListItemButton>

                      {/* {search} */}

                      <Buttonn
                        variant="contained"
                        sx={{ m: 1, width: 0.5 }}
                        onClick={() => {
                          window.location.replace("/appointment");
                        }}
                      >
                        Appointment
                      </Buttonn>
                      <Buttonn
                        variant="outlined"
                        sx={{ m: 1, width: 0.5 }}
                        onClick={() => {
                          window.location.replace("/login");
                        }}
                      >
                        Login
                      </Buttonn>
                    </Box>
                  </Box>
                </Drawer>
              </Toolbar>
            </Container>
          </AppBar>
        </>
      ) : (
        <>
          <div
            style={{ zIndex: "9999", background: "white" }}
            className={`flex sticky top-0 bottom-0 md:flex-col flex-row font-worksans md:gap-1  items-center justify-between max-w-[100vw] md:px-10 sm:px-5  py-[17px] w-full ${style.bar}`}
          >
            <Img
              style={{ width: "18%" }}
              src={hospitalImage}
              alt="Hospital Logo"
              onClick={() => {
                navigate("/");
              }}
            />

<div
              className={`flex z-1 sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full ${style.Nav}`}
            >
              <Link to="/">
                <Text
                  className={`${style.font} w-auto ${isPageActive("home")}`}
                  size="txtWorkSansRegular18"
                >
                  Home
                </Text>
              </Link>

              <Link to="/aboutus">
                <Text
                  className={`${style.font} w-18 ${isPageActive("aboutus")}`}
                  size={
                    activePage === "aboutus"
                      ? "txtWorkSansSemiBold18"
                      : "txtWorkSansRegular18"
                  }
                >
                  About Us
                </Text>
              </Link>

              <div className={style.dropdown}>
                <button
                  className={`${style.font2} w-auto  cursor-pointer appearance-none bg-transparent border-none outline-none flex items-center ${style.dropbtn}`}
                >
                  Specialities
                  <ArrowDropDownIcon />
                </button>

                <div className={style.dropdowncontent}>
                  <Link
                    to="/Critical-Care"
                    onClick={() => handleServiceChange("CriticalCare")}
                  >
                    Critical Care
                  </Link>
                  <Link to="/Kidney-Dialysis" onClick={() => handleServiceChange("kd")}>
                    Kidney Dialysis
                  </Link>
                  <Link
                    to="/Gynaecology"
                    onClick={() => handleServiceChange("gynaecology")}
                  >
                    Gynaecology & Obstetrics
                  </Link>
                  <Link to="/IVF-Treatment" onClick={() => handleServiceChange("ivf")}>
                    IVF Treatment
                  </Link>
                  <Link
                    to="/pediatrics"
                    onClick={() => handleServiceChange("pediatrics")}
                  >
                    Pediatrics
                  </Link>
                  <Link
                    to="/Neurology"
                    onClick={() => handleServiceChange("neurology")}
                  >
                    Neurology
                  </Link>
                  <Link
                    to="/Laparoscopic-Surgery"
                    onClick={() => handleServiceChange("lapaSurgery")}
                  >
                    Laparoscopic Surgery
                  </Link>
                  <Link
                    to="/Orthopedics"
                    onClick={() => handleServiceChange("ortho")}
                  >
                    Orthopedic
                  </Link>
                  <Link
                    to="/Bariatric-Surgery"
                    onClick={() => handleServiceChange("bSurgery")}
                  >
                    Bariatric Surgery
                  </Link>
                  <Link
                    to="/Surgical-Oncology"
                    onClick={() => handleServiceChange("sOnco")}
                  >
                    Surgical Oncology
                  </Link>
                </div>
              </div>
              <Link to="/doctors">
            <Text
              className={`${style.font} w-auto ${isPageActive("doctors")}`}
              size={
                activePage === "doctors"
                  ? "txtWorkSansSemiBold18"
                  : "txtWorkSansRegular18"
              }
            >
              Doctors
            </Text>
          </Link>

              <Link to="/news">
                <Text
                  className={`${style.font}  w-auto ${isPageActive("news")}`}
                  size={
                    activePage === "news"
                      ? "txtWorkSansSemiBold18"
                      : "txtWorkSansRegular18"
                  }
                >
                  Blogs
                </Text>
              </Link>

              <Link to="/contact">
                <Text
                  className={`${style.font} w-auto ${isPageActive("contact")}`}
                  size={
                    activePage === "contact"
                      ? "txtWorkSansSemiBold18"
                      : "txtWorkSansRegular18"
                  }
                >
                  Contact
                </Text>
              </Link>

              <Link to="/appointment">
                <Text
                  className={`${style.font} w-auto ${isPageActive(
                    "appointment"
                  )}`}
                  size={
                    activePage === "appointment"
                      ? "txtWorkSansSemiBold18"
                      : "txtWorkSansRegular18"
                  }
                >
                  Appointment
                </Text>
              </Link>

              <Link to="/login" target="blank">
                <Text
                  className={`${style.font} w-auto ${isPageActive("login")}`}
                  size={
                    activePage === "login"
                      ? "txtWorkSansSemiBold18"
                      : "txtWorkSansRegular18"
                  }
                >
                  Login
                </Text>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

AboutUsNavbar.defaultProps = {
  hometext: "Home",
  aboutustext: "Aboutus",
  servicestext: "Services",
  doctorstext: "Doctors",
  newstext: "News",
  contacttext: "Contact",
  appointmentbutton: "Appointment",
};

export default AboutUsNavbar;
