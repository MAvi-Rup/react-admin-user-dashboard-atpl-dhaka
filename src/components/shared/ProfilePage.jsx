import { useContext } from "react";
import { AuthContext } from "../auth/authContext";

const ProfilePage = () => {
  const { userName, userPassword, userRole } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div>
        <p>
          <strong>Username:</strong> {userName}
        </p>
        <p>
          <strong>Password:</strong> {userPassword}
        </p>
        <p>
          <strong>Role:</strong> {userRole}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
