using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Google.Protobuf;
using static System.Reflection.BindingFlags;

namespace ExcelMinder.Excel.Net6;

static class EnumerableExtensions
{
    public static T[,] To2DArray<T>(this IEnumerable<T[]> source)
    {
        var data = source
            .Select(x => x.ToArray())
            .ToArray();

        var res = new T[data.Length, data.Max(x => x.Length)];
        for (var i = 0; i < data.Length; ++i)
        {
            for (var j = 0; j < data[i].Length; ++j)
            {
                res[i,j] = data[i][j];
            }
        }

        return res;
    }
    
    public static string ToJson<T>(this T source) where T: IMessage => JsonSerializer.Serialize(source, _jsonSerializerOptions);

    private static JsonSerializerOptions _jsonSerializerOptions = new Lazy<JsonSerializerOptions>(() =>
        {
            var options = new JsonSerializerOptions();
            options.AddProtobufSupport();
            return options;
        }).Value;
    
    public static T FromJson<T>(this string source) where T: IMessage => JsonSerializer.Deserialize<T>(source, _jsonSerializerOptions);

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