import "./PhonePreview.css";
import iphone from "../../assets/iphone_frame.png";
import battery from "../../assets/battery.svg";
import cellsignal from "../../assets/cellsignal.svg";
import { FiChevronLeft, FiSearch, FiUser } from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";
import { BsRecordCircle } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { PiDotsThreeOutlineLight, PiHouseFill } from "react-icons/pi";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import ChangeView from "../form/ChangeView";
import dayjs from "dayjs";
import { addLeadingZero } from "../../utils/addLeadingZero";

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
              <h1>{profileData.name ? profileData.name : "John Doe"}</h1>
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
                {distance ? `${distance}km` : "NaN"}
              </p>
            </div>
            <div>
              <p className="run-data-title">Avg Pace</p>
              <p className="run-data-number">{pace ? `${pace} /km` : "NaN"}</p>
            </div>
            <div>
              <p className="run-data-title">Moving time</p>
              <p className="run-data-number">
                {timeValue === 0
                  ? "NaN"
                  : `${addLeadingZero(
                      dayjs(timeValue).get("hour")
                    )}:${addLeadingZero(
                      dayjs(timeValue).get("minute")
                    )}:${addLeadingZero(dayjs(timeValue).get("second"))}`}
              </p>
            </div>
            <div>
              <p className="run-data-title">Elevation Gain</p>
              <p className="run-data-number">
                {elevationGain ? `${elevationGain}m` : "NaN"}
              </p>
            </div>
            <div>
              <p className="run-data-title">Calories</p>
              <p className="run-data-number">
                {caloriesBurned ? `${caloriesBurned} Cal` : "NaN"}
              </p>
            </div>
            <div>
              <p className="run-data-title">Avg Heart Rate</p>
              <p className="run-data-number">
                {heartRate ? `${heartRate} bpm` : "NaN"}
              </p>
            </div>
          </div>
          <div id="view-analysis-btn">View Analysis</div>
        </div>
        <div id="private-warning">
          <IoLockClosed size={"10px"} />{" "}
          <p>
            Only you can view this activity. It won't appear on segment<br></br>
            leaderboards and may not count towards some challenges.
          </p>
        </div>
        <nav id="screen-bottom-nav">
          <ul>
            <li>
              <PiHouseFill size={"22px"} />
              <p>Feed</p>
            </li>
            <li>
              <FiSearch size={"22px"} />
              <p>Explore</p>
            </li>
            <li>
              <BsRecordCircle size={"22px"} />
              <p>Explore</p>
            </li>
            <li>
              <FiUser size={"22px"} />
              <p>Profile</p>
            </li>
            <li>
              <TbCircleArrowUpRightFilled size={"22px"} />
              <p>Summit</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PhonePreview;
