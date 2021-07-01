var request = require("request");

var base_url = "http://localhost:3000/"

describe("Hello World Server", function() {
var server;
    beforeAll(function() {
server=require("../app")
    })

    afterAll(function() {
      server.close()
    })
    describe("GET /", function() {
      var data={};
      beforeAll(function(done) {
        request.get(base_url, function(error, response, body) {
          data.status=response.statusCode;
          data.body=body;
          done();
      });

      })
      it("returns status code 200", function() {
        
            expect( data.status).toBe(200);
           
      
      });

      it("returns Hello World", function() {
          expect(data.body).toBe("Hello World");
      
      });
    });
  });