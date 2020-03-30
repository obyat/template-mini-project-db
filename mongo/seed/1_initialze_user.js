db.createUser({
  user: "cscl",
  pwd: "MyPassword",
  roles: [
    {
      role: "readWrite",
      db: "cscl"
    }
  ]
});

db.books.createIndex({ isbn: 1 });
