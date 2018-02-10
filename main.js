import $ from 'jquery';
import data from './script1';

$("#button1").click(function () {
    $("#content").text("I am button1");
    console.log("I am button1");
});

$("#button2").click(function () {
    console.log(data);
    $("#content").text("script1:" + data.data4);
});