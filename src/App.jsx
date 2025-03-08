import { useState } from "react";
import notificationsData from "./notifications.js";
import "./App.css";

// notificationsItem component to show each notification
// use children prop to show details
function NotificationItem({ children, clearOneNotifs }) {
  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      {children}
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={clearOneNotifs}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
