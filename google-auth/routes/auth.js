const express = require("express");
const passport = require("passport");

const authController = require("../controllers/authController");

const authRouter = express.Router();


authRouter.get('/', authController.loginCheck, authController.homePageRedirect);

authRouter.get('/auth', authController.getAuthPage);

authRouter.get(
    "/passportAuth",
    passport.authenticate("google", {
      successRedirect: "/successAuth",
      failureRedirect: "/errorAuth",
      failureMessage: true,
    })
);

authRouter.get("/successAuth", authController.successAuth);

authRouter.get("/errorAuth", authController.errorAuth);

authRouter.get("/logout", authController.logoutHandler);

module.exports = authRouter;