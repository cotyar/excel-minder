using Orleans.Streams;

namespace ExcelMinder.Services;

public sealed class StreamObserver<T> : IAsyncObserver<T>
{
    private readonly ILogger? _logger;
    private readonly Func<T, Task> _onNext;
    private readonly TaskCompletionSource _completionTokenSource = new();

    public StreamObserver(
        ILogger logger,
        Func<T, Task> action)
    {
        _logger = logger;
        _onNext = action;
    }

    public Task OnCompletedAsync()
    {
        _completionTokenSource.SetResult();
        return Task.CompletedTask;
    }

    public Task OnErrorAsync(Exception ex)
    {
        _logger?.LogError(ex, ex.Message);
        _completionTokenSource.SetException(ex);
        return Task.CompletedTask;
    }

    public async Task OnNextAsync(T item, StreamSequenceToken? token = null) => await _onNext(item);
        
    public Task CompletionTask => _completionTokenSource.Task;
}