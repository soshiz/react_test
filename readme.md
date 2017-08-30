npm
node
は最新にupのこと。

loader: 'babel',
だと蹴られるので

loader: 'babel-loader', 
に変更して、

何かココらへん
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",

入れておかないとエラー履くかも。

ここが役に立った↓
http://qiita.com/yokoh9/items/4ea3fa0e24623e53fc69

※念のためnode.js継ぎ足しておく
【Node.js】足りないモジュールをたったの一行でインストールするコマンド

> npm install -g npm-install-missing
> npm-install-missing

導入結構面倒かも・・・
