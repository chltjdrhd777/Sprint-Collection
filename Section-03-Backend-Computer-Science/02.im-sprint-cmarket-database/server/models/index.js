const db = require('../db');

module.exports = {
  items: {
    get: (callback) => {
      // Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
  orders: {
    get: (userId, callback) => {
      // 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      const queryString = `SELECT o.id, o.created_at, o.total_price, i.name, i.price, i.image, oi.order_quantity
                            FROM orders AS o 
                            JOIN order_items AS oi ON oi.order_id = o.id
                            JOIN items AS i ON oi.item_id = i.id
                            WHERE o.user_id=${userId}`;
      
      db.query(queryString, (error, result) => {
          callback(error, result);
      });
    },

    post: (userId, orders, totalPrice, callback) => {
      // 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;
      const params = [[userId, totalPrice]]; //[]를 2번 감싸야한다.

      db.query(queryString, [params], (error, result) => {
        try{
          const query = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;
          const params = orders.map((el) => [
            result.insertId,
            el.itemId,
            el.quantity
          ]);

          db.query(query, [params], (error, result) => {
            callback(error, result);
          });
        } catch(error){ //catch()!!!!
            callback(error);
        }        
    });
      
    }
  },
};
