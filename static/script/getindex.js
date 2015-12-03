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

var links_java = [
	'http://hd.hunteron.com/#/positions/plateform?start=0&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=15&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=30&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=45&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=60&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=75&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=90&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=105&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=120&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=135&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=150&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=165&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=180&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=195&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=210&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=225&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=240&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=255&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=270&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=285&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=300&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=315&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=330&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=345&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=360&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=375&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=390&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=405&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=420&query=Java',
	'http://hd.hunteron.com/#/positions/plateform?start=435&query=Java'
];

casper.each(links_java, function(self, link) {
	self.thenOpen(link, function() {
	self.wait(3000, function() {
  //      this.echo("I've waited for 3 second.");
         var ll = this.getElementsInfo('span[class="pic ng-binding"]');
         for (var i = 0; i < ll.length; i++) {
         	this.echo(ll[i]['text']);
         }
    	});  

	});	
})

casper.then(function() {
	this.echo('end of JAVA');
});

var links_android = [
	'http://hd.hunteron.com/#/positions/plateform?start=0&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=15&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=30&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=45&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=60&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=75&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=90&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=105&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=120&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=135&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=150&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=165&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=180&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=195&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=210&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=225&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=240&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=255&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=270&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=285&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=300&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=315&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=330&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=345&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=360&query=Android',
	'http://hd.hunteron.com/#/positions/plateform?start=375&query=Android'
	
];

casper.each(links_android, function(self, link) {
	self.thenOpen(link, function() {
	self.wait(3000, function() {
  //      this.echo("I've waited for 3 second.");
         var ll = this.getElementsInfo('span[class="pic ng-binding"]');
         for (var i = 0; i < ll.length; i++) {
         	this.echo(ll[i]['text']);
         }
    	});  

	});	
})

casper.then(function() {
	this.echo('end of android');
});

var links_php = [
	'http://hd.hunteron.com/#/positions/plateform?start=0&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=15&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=30&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=45&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=60&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=75&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=90&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=105&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=120&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=135&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=150&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=165&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=180&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=195&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=210&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=225&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=240&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=255&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=270&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=285&query=PHP',
	'http://hd.hunteron.com/#/positions/plateform?start=300&query=PHP'
	
];

casper.each(links_php, function(self, link) {
	self.thenOpen(link, function() {
	self.wait(3000, function() {
  //      this.echo("I've waited for 3 second.");
         var ll = this.getElementsInfo('span[class="pic ng-binding"]');
         for (var i = 0; i < ll.length; i++) {
         	this.echo(ll[i]['text']);
         }
    	});  

	});	
})

casper.then(function() {
	this.echo('end of php');
});

casper.run(function() {
//	this.debugPage();
	this.exit(result);
});