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
            .Select(i => (float) (startPrice * Math.Exp(mean + stdDev * rand.Next())))
            .ToArray();
    }
}