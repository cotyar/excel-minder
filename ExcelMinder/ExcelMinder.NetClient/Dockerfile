﻿FROM mcr.microsoft.com/dotnet/runtime:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["ExcelMinder.NetClient/ExcelMinder.NetClient.csproj", "ExcelMinder.NetClient/"]
RUN dotnet restore "ExcelMinder.NetClient/ExcelMinder.NetClient.csproj"
COPY . .
WORKDIR "/src/ExcelMinder.NetClient"
RUN dotnet build "ExcelMinder.NetClient.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ExcelMinder.NetClient.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ExcelMinder.NetClient.dll"]
