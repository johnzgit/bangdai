// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
AV.Cloud.define("getNeeds", function (request, response) {
    var query = new AV.Query("Needs");
    query.equalTo("par",request.params.par)
});
