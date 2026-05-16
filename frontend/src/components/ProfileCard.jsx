import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          borderRadius: "18px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <img
          src={user.profilePicture}
          alt=""
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <h2>
          {user.firstName} {user.lastName}
        </h2>

        <p
          style={{
            color: "gray",
            marginTop: "10px",
          }}
        >
          {user.email}
        </p>

        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#0A66C2",
            color: "white",
            borderRadius: "10px",
          }}
        >
          LinkedIn Authenticated
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;