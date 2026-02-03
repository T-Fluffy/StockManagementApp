using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StockManagement.Api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateProductAndSupplierSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DamagedQuantity",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "ExpiryDate",
                table: "Products",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsBrokenOrDamaged",
                table: "Products",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DamagedQuantity",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ExpiryDate",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "IsBrokenOrDamaged",
                table: "Products");
        }
    }
}
