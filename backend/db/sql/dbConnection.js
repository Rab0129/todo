const Pool = require('pg-pool');

// 環境変数を使用してセキュアに設定
const dbConfig = {
    database: process.env.DB_NAME || 'test_yasai',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
};

//直接もろもろ指定したらしい
const connectionString = "postgres://postgres:postgres@postgres:5432/test_yasai"
// コネクションプールの作成
const pool = new Pool({ connectionString });

// コネクションがエラーを発生させた場合のハンドリング
pool.on('error', (err) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaa')
    console.error('Unexpected error on idle clients', err);
    process.exit(-1); // アプリケーションの異常終了
});

module.exports = pool;
