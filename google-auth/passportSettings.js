const passport = require("passport");
const User = require("./models/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/passportAuth',
      clientID: '252384303726-5v92edcmfstmohp9o0ervgiicldfm2q6.apps.googleusercontent.com',
      clientSecret: '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',
      scope: ['profile'],
    },
    async (accessToken, refreshToken, profile, done) => {
        const user = await User.findOne({ googleID: profile.id });
        if (!user) {
            const newUser = new User({
                name: profile.displayName,
                googleID: profile.id,
            });
            
            await newUser.save();
        }

        return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, { id: user.id, name: user.name });
});

passport.deserializeUser((user, done) => {
    User.findById(user.id)
      .then((user) => {
        return done(null, user);
      })
});