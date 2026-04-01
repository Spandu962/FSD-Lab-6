
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(Notification.permission);

  const enableNotification = async () => {
    const permission = await Notification.requestPermission();
    setStatus(permission);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Push Notification App</h1>

      <p>Status: {status}</p>

      {status !== "granted" && (
        <button onClick={enableNotification}>
          Enable Notifications
        </button>
      )}
    </div>
  );
}

export default App;