const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result1 = num1 * num2;
    // res.send("the result of this calculation is: " + result1)

    var num3 = Number(req.body.n3);
    var num4 = Number(req.body.n4);
    var result2 = (num3 * num4)+result1;
    // res.send("the result of this calculation is: " + result2)

    var num5 = Number(req.body.n5);
    var num6 = Number(req.body.n6);
    var result3 = (num5 * num6)+result2;
    // res.send("the result of this calculation is: " + result2)

    var num7 = Number(req.body.n7)
    var num8 = Number(req.body.n8)
    var result4 = (num7 * num8)+result3;
    // res.send("the result of this calculation is: " + result2)

    var num9 = Number(req.body.n9);
    var num10 = Number(req.body.n10);
    var result5 = (num9 * num10)+result4;
    // res.send("the result of this calculation is: " + result2)

    var num11 = Number(req.body.n11);
    var num12 = Number(req.body.n12);
    var result6 = (num11 * num12)+result5;
    // res.send("the result of this calculation is: " + result2)

    var num13 = Number(req.body.n13);
    var num14 = Number(req.body.n14);
    var result7 = (num13 * num14)+result6;
    // res.send("the result of this calculation is: " + result2)

    var num15 = Number(req.body.n15);
    var num16 = Number(req.body.n16);
    var result8 = (num15 * num16)+result7;
    // res.send("the result of this calculation is: " + result2)

    var num17 = Number(req.body.n17);
    var num18 = Number(req.body.n18);
    var result9 = (num17 * num18)+result8;
    // res.send("the result of this calculation is: " + result2)

    var num19 = Number(req.body.n19);
    var num20 = Number(req.body.n20);
    var result10 = (num19 * num20)+result9;
    // res.send("the result of this calculation is: " + result2)

    var num21 = Number(req.body.n21);
    var num22 = Number(req.body.n22);
    var result11 = (num21 * num22)+result10;
    // res.send("the result of this calculation is: " + result2)

    var num23 = Number(req.body.n23);
    var num24 = Number(req.body.n24);
    var result12 = (num23 * num24)+
    result11;
    res.send("the result of this calculation is: " + result12)

})




app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");

});



app.listen(process.env.POST || 3000, function () {
    console.log("server running on 3000:");
});

