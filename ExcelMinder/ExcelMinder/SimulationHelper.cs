namespace ExcelMinder;

public static class SimulationHelper
{
    private static readonly ThreadLocal<Random> Rand = new(() => new Random());

    public static float[] RandomWalkSimulation (
        float startPrice,
        int ticks,
        float mean,
        float stdDev) => Enumerable.Range(0, ticks)
            // .Select(i => (float) (startPrice * Math.Exp(mean + stdDev * rand.Next())))
            .Select(i => (float) Math.Round(startPrice + stdDev * (Rand.Value?.NextDouble() ?? 0.0) - stdDev / 2, 4))
            .ToArray();

    public static float RandomWalkSimulation (
        float startPrice,
        float mean,
        float stdDev) => (float) Math.Round(startPrice + stdDev * (Rand.Value?.NextDouble() ?? 0.0) - stdDev / 2, 4);
}