function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: userId, name: 'Sajan Ghimire' });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log('Orders fetched for user', userId);
        callback(['Order1', 'Order2']);
    }, 1000);
}

function processOrders(orders, callback) {
    setTimeout(() => {
        console.log('Order processed:', orders);
        callback('Processed Order Results');
    }, 1000);
}

function sendNotification(result, callback) {
    setTimeout(() => {
        console.log('Notification sent for:', result);
        callback('Notification Success');
    }, 1000);
}

// Execute the nested callbacks (callback hell)
const userId = 3;
getUser(userId, function (user) {
    console.log(`userId: ${user.id}, name: ${user.name}`);
    getOrders(user.id, function(orders) {
        processOrders(orders, function(result) {
            sendNotification(result, function(response) {
                console.log('Congratulations - All done!');
            });
        });
    });
});
