from flask import Flask, request, json
from Stats.stats import text
from Stats.passwd import genPass
import RPi.GPIO as GPIO
import time
from flask_cors import CORS

GPIO.setmode(GPIO.BCM)

p1 = 17
p2 = 27
p3 = 22
p4 = 23
p5 = 24

GPIO.setup(p1, GPIO.OUT)
GPIO.setup(p2, GPIO.OUT)
GPIO.setup(p3, GPIO.OUT)
GPIO.setup(p4, GPIO.OUT)
GPIO.setup(p5, GPIO.OUT)


app = Flask(__name__)
CORS(app)

password = genPass(6)

# Test route to check if the server functions normally
@app.route('/test')
def test():
    return 'I am alright'

@app.route('/front')
def front():
    print("Going front")

    GPIO.output(p1, True)
    GPIO.output(p2, False)
    GPIO.output(p3, False)
    GPIO.output(p4, False)
    GPIO.output(p5, False)
    
    return 'Going front'
@app.route('/back')
def back():
    print("Going back")

    GPIO.output(p1, False)
    GPIO.output(p2, True)
    GPIO.output(p3, False)
    GPIO.output(p4, False)
    GPIO.output(p5, False)

    return 'Going Back'

@app.route('/left')
def left():
    print("Going left")

    GPIO.output(p1, False)
    GPIO.output(p2, False)
    GPIO.output(p3, True)
    GPIO.output(p4, False)
    GPIO.output(p5, False)

    return 'Going left'

@app.route('/right')
def right():
    print("Going right")

    GPIO.output(p1, False)
    GPIO.output(p2, False)
    GPIO.output(p3, False)
    GPIO.output(p4, True)
    GPIO.output(p5, False)

    return 'Going right'

@app.route('/stop')
def stop():
    print("Stopping")

    GPIO.output(p1, False)
    GPIO.output(p2, False)
    GPIO.output(p3, False)
    GPIO.output(p4, False)
    GPIO.output(p5, False)

    return 'Stopping'

@app.route('/plant')
def palnt():
    print("Planting")

    GPIO.output(p1, False)
    GPIO.output(p2, False)
    GPIO.output(p3, False)
    GPIO.output(p4, False)
    GPIO.output(p5, True)

    return 'Planting'

@app.route('/connect', methods=['POST'])
def connecting():
    print("Connecting..")
    userInp = json.loads(request.data)
    if userInp['pass'] == password:
        text(t2='       Connected')
        return 'Connected'
    else:
        return 'Wrong code'

for i in range(4):
   text(t2="       Booting.")
   time.sleep(0.5)
   text(t2="       Booting..")
   time.sleep(0.5)
   text(t2="       Booting...")
   time.sleep(0.5)
   

   


text(t2="Enter this code: " + password)


app.run(host='0.0.0.0', port=8081)
