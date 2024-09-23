//To avoid callbackhell i used promise -which also make my code clean and easier to read.

function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: userId, name: 'Sajan Ghimire' });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Orders fetched for user', userId);
            resolve(['Order1', 'Order2']);
        }, 1000);
    });
}

function processOrders(orders) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Order processed:', orders);
            resolve('Processed Order Results');
        }, 1000);
    });
}

function sendNotification(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Notification sent for:', result);
            resolve('Notification Success');
        }, 1000);
    });
}

// Execute the promises
const userId = 3;
getUser(userId)
    .then(user => {
        console.log(`userId: ${user.id}, name: ${user.name}`);
        return getOrders(user.id);
    })
    .then(orders => processOrders(orders))
    .then(result => sendNotification(result))
    .then(response => {
        console.log('Congratulations - All done!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
