namespace ExcelMinder;

public static class SimulationHelper
{
    public static float[] RandomWalkSimulation (
        float startPrice,
        int ticks,
        float mean,
        float stdDev)
    {
        var rand = new Random();
        
        return Enumerable.Range(0, ticks)
            // .Select(i => (float) (startPrice * Math.Exp(mean + stdDev * rand.Next())))
            .Select(i => (float) Math.Round(startPrice + stdDev * rand.NextDouble() - stdDev / 2, 4))
            .ToArray();
    }
}