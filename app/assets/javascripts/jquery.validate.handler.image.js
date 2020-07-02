$(function () {

  $("#image-box--0").validate({
    // ルール設定
    rules: {
      "#image-box--0": {
        required: true
      },

    },
    // エラーメッセージの定義
    messages: {
      "#image-box--0": {
        required: "入力してください"
      },      

    },

  });
  // 入力欄or選択欄をフォーカスアウトしたときにバリデーションを実行

});