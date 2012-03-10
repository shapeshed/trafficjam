# Traffic Jam


[![Build Status](https://secure.travis-ci.org/shapeshed/trafficjam.png)](http://travis-ci.org/shapeshed/trafficjam)

Traffic Jam is a simple web service for demonstrating slow networks. It can be used for simulating slow network traffic for testing or teaching purposes.

Traffic Jam is hosted on Heroku http://trafficjamapp.herokuapp.com

# Usage

Traffic Jam expects a query string of delay to indicate how long it should delay the response. This should be a number representing the milliseconds for the delay. Because Heroku throttles requests that take longer than 30 seconds the maximum delay is 28000.

    curl -i "http://trafficjamapp.herokuapp.com/?delay=5000"

That's all it does. I told you it was simple. 



