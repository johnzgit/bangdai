/// <reference path="https://cn.avoscloud.com/scripts/lib/av-0.3.1.min.js" />
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:

AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
AV.Cloud.define("getNeeds", function (request, response) {
    var needs = new AV.Query("Needs");
    query.equalTo("par", request.params.par)
    query.find({
        success: function (results) {
            var sum = 0;
            for (var i = 0; i < results.length; ++i) {
                sum += results[i].get("content");
            }
            response.success(sum);
        },
        error: function () {
            response.error("error!");
        }
    });
});
AV.Cloud.define("getNeeds", function (request, response) {
    var query = new AV.Query("Needs");
    query.find({
        success: function (results) {
            response.success(results);
        },
        error: function(error){
            response.error(error.message);
        }
    });
});
