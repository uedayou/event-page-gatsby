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


## 更新方法

GitHub Actions と連動して、自動的にGitHub Pagesにデプロイされます。
GitHub Pages を更新したい場合は、 master ブランチに push してください。

## 編集方法

### 共通

以下のすべてのファイルでMarkdownにより記述ができます。
詳しい記述ルールは、[こちら](./lib/gatsby-theme-minimal-blog/README.md)をご覧ください。

### src/src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx

トップページ上部の告知が書かれた部分を編集できます。

### src/src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx

トップページ下部のリンク集の部分を編集できます。

### content/posts/ 以下


