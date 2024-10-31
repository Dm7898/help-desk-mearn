const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Set user data for the request
    console.log("Authenticated user:", req.user); // Log for troubleshooting
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};
const authorize = (roles) => (req, res, next) => {
  console.log("User role:", req.user.role); // Log to verify role
  if (!roles.includes(req.user.role)) {
    return res
      .status(403)
      .json({ message: "Access forbidden: insufficient permissions" });
  }
  next();
};

module.exports = { authenticate, authorize };
