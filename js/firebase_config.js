// ---------------------------------------------------------------------------------------------------- POVEZIVANJE NA BAZU

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
};
firebase.initializeApp(config);

var oDb = firebase.database();
var oDbHoteli = oDb.ref("hoteli");

var oDbUsers = oDb.ref("users");
var Users = [];

var oDbBoravak = oDb.ref("boravak");

$(document).ready(function () {
  $(this).scrollTop(0);

  oDbUsers.on("value", function (oOdgovorPosluzitelja) {
    Users = [];
    oOdgovorPosluzitelja.forEach(function (oUserSnapshot) {
      var sUserKey = oUserSnapshot.key;
      var oUser = oUserSnapshot.val();
      Users.push({
        userORadmin: oUser.userORadmin,
        username: oUser.username,
        email: oUser.email,
        password: oUser.password,
      });
    });
    console.log(Users);
  });
});
