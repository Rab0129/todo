//express呼び出し
const express = require('express');
const app = express();
const pool = require('./db/sql/dbConnection');

/* GET home page. */
app.get('/', (req, res) => {            //topだよ
    res.send('Hello World!');
});

// 非同期処理を扱うためにasyncを追加
app.post('/', async (req, res, next) => {
    try {
        // データベースを参照するためのクエリ（処理を書けばなんでも行ける）
        const selectTable = 'SELECT id,title,memo FROM leaf_yasai';
        // データベースへの挿入を非同期に実行　（格納）
        const s = await pool.query(selectTable, []);
        // teble表示
        res.send(s.rows);  //sの中のrowを提出
    } catch (error) {
        console.error(error);
        // エラーハンドリング: サーバーエラーが発生した場合は500をクライアントに返す
        res.status(500).send('サーバーエラー');
    }
});

app.listen(3333, () => {                                //受付中 立ち上がった状態でリクエストをまつよ
    console.log('Server listening on port 3333');
});


