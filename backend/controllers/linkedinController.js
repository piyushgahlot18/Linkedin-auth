const axios = require("axios");

exports.linkedinAuth = async (req, res) => {
  try {
    const { code } = req.body;

    // Exchange code for access token

    const tokenResponse = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      }).toString(),
      {
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken =
      tokenResponse.data.access_token;

    // Fetch user profile

    const userResponse = await axios.get(
      "https://api.linkedin.com/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const linkedinUser = userResponse.data;

    const userData = {
      firstName: linkedinUser.given_name,
      lastName: linkedinUser.family_name,
      email: linkedinUser.email,
      profilePicture: linkedinUser.picture,
      linkedinId: linkedinUser.sub,
    };

    res.status(200).json({
      success: true,
      user: userData,
    });
  } catch (error) {
    console.log(error.response?.data || error);

    res.status(500).json({
      success: false,
      message: "LinkedIn authentication failed",
    });
  }
};