const User = require("../models/User");

exports.saveUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      profilePicture,
      
    } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        firstName,
        lastName,
        email,
        profilePicture,
       
      });
    }

    res.status(200).json({
      success: true,
      message: "User saved successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};