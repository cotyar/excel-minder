using System.Collections.Immutable;
using ExcelMinder.Orleans.Interfaces;
using ExcelMinder.Shared;

namespace ExcelMinder.Orleans.Grains;

public class ReportsGrain : Grain, IReportsGrain
{
    private ImmutableArray<ExcelReport> _reports = ImmutableArray<ExcelReport>.Empty;
    
    public Task<ImmutableArray<ExcelReport>> GetReports() => Task.FromResult(_reports);

    public Task AddReport(ExcelReport report)
    {
        _reports = _reports.Add(report);
        return Task.CompletedTask;
    }
}