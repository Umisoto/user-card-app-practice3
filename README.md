# ユーザー管理アプリ
JSONPlaceholderからユーザーデータを受け取り、カード形式で表示するアプリです。  
ログイン機能がついており、1-10のいずれかの数字を入力することでログインができます。「10」を入力するとユーザーの詳細情報を編集可能となっています（編集した情報は反映されません）。

[User_card_app.webm](https://user-images.githubusercontent.com/85279065/177036256-e2d433ce-c30e-481b-a46f-cf3fae865141.webm)

## `URL`
[User Management App](https://user-card-app-practice3.vercel.app/)

## `使い方`
1.ログイン画面では、1-10の適当な数字を入力することでログインが可能となります。  
2.ログイン後、遷移したHome画面からUsers Listをクリックします(Settingはダミーページです)。  
3.Users List画面では、JSON Placeholderから取得したユーザーがカード形式で表示されます。  
4.適当なカードをクリックすると対象ユーザーの詳細モーダルが表示されます。  
5.「10」でログインした時のみ、詳細モーダルの中身が編集可能となります(実際には編集結果は反映されません)。

## `アプリ作成の意図`
React × TypeScriptで開発できるようになることを目的に作成しました。またグローバルなstate管理手法を学ぶため、まずはuseContextでアプリを作成し、その後一部をReact Queryに置き換えました。  
そしてUIデザインはAtomic Designを導入しています。

## `使用技術等`
#### `フロントエンド`
* react: 18.1.0 (create-react-app)
* react-router-dom: 6.3.0
* react-query: 3.39.1
* typescript: 4.6.3
* chakra-ui : 1.8.8
* axios: 0.27.1

#### `インフラ`
* Vercel

#### `データ`
* ユーザー情報: JSON Placeholder (https://jsonplaceholder.typicode.com/users)
* ユーザーカード画像: Unsplash (https://source.unsplash.com/random/150x150)

# `機能一覧`
* ログイン・ログアウト機能(1-10のいずれかの数字でログイン可能)
* 管理者権限(「10」でログインした場合のみ、Users listページの個人カードの情報を操作可能。ただし、編集結果は実際には反映されない)
* レスポンシブデザイン

# `今後の改善点`
* バックエンドでDB作成
* ログインIDやユーザー情報のCRUD操作
* マイページ
* ログイン時のバリデーション追加(現状は、URLさえ知っていれば、ログイン以降のページも閲覧可能)

## `ローカルでの動作方法`
```bash
$ git clone https://github.com/Shota-mancity/user-card-app-practice3.git
$ cd user-card-app-practice3
```

```bash
$ npm install
$ npm start
```
