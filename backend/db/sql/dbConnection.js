const Pool = require('pg-pool');
//dotenvを追加して読み込み
require('dotenv').config();

// 環境変数(.envから)を使用してセキュアに設定
const connectionString = process.env.POSTGRES_URL;

// コネクションプールの作成
const pool = new Pool({ connectionString });

// コネクションがエラーを発生させた場合のハンドリング
pool.on('error', (err) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaa')
    console.error('Unexpected error on idle clients', err);
    process.exit(-1); // アプリケーションの異常終了
});

module.exports = pool;
