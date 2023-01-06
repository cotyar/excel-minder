import numpy as np

def simulate_prices(start_price, days, mu, sigma):
  prices = []
  price = start_price
  for _ in range(days):
    shock = np.random.normal(mu, sigma)
    price += shock
    prices.append(price)
  return prices

# Simulate stock prices for 30 days with a starting price of 100
# and a mean return of 0.5% and a standard deviation of 1%
simulated_prices = simulate_prices(100, 30, 0.005, 0.01)