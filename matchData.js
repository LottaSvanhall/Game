/*var storage = '{"Players":[' +
  '{"score":"0","Name":"Player 2"},' +
  '{"score":"0","Name":"Player 4"},' +
  '{"score":"0","Name":"Player 1"}]}';

var obj = JSON.parse(storage);

obj['Players'].push({ "score": 13, "Name": "Player1" });
obj['Players'].push({ "score": 523, "Name": "Player2" });
obj['Players'].push({ "score": 3, "Name": "Player3" });
obj['Players'].push({ "score": 1235, "Name": "Player4" });

storage = JSON.stringify(obj);

var sortColumnScore = "score";

function SortByScore(x, y) {
  return ((x[sortColumnScore] == y[sortColumnScore]) ? 0 : ((x[sortColumnScore] < y[sortColumnScore]) ? 1 : -1));
}

obj.Players.sort(SortByScore);

for (var i = 0; i < 5; i++) {
  document.getElementById("s" + (i + 1)).innerHTML =
    obj.Players[i].score;
  document.getElementById("p" + (i + 1)).innerHTML =
    obj.Players[i].Name;
};*/