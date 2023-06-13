const loginCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth');
    } else {
        next();
    }
}

const homePageRedirect = (req, res) => {
    res.status(200).render("index", {
        username: req.user.name,
    });
};

const getAuthPage = (req, res) => {
    res.status(200).render("auth", {
        error: false,
    });
};

const successAuth = (req, res) => {
    res.redirect("/");
}

const errorAuth = (req, res) => {
    res.redirect("/auth", {
        error: true,
    });
}

const logoutHandler = (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
};

const authController = {
    loginCheck,
    homePageRedirect,
    getAuthPage,
    successAuth,
    errorAuth,
    logoutHandler,
};
  
module.exports = authController;