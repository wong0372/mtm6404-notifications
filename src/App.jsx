import { useState } from "react";
import notificationsData from "./notifications.js";
import "./App.css";

// add notificationsItem component to show each notification
// use children prop to show details.
function NotificationItem({ children, clearOneNotification }) {
  return (
    <div className="bg-light border border-secondary-subtle list-group-item d-flex justify-content-between align-items-center p-3 mb-3 rounded-2">
      {children}
      <button
        className="btn btn-sm btn-outline-success fw-semibold"
        onClick={clearOneNotification}
      >
        Clear
      </button>
    </div>
  );
}

// set state to hold the notificationsData
function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  // add function to remove all notifs at once
  const removeAllNotification = () => {
    setNotifications([]);
  };

  // add function to remove one based on its id
  const removeOneNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="container">
      <div className="position-relative d-flex justify-content-between align-items-center mb-2">
        <h1>Notifications</h1>

        {/* show number of notifications*/}
        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger fs-5">
          {notifications.length}
        </span>

        {/* clear all button if still have notification */}
        {notifications.length > 0 && (
          <button
            className="btn btn-success fw-bold"
            onClick={removeAllNotification}
          >
            Clear All Notification
          </button>
        )}
      </div>

      {/* check if there are no notifications */}
      {notifications.length === 0 ? (
        // show msg if the list is empty
        <div className="fw-bold m-3 fs-5 text-decoration-underline">
          All clear
        </div>
      ) : (
        // display in a list if have notification
        // loop through notification and display each one
        <div className="list-group">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              clearOneNotification={() =>
                removeOneNotification(notification.id)
              }
            >
              <div>
                <h5 className="d-flex justify-content-start">
                  {notification.name}
                </h5>
                <p className="text-dark mb-0 text-dark mb-0 text-start">
                  {notification.message}
                </p>
              </div>
            </NotificationItem>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
