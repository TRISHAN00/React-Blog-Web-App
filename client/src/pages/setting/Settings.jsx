import Layout from "../../components/layout/Layout";
import Sidebar from "../../sidebar/Sidebar";
import "./Settings.css";

function Settings() {
  return (
    <Layout>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Trishan" />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="trishansaha43@gmail.com"
            />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
            <button className="settingsSubmitButton ">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Settings;
