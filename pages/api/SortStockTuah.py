import yfinance as yf
import json
from progress.bar import ShadyBar
from progress.spinner import LineSpinner

print(""" 
____    ______  _____   ____     __  __      ______  __  __  ______  __  __     
/\  _`\ /\__  _\/\  __`\/\  _`\  /\ \/\ \    /\__  _\/\ \/\ \/\  _  \/\ \/\ \    
\ \,\L\_\/_/\ \/\ \ \/\ \ \ \/\_\\\\ \ \/'/'   \/_/\ \/\ \ \ \ \ \ \L\ \ \ \_\ \   
 \/_\__ \  \ \ \ \ \ \ \ \ \ \/_/_\ \ , <       \ \ \ \ \ \ \ \ \  __ \ \  _  \  
   /\ \L\ \ \ \ \ \ \ \_\ \ \ \L\ \\\\ \ \\\\`\      \ \ \ \ \ \_\ \ \ \/\ \ \ \ \ \ 
   \ `\____\ \ \_\ \ \_____\ \____/ \ \_\ \_\     \ \_\ \ \_____\ \_\ \_\ \_\ \_\\
    \/_____/  \/_/  \/_____/\/___/   \/_/\/_/      \/_/  \/_____/\/_/\/_/\/_/\/_/

Sorting Algorithm v0.0.2 beta
""")

print("\n\n")
spinner = LineSpinner('Loading Weighted Points Stock List...')
spinner.next()

allStocks = []
with open('STOCKS-WITH-POINTS.json') as json_data:
    allStocks = json.load(json_data)
    json_data.close()
    spinner.next()

bar = ShadyBar('Processing', max=len(allStocks), suffix='%(percent).1f%% [%(eta)ds remaining]')

pink = []
orange = []
red = []
yellow = []
green = []
blue = []

for stock in allStocks:
    points = stock["weightedPoints"]
    payload = {
        "ticker": stock["ticker"],
        "sector": stock["sector"],
        "points": stock["weightedPoints"]
    }
    if (points >= 5 and points <= 9):
        pink.append(payload)
    elif (points >= 10 and points <= 14):
        orange.append(payload)
    elif (points >= 15 and points <= 19):
        red.append(payload)
    elif (points >= 20 and points <= 24):
        yellow.append(payload)
    elif (points >= 25 and points <= 29):
        green.append(payload)
    elif (points >= 30):
        blue.append(payload)
    bar.next()

spinner = LineSpinner('Dumping Summary File...')
spinner.next()

summary = {
    "pink": pink,
    "orange": orange,
    "red": red,
    "yellow": yellow,
    "green": green,
    "blue": blue
}
with open("finalStockSummary.json", "w") as file:
    json.dump(summary, file)
print("\n\n\nComplete.\nGood Bye.")