import * as express from 'express';
import * as DiscordStrategy from 'passport-discord';
import * as passport from 'passport';
import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const scopes = ['identify'];

passport.use(
  new DiscordStrategy(
    {
      clientID: '',
      clientSecret: '',
      callbackURL: 'http://localhost:3333/api/auth/discord/callback',
      scope: scopes,
    },
    function (accessToken, refreshToken, profile) {
      console.log(profile);
    }
  )
);

export const auth = express.Router();

auth.get('/auth/discord', passport.authenticate('discord'));
auth.get(
  '/auth/discord/callback',
  passport.authenticate('discord', {
    failureRedirect: '/',
  }),
  (req, res) => {
    console.log('Successfully logged in!');
    res.redirect('/secretstuff'); // Successful auth
  }
);
