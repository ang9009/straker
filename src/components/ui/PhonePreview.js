import "./PhonePreview.css";
import iphone from "../../assets/iphone_frame.png";
import screenshot from "../../assets/screenshot.png";
import battery from "../../assets/battery.svg";
import cellsignal from "../../assets/cellsignal.svg";
import { FiChevronLeft } from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import RouteMap from "../form/RouteMap";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import Skeleton from "react-loading-skeleton";
import ChangeView from "../form/ChangeView";
import dayjs from "dayjs";

const PhonePreview = ({
  profileData,
  selectedStartLocation,
  setSelectedStartLocation,
  selectedEndLocation,
  setSelectedEndLocation,
  dateTimeValue,
  dateTimeOnChange,
  location,
  setLocation,
  distance,
  setDistance,
  elevationGain,
  setElevationGain,
  timeValue,
  timeOnChange,
  caloriesBurned,
  setCaloriesBurned,
  heartRate,
  setHeartRate,
  pace,
  setPace,
  profileHandleChange,
  polyline,
  setPolyline,
  zoomCenter,
  setZoomCenter,
}) => {
  return (
    <div id="phone-container">
      <img id="iphone-frame" src={iphone} />
      <img src={screenshot} alt="" id="screenshot" />
      <div id="phone-screen-container">
        <div id="phone-status-bar">
          <div id="time">1:48</div>
          <div id="status-icons">
            <img src={cellsignal} alt="" id="cell-signal-icon" />
            <img src={battery} alt="" id="battery-icon" />
          </div>
        </div>
        <div id="phone-top-nav">
          <div id="feed-btn">
            <FiChevronLeft size={"27px"} />
            <p>Feed</p>
          </div>
          <div id="run-text">Run</div>
          <PiDotsThreeOutlineLight id={"three-dots"} size={"18px"} />
        </div>
        <div id="run-info-container">
          <div className="user-info">
            <img src={profileData.profileImg} alt="" id="screen-profile-img" />
            <div className="name-and-date">
              <h1>
                {profileData.name.length === 0 ? "John Doe" : profileData.name}
              </h1>
              <span>
                <GiRunningShoe
                  size={"10px"}
                  color={"var(--inputPlaceholderColor)"}
                />
                <p id="date">{`${dateTimeValue.getDate()}-${dateTimeValue.getMonth()}-${dateTimeValue.getFullYear()} at ${dateTimeValue
                  .toLocaleTimeString()
                  .substring(0, 5)}`}</p>
              </span>
            </div>
          </div>
          <h1 id="run-title">
            {profileData.title.length === 0
              ? "Untitled run"
              : profileData.title}
          </h1>
          {zoomCenter ? (
            <MapContainer
              zoom={12}
              zoomSnap={0.5}
              center={zoomCenter.center}
              scrollWheelZoom={false}
              id={"phonepreview-map"}
              zoomControl={false}
              dragging={false}
            >
              <Polyline
                pathOptions={{ color: "#FC5201" }}
                positions={polyline}
              />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap={true}
              />
              <ChangeView
                center={zoomCenter.center}
                zoom={zoomCenter.zoom - 1}
              />
            </MapContainer>
          ) : (
            <Skeleton
              style={{
                width: "calc(100% + 24px)",
                height: "191px",
                transform: "translateX(-12px)",
                marginTop: "10px",
              }}
            />
          )}
          <div id="run-data-grid">
            <div>
              <p className="run-data-title">Distance</p>
              <p className="run-data-number">
                {distance.length === 0 ? "NaN" : `${distance}km`}
              </p>
            </div>
            <div>
              <p className="run-data-title">Avg Pace</p>
              <p className="run-data-number">
                {pace.length === 0 ? "NaN" : `${pace} /km`}
              </p>
            </div>
            <div>
              <p className="run-data-title">Moving time</p>
              <p className="run-data-number">
                {timeValue === 0
                  ? "NaN"
                  : `${dayjs(timeValue).get("hour")}:${dayjs(timeValue).get(
                      "minute"
                    )}:${dayjs(timeValue).get("second")}`}
              </p>
            </div>
            <div>
              <p className="run-data-title">Distance</p>
              <p className="run-data-number">6.28km</p>
            </div>
            <div>
              <p className="run-data-title">Calories</p>
              <p className="run-data-number">
                {caloriesBurned.length === 0 ? "NaN" : `${caloriesBurned} Cal`}
              </p>
            </div>
            <div>
              <p className="run-data-title">Avg Heart Rate</p>
              <p className="run-data-number">
                {heartRate.length === 0 ? "NaN" : `${heartRate} bpm`}
              </p>
            </div>
          </div>
          <div id="view-analysis-btn">View Analysis</div>
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;
