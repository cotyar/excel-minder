using System;
using ExcelDna.Integration;
using ExcelDna.IntelliSense;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Excel = Microsoft.Office.Interop.Excel;

namespace ExcelAddIn1
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
                var shock = rand.NextGaussian(meanReturn, stdDev);
                price += shock;
                prices.Add(price);
            }

            var result = new object[prices.Count, 1];
            for (int i = 0; i < prices.Count; i++)
            {
                result[i, 0] = prices[i];
            }
            return result;
        }
    }
}