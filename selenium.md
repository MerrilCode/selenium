# Selenium with nightwatcher


## Installation
		install nodejs
		npm install [-g] nightwatch
		java development kit(JDK)
		
download selenium standalone server 
[download](http://selenium-release.storage.googleapis.com/index.html)

java -jar selenium-server-standalone-{VERSION}.jar

install geckodriver for firefox `npm i geckodriver`

include the driver in the `nightwatch.json`

use this [link](http://nightwatchjs.org/gettingstarted#installation) for installation documentation

run the test `echo"\nnew test\n">>reports/report.txt|nightwatch test.js >>reports/report.txt`
