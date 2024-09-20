class CashRegister {
    constructor() {
        this.itemsForSale = {
            Phone: 300,
            "Smart TV": 220,
            "Gaming Console": 150
        };
        this.shoppingCart = [];
    }

    addItem(item) {
        if (this.itemsForSale[item]) {
            this.shoppingCart.push(item);
            console.log(`${item} has been added to the shopping cart.`);
        } else {
            console.log(`We don't sell ${item}.`);
        }
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (let item of this.shoppingCart) {
            totalPrice += this.itemsForSale[item];
        }
        if (totalPrice > 400) {
            totalPrice *= 0.9; // Apply 10% discount
        }
        return totalPrice;
    }

    pay(paymentAmount) {
        const totalPrice = this.calculateTotalPrice();
        console.log(`Total price: $${totalPrice.toFixed(2)}`);
        
        if (paymentAmount >= totalPrice) {
            const change = paymentAmount - totalPrice;
            console.log(`Thank you for your purchase!`);
            if (change > 0) {
                console.log(`Your change is $${change.toFixed(2)}.`);
            }
        } else {
            console.log(`You do not have enough money to purchase these items.`);
        }
    }
}

// Example usage
const cashRegister = new CashRegister();
cashRegister.addItem('Phone');
cashRegister.addItem('Smart TV');
cashRegister.addItem('Gaming Console');
cashRegister.addItem('Laptop'); // Not for sale

// Simulate a payment
cashRegister.pay(500); // Test with sufficient payment
