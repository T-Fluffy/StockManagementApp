FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["StockManagement-Api.csproj", "./"]
RUN dotnet restore "./StockManagement-Api.csproj"

COPY . .
RUN dotnet build "StockManagement-Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "StockManagement-Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "StockManagement-Api.dll"]