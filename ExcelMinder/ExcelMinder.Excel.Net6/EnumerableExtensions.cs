using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Google.Protobuf;
using static System.Reflection.BindingFlags;
using Range = Microsoft.Office.Interop.Excel.Range; 

namespace ExcelMinder.Excel.Net6;

static class EnumerableExtensions
{
    public static object[,] To2DArray<T>(this IEnumerable<T[]> source)
    {
        var data = source
            .Select(x => x.ToArray())
            .ToArray();

        var res = new object[data.Length, data.Max(x => x.Length)];
        for (var i = 0; i < data.Length; ++i)
        {
            for (var j = 0; j < data[i].Length; ++j)
            {
                res[i,j] = data[i][j];
            }
        }

        return res;
    }

    public static object[,] To2DArray<T>(this IEnumerable<T> source) => source.Select(x => new object [] { x }).To2DArray();
    
    public static Range Apply(this Range range, object[,] source)
    {
        if ((source?.GetLength(0) ?? 0) == 0 || source.GetLength(1) == 0)
        {
            range.Value = source;
        }
        else
        {
            range.Resize[source.GetLength(0), source.GetLength(1)].Value = source;
        }
        return range;
    }
    
    public static string ToJson<T>(this T source) where T: IMessage => JsonSerializer.Serialize(source, JsonSerializerOptions);

    private static readonly JsonSerializerOptions JsonSerializerOptions = new Lazy<JsonSerializerOptions>(() =>
        {
            var options = new JsonSerializerOptions();
            options.AddProtobufSupport();
            return options;
        }).Value;

    public static object[,] Select<T>(this T[,] data, Func<T, object> mapper)
    {
        var res = new object[data.GetLength(0), data.GetLength(1)];
        for (var i = 0; i < data.GetLength(0); ++i)
        {
            for (var j = 0; j < data.GetLength(1); ++j)
            {
                res[i,j] = mapper(data[i,j]);
            }
        }

        return res;
    }
    
    public static object[,] Select<T>(this T[,] data, Func<T, int, int, object> mapper)
    {
        var res = new object[data.GetLength(0), data.GetLength(1)];
        for (var i = 0; i < data.GetLength(0); ++i)
        {
            for (var j = 0; j < data.GetLength(1); ++j)
            {
                res[i,j] = mapper(data[i,j], i, j);
            }
        }

        return res;
    }

    public static T FromJson<T>(this string source) where T: IMessage => JsonSerializer.Deserialize<T>(source, JsonSerializerOptions);

    /// <summary>
    /// This code defines an extension method ToCsv on the IEnumerable<T> type, where T is the type of the items in the collection.
    /// The method uses reflection to get the names of all the public properties on the T type, and then iterates over the items in the collection,
    /// getting the value of each property for each item and returning an array of strings representing the values.
    ///
    /// The first row of the returned table will be the headers with the names of all the properties and the other rows
    /// will be the corresponding values of those properties for the items in the collection.
    /// </summary>
    /// <param name="items"></param>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public static IEnumerable<string[]> ToCsv<T>(this IEnumerable<T> items) 
    {
        var properties = typeof(T).GetProperties(DeclaredOnly | Public | Instance);
        var headers = properties.Select(p => p.Name).ToArray();
        yield return headers;

        foreach (var item in items)
        {
            var values = properties.Select(p => p.GetValue(item)?.ToString() ?? string.Empty).ToArray();
            yield return values;
        }
    }
}