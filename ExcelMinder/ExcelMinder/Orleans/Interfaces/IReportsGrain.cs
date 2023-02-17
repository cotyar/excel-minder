using System.Collections.Immutable;
using ExcelMinder.Shared;

namespace ExcelMinder.Orleans.Interfaces;

public interface IReportsGrain : IGrainWithStringKey
{
    Task<ImmutableArray<ExcelReport>> GetReports();
    
    Task AddReport(ExcelReport report);
    
    const string DefaultGrainId = "";
}