const getDashboard = async (req, res) => {
  try {
    res.status(200).json({
      message: "Dashboard Access Granted",
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};