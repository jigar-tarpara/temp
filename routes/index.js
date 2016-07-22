var express = require('express');
var router = express.Router();

router.post('/auth',
  function(req, res) {
    // Successful authentication
    console.log("api called with provider: ", req.body.provider);
    if(req.body.provider == "github"){
      console.log("github called");
      appConfig = {
        consumerKey : "c02167f12cc1ec6cf4ab",
        consumerSecret: "2b16337e76535950b34b3409551e0e8ed4dcf792",
        callbackURL: "https://gluu.local.org:8000/auth/github/callback",
        provider: "github"
      }
    }
    else if(req.body.provider == "linkedin"){
      console.log("linkedin called");
      appConfig = {
        consumerKey : "7719rof6v75s4g",
        consumerSecret: "fM4ACEGDCVaYdNfg",
        callbackURL: "https://gluu.local.org:8000/auth/linkedin/callback",
        provider: "linkedin"
      }
    }
    else if(req.body.provider == "twitter"){
      console.log("twitter called");
      appConfig = {
        consumerKey : "iObC2FyT9385PweLYRXMoGvrF",
        consumerSecret: "ROgNGXq1k6fAY9sWFI0hyEGYHHiwbzEk11Lkjs3Pc7LZFID8Cp",
        callbackURL: "https://gluu.local.org:8000/auth/twitter/callback",
        provider: "twitter"
      }
    }
    else if(req.body.provider == "facebook"){
      console.log("facebook called");
      appConfig = {
        consumerKey : "1082456341840678",
        consumerSecret: "1790a63ec214dc086feec3be2a2e0b82",
        callbackURL: "https://gluu.local.org:8000/auth/facebook/callback",
        provider: "facebook"
      }
    }
    else if(req.body.provider == "tumblr"){
      console.log("tumblr called");
      appConfig = {
        consumerKey : "VlgkvmTCPPA1iwvoi5Ey5Py5y4odGruJV6SH17SjuPBcvNYtvS",
        consumerSecret: "BS9AsDtIdp8ZfSrxy5nxxOMpBIcExqTK1xdZH5xAu4FCuqbQKW",
        callbackURL: "https://gluu.local.org:8000/auth/tumblr/callback",
        provider: "tumblr"
      }
    }
    else if(req.body.provider == "yahoo"){
      console.log("yahoo called");
      appConfig = {
        consumerKey : "dj0yJmk9b3dxclZZRjJmRUd6JmQ9WVdrOVlUazFjMlEyTTJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD02ZQ--",
        consumerSecret: "687a455a0113946b1ace73bfcc2b73aa6843583b",
        callbackURL: "https://gluu.local.org:8000/auth/yahoo/callback",
        provider: "yahoo"
      }
    }
    else if(req.body.provider == "google"){
      console.log("Google called");
      appConfig = {
        consumerKey : "647477869720-aqddeqaenq7q6v233fa49inijtpohapo.apps.googleusercontent.com",
        consumerSecret: "pWGwtlPVtpahKyi4ZYJtWF2s",
        callbackURL: "https://gluu.local.org:8000/auth/google/callback",
        provider: "google"
      }
    }
    else if(req.body.provider == "windowslive"){
      console.log("Windows Live called");
      appConfig = {
        consumerKey : "647477869720-aqddeqaenq7q6v233fa49inijtpohapo.apps.googleusercontent.com",
        consumerSecret: "pWGwtlPVtpahKyi4ZYJtWF2s",
        callbackURL: "https://gluu.local.org:8000/auth/windowslive/callback",
        provider: "windowslive"
      }
    }
    else if(req.body.provider == "dropbox"){
      console.log("dropbox called");
      appConfig = {
        consumerKey : "647477869720-aqddeqaenq7q6v233fa49inijtpohapo.apps.googleusercontent.com",
        consumerSecret: "pWGwtlPVtpahKyi4ZYJtWF2s",
        callbackURL: "https://gluu.local.org:8000/auth/dropbox/callback",
        provider: "dropbox"
      }
    }
    else{
      appConfig = {
        consumerKey : "iObC2FyT9385PweLYRXMoGvrF",
        consumerSecret: "ROgNGXq1k6fAY9sWFI0hyEGYHHiwbzEk11Lkjs3Pc7LZFID8Cp",
        callbackURL: "https://gluu.local.org:8000/auth/twitter/callback",
        provider: "linkedin"
      };
    }
    console.log("Credentials for : ",req.body.provider);
    console.log("Details: ", appConfig);
    res.json(appConfig);
  });

module.exports = router;
