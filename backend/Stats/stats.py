import time

import Adafruit_GPIO.SPI as SPI
import Adafruit_SSD1306

from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont


RST = None     
DC = 23
SPI_PORT = 0
SPI_DEVICE = 0

disp = Adafruit_SSD1306.SSD1306_128_32(rst=RST)

disp.begin()

# Clear display.
disp.clear()
disp.display()

# Create blank image for drawing.
# Make sure to create image with mode '1' for 1-bit color.
width = disp.width
height = disp.height
image = Image.new('1', (width, height))

# Get drawing object to draw on image.
draw = ImageDraw.Draw(image)

# Draw a black filled box to clear the image.
draw.rectangle((0,0,width,height), outline=0, fill=0)

padding = -2
top = padding
bottom = height-padding
x = 0


# Load default font.
font = ImageFont.load_default()

def clear(line):
    if line == 1:   
        text(t1 = "")
    elif line == 2:
        text(t2 == "")
    elif line == 3:
        text(t3 == "")

def text(t1 = "", t2 = "", t3 = ""):
    

    # Draw a black filled box to clear the image.
    draw.rectangle((0,0,width,height), outline=0, fill=0)

    draw.text((20, top),       "A2Z TECHVALLEY", font=font, fill=255)
    draw.text((0, top+8), t1, font=font, fill=255)
    draw.text((0, top+16), t2, font=font, fill=255)
    draw.text((0, top+24), t3, font=font, fill=255)

    disp.image(image)
    disp.display()
    time.sleep(.1)




