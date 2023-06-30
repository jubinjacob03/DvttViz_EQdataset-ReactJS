import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";
import logo from "./assets/7361940.jpg";
import logo2 from "./assets/3356.jpg";
import logo3 from "./assets/18303681.jpg";
import headerimg from "./assets/beforeafter-neighborhood_before.jpg";
import aboutimg from "./assets/3355.jpg";
import DvttDashbord from "./Components/DvttDashbord";
import Sheet3 from "./Components/Sheet3";
import Sheet4 from "./Components/Sheet4";
import Sheet5 from "./Components/Sheet5";
import Sheet7 from "./Components/Sheet7";
import Sheet2 from "./Components/Sheet2";
import Sheet6 from "./Components/Sheet6";
import Sheet8 from "./Components/Sheet8";

function App() {
  const [posts] = useState([
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Earthquake">
          <div
            className="link-button9"
            style={{
              paddingLeft: 50,
              paddingRight: 70,
              paddingTop: 15,
              paddingBottom: 15,
            }}
          >
            WHAT IS AN EARTHQUAKE ?
          </div>
        </a>
      ),
      message: (
        <p>
          An earthquake is a term used to describe both a sudden slip on a fault
          and the resulting ground shaking and radiated seismic energy caused by
          the slip, or by volcanic or magmatic activity, or other sudden stress
          changes in the earth. (U.S. Geological Survey) Worldwide, more than
          one million earthquakes occur each year, or an average of two a
          minute. A major earthquake in an urban area is one of the worst
          natural disasters that can occur. During the last four decades
          (1970-2017), earthquakes have been responsible for over a million
          deaths around the world in Armenia, China, Ecuador, Guatemala, Haiti,
          Iran, India, Indonesia, Japan, Mexico, Pakistan, Peru, and Turkey.
          <br />
          <br />
          Excessive urbanization in various seismically active parts of the
          world has led to megacities with population densities of 20,000 to
          60,000 inhabitants per square kilometer. Such cities are highly
          vulnerable to earthquake hazards, which include high case fatality
          rates for trauma, asphyxiation, hypothermia, and acute respiratory
          insufficiency, in addition to fractures and other injuries caused by
          the destruction of infrastructure.
        </p>
      ),
    },
    {
      title: (
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S036083522200417X">
          <div
            className="link-button10"
            style={{
              paddingLeft: 50,
              paddingRight: 70,
              paddingTop: 15,
              paddingBottom: 15,
              fontFamily: "arial",
            }}
          >
            WHY WE NEED DATA ANALYSIS ON EARTHQUAKE ?
          </div>
        </a>
      ),
      message: (
        <p>
          <img
            src={aboutimg}
            className="App-logo"
            alt="logo"
            style={{
              width: 660,
              height: 304,
              float: "left",
            }}
          />
          <br />
          Using Data Analysis to understand earthquakes and their effects is of
          vital importance to the Nation. As the population increases, expanding
          urban development and construction works encroach upon areas
          susceptible to earthquakes. With a greater understanding of the causes
          and effects of earthquakes and how they impact buildings,
          infrastructure, and society itself, we may be able to reduce damage
          and loss of life from this destructive phenomenon. Progress will be
          slow, excruciatingly so at times, but given the extent to which
          resilience can benefit communities beyond just the earthquake threat,
          it is progress worth striving toward.
        </p>
      ),
    },
    {
      title: (
        <a href="https://docs.google.com/spreadsheets/d/1-G00hXG8lMum-oLDgkdwdi9PdQDTOGCM/edit?usp=drive_link&ouid=104259184503723678661&rtpof=true&sd=true">
          <div
            className="link-button11"
            style={{
              paddingLeft: 50,
              paddingRight: 70,
              paddingTop: 15,
              paddingBottom: 15,
              fontFamily: "arial",
            }}
          >
            ABOUT THE DATASET
          </div>
        </a>
      ),
      message: (
        <p>
          <br />
          <h3>Earthquake Dataset</h3>
          17 columns x 8314 rows
          <br />
          <hr />
          <h4>time:</h4> Both date and time in ISD as primary report.
          <br />
          <hr />
          <h4>Date:</h4> Date of Earthquake occurance.
          <br />
          <hr />
          <h4>Time:</h4> Time of occurance.
          <br />
          <hr />
          <h4>latitude:</h4> Latitude of earthquake center.
          <br />
          <hr />
          <h4>longitude:</h4> Longitude of earthquake center.
          <br />
          <hr />
          <h4>depth:</h4> The depth where the earthquake begins to rupture.
          <br />
          <hr />
          <h4>mag:</h4> Indicate the size of an earthquake. It is a logarithmic
          measure of earthquake size.
          <br />
          <hr />
          <h4>magType:</h4> Type of maginitude classification based on different
          scale or terrain.
          <br />
          <br /> <i>null</i> - No value
          <br />
          <br /> <i>mb</i> - Body-wave magnitude
          <br />
          <br /> <i>mj</i> - For shallow depth greater 60 km earthquakes within
          600 km in Japan
          <br />
          <br /> <i>ms</i> - Surface-wave magnitude scale
          <br />
          <br /> <i>mt</i> - Tsunami magnitude scale
          <br />
          <br /> <i>mw</i> - Moment magnitude scale
          <br />
          <br /> <i>mwb, mwc, mwp, mwr, mww,</i> - All subtypes of the generic
          mw scale
          <br />
          <br /> <i>uk</i> - Magnitude determined are unknown
          <br />
          <br />
          <hr />
          <h4>nst:</h4> Number of seismic stations which reported P- and
          S-arrival times for this earthquake.
          <br />
          <hr />
          <h4>gap:</h4> The largest azimuthal gap between azimuthally adjacent
          stations (in degrees).
          <br />
          <hr />
          <h4>dmin:</h4> Horizontal distance from the epicenter to the nearest
          station (in km).
          <br />
          <hr />
          <h4>rms:</h4> The root-mean-square (RMS) travel time residual, in sec,
          using all weights.
          <br />
          <hr />
          <h4>net:</h4> Network where data was reported to - us (United States),
          pde(Preliminary Determination of Epicenters), usb, usc, centennial,
          atlas.
          <br />
          <hr />
          <h4>id:</h4> Id of the reported cases.
          <br />
          <hr />
          <h4>updated:</h4> Both date and time in ISD as updated report.
          <br />
          <hr />
          <h4>place:</h4> Place of occurance.
          <br />
          <hr />
          <h4>type:</h4> Type of activity recorded.
        </p>
      ),
    },
  ]);

  const navigate = useNavigate();

  const navigateDash = () => {
    navigate("/Dashboard");
  };

  const navigateSheet1 = () => {
    navigate("/TotalEarthquakeByYear&type");
  };

  const navigateSheet2 = () => {
    navigate("/TotalEarthquakeByMonth&type");
  };

  const navigateSheet3 = () => {
    navigate("/MagnitudeHistogram");
  };

  const navigateSheet4 = () => {
    navigate("/DepthinKMHistogram");
  };

  const navigateSheet5 = () => {
    navigate("/RelationBtwdepth&maginitude");
  };

  const navigateSheet6 = () => {
    navigate("/EarthquakeByPlaces");
  };

  const navigateSheet7 = () => {
    navigate("/EarthquakewithtotalNST");
  };

  return (
    <div>
      <Navbar />
      <ul style={{ paddingTop: "30px" }}>
        <li style={{ paddingLeft: 55 }}>
          <h1
            style={{
              paddingLeft: 70,
              borderStyle: "solid",
              paddingRight: 70,
              paddingTop: 15,
              paddingBottom: 15,
            }}
          >
            DATA ANALYSIS - EARTHQUAKE DATASET
          </h1>
        </li>
        <li>
          <i> </i>
        </li>
        <li>
          <i> </i>
        </li>
        <li>
          <i> </i>
        </li>

        <li style={{ float: "right" }}>
          <img
            src={headerimg}
            className="App-logo"
            alt="logo"
            style={{
              width: 500,
              height: 304,
            }}
          />
        </li>
      </ul>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} message={post.message} />
        ))}
      </div>
      <center>
        <img
          src={logo3}
          className="App-logo"
          alt="logo"
          style={{ width: 550, height: 200 }}
        />

        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: 350, height: 150 }}
        />
        <img
          src={logo2}
          className="App-logo"
          alt="logo"
          style={{ width: 550, height: 200 }}
        />
      </center>
      <br />
      <div>
        <ul>
          <li>
            <i> </i>
          </li>
          <li>
            <button
              className="link-button1"
              type="button"
              onClick={navigateSheet3}
            >
              Magnitude Histogram
            </button>
          </li>
          <li>
            <button
              className="link-button2"
              type="button"
              onClick={navigateSheet4}
            >
              Depth in KM Histogram
            </button>
          </li>
          <li>
            <button
              className="link-button3"
              type="button"
              onClick={navigateSheet5}
            >
              Relation between Depth & Magnitude
            </button>
          </li>
          <li>
            <button
              className="link-button4"
              type="button"
              onClick={navigateSheet7}
            >
              Earthquake details with Total NST
            </button>
          </li>
          <li>
            <button
              className="link-button5"
              type="button"
              onClick={navigateSheet1}
            >
              Total Earthquake by year and type
            </button>
          </li>
          <li>
            <button
              className="link-button6"
              type="button"
              onClick={navigateSheet2}
            >
              Total Earthquake by month and type
            </button>
          </li>
          <li>
            <button
              className="link-button7"
              type="button"
              onClick={navigateSheet6}
            >
              Total Earthquake by places
            </button>
          </li>
          <li>
            <i> </i>
          </li>
          <li>
            <i> </i>
          </li>
          <li>
            <i> </i>
          </li>
          <li>
            <i> </i>
          </li>
          <li>
            <button
              className="link-button8"
              type="button"
              onClick={navigateDash}
            >
              Dashboard
            </button>
          </li>
          <li>
            <i> </i>
          </li>
        </ul>
        <br />
        <Routes>
          <Route path="/MagnitudeHistogram" element={<Sheet3 />} />
          <Route path="/DepthinKMHistogram" element={<Sheet4 />} />
          <Route path="/RelationBtwdepth&maginitude" element={<Sheet5 />} />
          <Route path="/EarthquakewithtotalNST" element={<Sheet7 />} />
          <Route path="/TotalEarthquakeByYear&type" element={<Sheet8 />} />
          <Route path="/TotalEarthquakeByMonth&type" element={<Sheet2 />} />
          <Route path="/EarthquakeByPlaces" element={<Sheet6 />} />
          <Route path="/Dashboard" element={<DvttDashbord />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
