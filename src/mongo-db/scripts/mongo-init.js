db.createUser({
    user: 'alex',
    pwd: '1234',
    roles: [{
        role: 'readWrite',
        db: 'demo-t2'
    }]
});
