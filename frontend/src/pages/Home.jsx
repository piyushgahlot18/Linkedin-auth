const Home = () => {
  const linkedinLogin = () => {
    const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;

    const redirectUri =
      import.meta.env.VITE_LINKEDIN_REDIRECT_URI;

    const scope = "openid profile email";

    const state = "linkedin_auth_state";

    const linkedinAuthURL =
      `https://www.linkedin.com/oauth/v2/authorization` +
      `?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scope}` +
      `&state=${state}`;

    window.location.href = linkedinAuthURL;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <button
        onClick={linkedinLogin}
        style={{
          padding: "14px 28px",
          border: "none",
          borderRadius: "8px",
          background: "#0A66C2",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Sign In with LinkedIn
      </button>
    </div>
  );
};

export default Home;