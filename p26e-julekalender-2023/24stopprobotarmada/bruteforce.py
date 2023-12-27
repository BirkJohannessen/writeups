import requests

url = "https://api.kriapos.no/faultInjection"  # This is just a sample URL, you can replace it with your own endpoint

# Sample data to be sent in the POST request
i = 117
while True:
    i = i + 1

    delay = (4193 + i) * 10 * 4  * 1000

    data = {
	'command': 'dump_egg',
	'delay': delay,
	'width': 28000
    }

    response = requests.post(url, json=data)

    print("Response Content:", end="")
    print(response.text)
    if 'No glitch detected. Try adjusting glitch parameters' in response.text:
        break
