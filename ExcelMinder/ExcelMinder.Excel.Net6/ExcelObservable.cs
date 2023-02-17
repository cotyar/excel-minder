using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;
using ExcelDna.Integration;
using Grpc.Core;

namespace ExcelMinder.Excel.Net6;

internal class ExcelObservable<T> : IExcelObservable
    where T : class
{
    private Task _backgroundTask;
    
    // ReSharper disable once NotAccessedField.Local
    private readonly List<IExcelObserver> _observers;
    private readonly IAsyncStreamReader<T> _asyncStreamReader;
    
    public ExcelObservable(Func<T, object> converter, IAsyncStreamReader<T> stream)
    {
        _asyncStreamReader = stream;
        _observers = new List<IExcelObserver>();
        _backgroundTask = Task.Run(async () =>
        {
            while (await _asyncStreamReader.MoveNext())
            {
                var current = converter(_asyncStreamReader.Current);
                foreach (var obs in _observers)
                    obs.OnNext(current);
            }
        });
    }
    
    public IDisposable Subscribe(IExcelObserver observer)
    {
        _observers.Add(observer);
        observer.OnNext("(Subscribing...)");
        return new ActionDisposable(() => _observers.Remove(observer));
    }
}