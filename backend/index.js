//express呼び出し
const express = require('express');
const app = express();
const pool = require('./db/sql/dbConnection');

// 非同期処理を扱うためにasyncを追加
app.get('/', async (req, res, next) => {
    try {
        // データベースを参照するためのクエリ（処理を書けばなんでも行ける）
        const selectTable = 'SELECT id,title,memo FROM leaf_yasai';
        // データベースへの挿入を非同期に実行　（格納）
        const selectAll = await pool.query(selectTable);
        // teble表示
        res.send(selectAll.rows);  //sの中のrowを提出
        console.log(selectAll);
    } catch (error) {
        console.error(error);
        // エラーハンドリング: サーバーエラーが発生した場合は500をクライアントに返す
        res.status(500).send('サーバーエラー');
    }
});

app.get('/search', async (req, res, next) => {
    try {
        //クエリで受け取った値をSQLと絡めて変数に格納
        const search = 'SELECT id,title,memo FROM leaf_yasai WHERE title=$1';

        //受け取ったタイトルをvaluesに入れるよ--$1で認識 
        //------ToDo(ifでnullの確認を行いたい)-----------
        const title = req.query.title;
        const values = [title];

        //poolへSQL宣言したものをもってきてupに格納
        const results = await pool.query(search, values);
        //htmlにsendしているよね
        res.send(results.rows);
        //logに出力
        console.log(results);
    } catch (error) {
        console.error(error);
        // エラーハンドリング: サーバーエラーが発生した場合は500をクライアントに返す
        res.status(500).send('サーバーエラー');
    }
});


app.listen(3333, () => {                                //受付中 立ち上がった状態でリクエストをまつよ
    console.log('Server listening on port 3333');
});


