using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Google.Protobuf;

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
}