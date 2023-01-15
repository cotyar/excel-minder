namespace ExcelMinder;

public static class SimulationHelper
{
    public static double[] RandomWalkSimulation (
        double startPrice,
        int ticks,
        double mean,
        double stdDev)
    {
        var rand = new Random();
        
        return Enumerable.Range(0, ticks)
            .Select(i => startPrice * Math.Exp(mean + stdDev * rand.Next()))
            .ToArray();
    }
}