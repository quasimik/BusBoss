exports.getData = function(req, res){
  var list = {
    data: [
      {
        "email": "1@lol.com",
        "transport": "self"
      },
      {
        "email": "2@lol.com",
        "transport": "provide",
        "slots": 5,
        "confirmed": "false"
      },
      {
        "email": "3@lol.com",
        "transport": "need",
        "transportOptions": [
          "bus",
          "car"
        ],
        "confirmed": "false"
      },
      {
        "email": "4@lol.com",
        "transport": "need",
        "transportOptions": [
          "car"
        ],
        "confirmed": "false"
      }
    ]
  };

  res.send(list);
};