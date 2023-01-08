using System;
using ExcelDna.Integration;
using System.Collections.Generic;

namespace ExcelMinder.Excel
{
    public class ExcelFunctions
    {
        [ExcelFunction(Description = "Simulates stock prices using a random walk model.")]
        public static object[,] SimulateStockPrices(
            [ExcelArgument(Description = "The starting price of the stock.")] double startPrice,
            [ExcelArgument(Description = "The number of days to simulate.")] int days,
            [ExcelArgument(Description = "The mean return of the stock (per day).")] double meanReturn,
            [ExcelArgument(Description = "The standard deviation of the return (per day).")] double stdDev)
        {
            var rand = new Random();
            var prices = new List<double>();
            var price = startPrice;
            for (int i = 0; i < days; i++)
            {
                var shock = rand.Next() * 100;
                price += shock;
                prices.Add(price);
            }

            var result = new object[prices.Count, 1];
            for (int i = 0; i < prices.Count; i++)
            {
                // ReSharper disable once HeapView.BoxingAllocation
                result[i, 0] = prices[i];
            }
            return result;
        }
    }
}