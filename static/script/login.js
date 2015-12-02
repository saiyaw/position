phantom.outputEncoding = "GBK";
var casper = new require('casper').create({
	verbose: true,
//	logLevel: "debug",
	viewportSize: {
		width: 1920,
		height: 1200
	}
});
var utils = require('utils');
var fs = require('fs');
var resourceDirectory = "d:/capture/";

var result = 0;

var bHaveImage = true;

//fs.removeTree(resourceDirectory);

var user = casper.cli.get("user") || "18217040285";
var password = casper.cli.get("password") || "wang123456";
var hosturl = "http://hd.hunteron.com";
var indexurl = "http://hd.hunteron.com/#/positions/plateform";

function saveimage(filename) {
	if (bHaveImage) {
		casper.capture(resourceDirectory + filename + '.png');
	}
}

casper.on("http.status.200", function(resource) {
	this.log(resource.url + " is OK", "INFO");
});

casper.on("http.status.301", function(resource) {
	this.log(resource.url + " is permanently redirected", "PARAMETER");
});

casper.on("http.status.302", function(resource) {
	this.log(resource.url + " is temporarily redirected", "PARAMETER");
});

casper.on("http.status.404", function(resource) {
	this.log(resource.url + " is not found", "COMMENT");
});

casper.on("http.status.500", function(resource) {
	this.log(resource.url + " is in error", "ERROR");
});

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

casper.start(hosturl, function() {

	this.echo("open the home page.")
});

casper.thenOpenAndEvaluate(hosturl, function(){
	var f = document.querySelector('form');
	f.querySelector('input[name=email]').value=user;
	f.querySelector('input[name=password]').value=password;
	f.submit();

});

casper.then(function() {

	if (this.getCurrentUrl() != indexurl){
		saveimage("failed_in_index_page");
	}else{
		this.echo("open the first page.")
	}

});

casper.run(function() {
//	this.debugPage();
	this.exit(result);
});