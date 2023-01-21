using System;
using System.Diagnostics;

namespace ExcelMinder.Excel.Net6;

public class ActionDisposable : IDisposable
{
    private readonly Action _disposeAction;
    
    private bool _disposed;
    
    public ActionDisposable(Action disposeAction)
    {
        _disposeAction = disposeAction;
    }
    
    
    ~ActionDisposable()
    {
        Dispose();
    }
    
    public void Dispose()
    {
        if (_disposed) return;
        
        _disposeAction();
        _disposed = true;
        
        GC.SuppressFinalize(this);

        Debug.WriteLine("Disposed");
    }
}