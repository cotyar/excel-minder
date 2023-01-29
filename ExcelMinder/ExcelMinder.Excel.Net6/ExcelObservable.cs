using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ExcelDna.Integration;
using Grpc.Core;

namespace ExcelMinder.Excel.Net6;

class ExcelObservable<T> : IExcelObservable
    where T : class
{
    private readonly Func<T, object> _converter;
    private readonly IAsyncStreamReader<T> _stream;
    private Task _backgroundTask;

    // ReSharper disable once NotAccessedField.Local
    private readonly Timer _timer;
    private readonly List<IExcelObserver> _observers;

    public ExcelObservable(Func<T, object> converter, IAsyncStreamReader<T> stream)
    {
        _converter = converter;
        _stream = stream;
        _backgroundTask = Task.Run(async () =>
        {
            while (await stream.MoveNext())
            {
                var current = _converter(stream.Current);
                foreach (var obs in _observers)
                    obs.OnNext(current);
            }
        });
        _observers = new List<IExcelObserver>();
    }

    public IDisposable Subscribe(IExcelObserver observer)
    {
        _observers.Add(observer);
        observer.OnNext("(Subscribing...)");
        return new ActionDisposable(() => _observers.Remove(observer));
    }
}