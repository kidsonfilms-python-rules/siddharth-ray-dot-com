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
""")

print("\n\n")
spinner = LineSpinner('Loading Legal Stock List...')
spinner.next()

allStocks = ["NVDA", "MSFT", "AAPL", "INTC", "TSLA", "NVDA", "MSFT", "AAPL", "INTC", "TSLA", "NVDA", "MSFT", "AAPL", "INTC", "TSLA",]
with open('legalStocks.json') as json_data:
    allStocks = json.load(json_data)["American"]
    json_data.close()
    spinner.next()
stockInfos = []
bar = ShadyBar('Processing', max=len(allStocks), suffix='%(percent).1f%% [%(eta)ds remaining]')

for stock in allStocks:
    # print("\nProccessing " + stock)
    points = 0
    try:
        yStock = yf.Ticker(stock)
    except:
        pass

    scoredCats = []
    errorCats = []
    
    # PROFITABILITY
    try:
        if (yStock.info["profitMargins"] >= 0.12):
            points += 2
            scoredCats.append("profit margins")
    except:
        errorCats.append("profit margins")
        pass
    try:
        if (yStock.info["returnOnEquity"] >= 0.12):
            points += 3
            scoredCats.append("roe")
    except:
        errorCats.append("roe")
        pass
    try:
        if (yStock.info["returnOnAssets"] > 0.06):
            points += 3
            scoredCats.append("roa")
    except:
        errorCats.append("roa")
        pass
    try:
        if (yStock.info["operatingMargins"] >= 0.15):
            points += 3
            scoredCats.append("operating margins")
    except:
        errorCats.append("op margins")
        pass
    try:
        if (((yStock.financials.at["Diluted EPS", str(yStock.financials.columns[0]).split(" ")[0]]/yStock.financials.at["Diluted EPS", str(yStock.financials.columns[1]).split(" ")[0]])-1) >= 0.15):
            points += 4
            scoredCats.append("eps growth")
    except:
        errorCats.append("eps growth")
        pass

    # GROWTH POT.
    try:
        if (yStock.info["revenueGrowth"] >= 0.15):
            points += 4
            scoredCats.append("revenue growth")
    except:
        errorCats.append("revenue growth")
        pass
    try:
        if (yStock.info["pegRatio"] <= 1):
            points += 4
            scoredCats.append("peg")
    except:
        errorCats.append("peg")
        pass

    # RISK

    try:
        if (yStock.info["beta"] <= 1.2):
            points += 3
            scoredCats.append("beta")
    except:
        errorCats.append("beta")
        pass
    try:
        if (yStock.info["debtToEquity"] <= 1.5):
            points += 4
            scoredCats.append("debt to eq")
    except:
        errorCats.append("debt to eq")
        pass
    try:
        if (yStock.info["currentRatio"] >= 1.5):
            points += 3
            scoredCats.append("current ratio")
    except:
        errorCats.append("current ratio")
        pass
    try:
        interestCoverageRatio = yStock.financials.at["EBIT", str(yStock.financials.columns[0]).split(" ")[0]] / yStock.financials.at["Interest Expense Non Operating", str(yStock.financials.columns[0]).split(" ")[0]]
        if (interestCoverageRatio >= 3):
            points += 3
            scoredCats.append("interest coverage")
    except:
        errorCats.append("interest coverage")
        pass
    
    # ESG AND PUBLIC GOOD
    try:
        if (float(yStock.sustainability.to_string().split("totalEsg")[1].replace(" ", "")) >= 12):
            points += 5
            scoredCats.append("total esg")
    except:
        errorCats.append("total esg")
        pass

    # ADDITIONAL METRICS
    try:
        if (yStock.info["heldPercentInsiders"] >= 0.05):
            points += 3
            scoredCats.append("percent insider")
    except:
        errorCats.append("percent insider")
        pass
    try:
        if (yStock.info["priceToSalesTrailing12Months"] <= 1.5):
            points += 2
            scoredCats.append("p2s")
    except:
        errorCats.append("p2s")
        pass
    
    stockInfos.append({
        "ticker": stock,
        "name": yStock.info["longName"],
        "sector": yStock.info["sector"],
        "weightedPoints": points,
        "error": errorCats,
        "scored": scoredCats
    })
    with open("STOCKS-WITH-POINTS.json", "w") as file:
        json.dump(stockInfos, file)
    bar.next()

print("\n\n\nComplete.\nGood Bye.")

# yStock = yf.Ticker("MSFT")

# print(str(yStock.financials.columns[0]).split(" ")[0])
# epsCurrent = yStock.financials.at["Diluted EPS", str(yStock.financials.columns[0]).split(" ")[0]]
# epsPast = yStock.financials.at["Diluted EPS", str(yStock.financials.columns[1]).split(" ")[0]]
# print(epsCurrent)
# print(epsPast)
# print((((epsCurrent/epsPast)-1)*100))
# print(yStock.financials.at["EBIT", str(yStock.financials.columns[0]).split(" ")[0]] / yStock.financials.at["Interest Expense Non Operating", str(yStock.financials.columns[0]).split(" ")[0]])
# with open("info.json", "w") as file:
#     json.dump(yStock.info, file)
# print(yStock.financials)