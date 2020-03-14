# event-page-gatsby

このサイトは、主に技術系イベント(ハッカソン、アイデアソンなど)のページに最低限必要な要素をあらかじめ組み込んだGatsbyプロジェクトです。
このプロジェクトをGitHubにリポジトリを作成し、公開鍵、秘密鍵の設定をすることにより
GitHub Actionsを利用して、自動的にGitHub Pagesとして公開することができます。

このプロジェクトは主に以下を利用しています。

- React
- Gatsby
- @lekoarts/gatsby-theme-minimal-blog
- peaceiris/actions-gh-pages
- GitHub Actions
- GitHub Pages

GitHub Action を利用した GitHub Pages のデプロイは、以下のページの「デプロイトークンの設定」に従って、リポジトリのSettingsページであらかじめ設定を行っておいてください。

[GitHub Actions による GitHub Pages への自動デプロイ#デプロイトークンの設定](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d#%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E3%81%AE%E8%A8%AD%E5%AE%9A)

このリポジトリをGitHub Pagesにデプロイすると以下のようになります。

<https://uedayou.github.io/event-page-gatsby/>

## 更新方法

GitHub Actions と連動して、自動的にGitHub Pagesにデプロイされます。
GitHub Pages を更新したい場合は、 master ブランチに push してください。

## 編集方法

### 共通

以下のすべてのファイルでMarkdownにより記述ができます。

### src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx

トップページ上部の告知が書かれた部分を編集できます。

### src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx

トップページ下部のリンク集の部分を編集できます。

### content/posts/ 以下

