import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

import ProfileCard from "../components/ProfileCard";

const LinkedInCallback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    linkedinLogin();
  }, []);

  const linkedinLogin = async () => {
    try {
      const params = new URLSearchParams(
        window.location.search
      );

      const code = params.get("code");

      // Send code to backend

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/linkedin`,
        {
          code,
        }
      );

      const userData = response.data.user;

      dispatch(setUser(userData));

      // Save user in database

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/save-user`,
        userData
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default LinkedInCallback;