// 1. Define the Cash Register Class
class CashRegister {
    // 2. Initialize items for sale and the shopping cart
    constructor() {
        this.itemsForSale = {
            Phone: 300,
            "Smart TV": 220,
            "Gaming Console": 150
        };
        this.shoppingCart = [];
    }

    // 3. Method to add items to the shopping cart
    addItem(item) {
        // Check if the item is available for sale
        if (this.itemsForSale[item]) {
            this.shoppingCart.push(item); // Add item to cart
            console.log(`${item} has been added to the shopping cart.`);
        } else {
            console.log(`We don't sell ${item}.`); // Item not available
        }
    }

    // 4. Method to calculate the total price
    calculateTotalPrice() {
        let totalPrice = 0;
        // Iterate over shopping cart items
        for (let item of this.shoppingCart) {
            totalPrice += this.itemsForSale[item]; // Sum item prices
        }
        // Apply discount if applicable
        if (totalPrice > 400) {
            totalPrice *= 0.9; // Apply 10% discount
        }
        return totalPrice; // Return total price
    }

    // 5. Method to process payment
    pay(paymentAmount) {
        const totalPrice = this.calculateTotalPrice(); // Get total price
        console.log(`Total price: $${totalPrice.toFixed(2)}`);
        
        // Check if payment is sufficient
        if (paymentAmount >= totalPrice) {
            const change = paymentAmount - totalPrice; // Calculate change
            console.log(`Thank you for your purchase!`);
            if (change > 0) {
                console.log(`Your change is $${change.toFixed(2)}.`);
            }
        } else {
            console.log(`You do not have enough money to purchase these items.`);
        }
    }
}

// 6. Example usage of the Cash Register class
const cashRegister = new CashRegister();
cashRegister.addItem('Phone'); // Add Phone to cart
cashRegister.addItem('Smart TV'); // Add Smart TV to cart
cashRegister.addItem('Gaming Console'); // Add Gaming Console to cart
cashRegister.addItem('Laptop'); // Attempt to add unavailable item

// 7. Simulate a payment
cashRegister.pay(500); // Test with a payment amount
