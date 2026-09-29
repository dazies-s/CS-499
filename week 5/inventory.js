// 1. Arrow Function & String Processing

const formatSKU = sku => sku.trim().toUpperCase();

// 2. Getter / Setter Object
const product = {
    name: "Laptop",
    price: 29.99,
    get priceTag() {
        return "$" + this.price.toFixed(2);
    },
    set priceTag(value) {
        this.price = value;
    }
};

// 3. Map Data Store

const warehouseLocations = new Map();

warehouseLocations.set(101, "Electronics");
warehouseLocations.set(102, "Apparel");

// 4. Exception Handling & Validation Function

function verifyStock(skuInput, aisleNumber) {
    if (!skuInput) {
        throw "SKU cannot be empty.";
    }

    const formattedSKU = formatSKU(skuInput);

    console.log("SKU:", formattedSKU);

    if (warehouseLocations.has(aisleNumber)) {
        console.log(
            "Aisle Found: " +
            warehouseLocations.get(aisleNumber)
        );
    }
    else {
        console.log("Unassigned Aisle");
    }
}

// 5. Execution Test Block

try {

    // Valid SKU and existing aisle
    verifyStock(" sku-101 ", 101);

    // Valid SKU and unassigned aisle
    verifyStock(" sku-202 ", 999);

    // Invalid empty SKU
    verifyStock("", 101);

}
catch (error) {
    console.log("Error:", error);

}
