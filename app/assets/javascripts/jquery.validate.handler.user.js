$(function () {  
  // メソッドの定義
  var methods = {
    email: function (value, element) { // メールアドレスの正規表現 
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value);
    },
    password: function (value, element) { // パスワードの正規表現 
      return this.optional(element) || /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i.test(value);
    },
    valueNotEquals: function (value, element, arg) { // プルダウンリストが選択されているかの確認
      return arg !== value;
    },
    phone_number: function (value, element) { // 電話番号の正規表現
      return this.optional(element) || /^0\d{9,10}$/.test(value);
    },
    cardNumber: function (value, element) { // クレジットカード番号の正規表現
      return this.optional(element) || /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47]{13}|(?:2131|1800|35[0-9]{3})[0-9]{11})$/.test(value);
    },
    cvc: function (value, element) { // セキュリティコードの正規表現
      return this.optional(element) || /^\d{3,4}$/.test(value);
    },
    postalCode: function (value, element) { // 郵便番号の正規表現
      return this.optional(element) || /^\d{3}[-]\d{4}$/.test(value);
    },
    kana: function (value, element) { // カタカナの正規表現
      return this.optional(element) || /^[ァ-ヴ]+$/.test(value);
    },
  }
  // メソッドの追加
  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });
  // バリデーションの実行
  $("#signup-form, #charge-form").validate({

    // ルール設定
    rules: {
      "user[nickname]": {
        required: true
      },
      "user[email]": {
        required: true,
        email: true 
      },
      "user[password]": {
        required: true,
        password: true
      },
      "user[password_confirmation]": {
        required: true,
        password: true,
        equalTo: "#password"
      },
      "user[firstname]": {
        required: true
      },
      "user[lastname]": {
        required: true
      },
      "user[lastname_kana]": {
        required: true,
        kana: true
      },
      "user[firstname_kana]": {
        required: true,
        kana: true
      },
      "user[birth_year]": {
        valueNotEquals: "--"
      },
      "user[birth_month]": {
        valueNotEquals: "--"
      },
      "user[birth_day]": {
        valueNotEquals: "--"
      },
      "user[phone_number]": {
        required: true,
        phone: true
      },
      "user[destination_lastname]": {
        required: true
      },
      "user[destination_firstname]": {
        required: true
      },
      "user[destination_lastname_kana]": {
        required: true,
        kana: true
      },
      "user[destination_firstname_kana]": {
        required: true,
        kana: true
      },
      "user[postal_code]": {
        required: true,
        postalCode: true
      },
      "user[prefectures]": {
        required: true
      },
      "user[city]": {
        required: true
      },
      "user[address]": {
        required: true
      }
      // "user[room_number]": {},
      // "user[delivery_number]": {
      //   phone: true
      // },
    
    },
    // エラーメッセージの定義
    messages: {
      "user[nickname]": {
        required: "ニックネームを入力してください"
      },
      "user[email]": {
        required: "メールアドレスを入力してください",
        email: "フォーマットが不適切です"
      },
      "user[password]": {
        required: "パスワードを入力してください",
        password: "英字と数字両方を含むパスワードを入力してください"
      },
      "user[password_confirmation]": {
        required: "確認用パスワードを入力してください",
        password: "英字と数字両方を含むパスワードを入力してください",
        equalTo: "パスワードが一致していません"
      },
      "user[firstname]": {
        required: "姓を入力してください"
      },
      "user[lastname]": {
        required: "名を入力してください"
      },
      "user[firstname_kana]": {
        required: "姓カナを入力してください",
        kana: "姓カナをカタカナに変更してください"
      },
      "user[lastname_kana]": {
        required: "名カナを入力してください",
        kana: "名カナをカタカナに変更してください"
      },
      "user[birth_year]": {
        valueNotEquals: "生年月日を入力してください"
      },
      "user[birth_month]": {
        valueNotEquals: "生年月日を入力してください"
      },
      "user[birth_day]": {
        valueNotEquals: "生年月日を入力してください"
      },
      "user[phone_number]": {
        required: "電話番号を入力してください",
        phone: "フォーマットが不適切です"
      },
      "user[destination_firstname]": {
        required: "姓を入力してください"
      },
      "user[destination_lastname]": {
        required: "名を入力してください"
      },
      "user[destination_firstname_kana]": {
        required: "姓カナを入力してください",
        kana: "姓カナをカタカナに変更してください"
      },
      "user[destination_lastname_kana]": {
        required: "名カナを入力してください",
        kana: "名カナをカタカナに変更してください"
      },
      "user[postal_code]": {
        required: "郵便番号を入力してください",
        postalCode: "フォーマットが不適切です"
      },
      "user[prefectures]": {
        required: "都道府県を選択してください"
      },
      "user[city]": {
        required: "市町村区を入力してください"
      },
      "user[address]": {
        required: "番地を入力してください"
      }
      // "user[room_number]": {},
      // "user[delivery_number]": {
      //   phone: "フォーマットが不適切です"
      // },
     
    },
    groups: { //グループ化
      exp_date: "exp_month exp_year"
    },
    errorClass: "invalid",
    errorElement: "p",
    validClass: "valid",
    // エラーメッセージ表示位置のカスタム設定
    errorPlacement: function (error, element) {
      if (element.attr("name") == "user[firstname]" || element.attr("name") == "user[lastname]") {
        console.log("ifugoita")
        error.insertAfter("#name_error");
      }
      else if (element.attr("name") == "user[firstname_kana]" || element.attr("name") == "user[lastname_kana]") {
        error.insertAfter("#name_kana_error");
      }
      else if (element.attr("name") == "user[birth_year]" || element.attr("name") == "user[birth_month]" || element.attr("name") == "user[birth_day]") {
        $("#selct_birth_month-error, #select_birth_day-error, #select_birth_year-error").remove();
        error.insertAfter("#birth_date_error");
      }
      else if (element.attr("name") == "user[destination_firstname]" || element.attr("name") == "user[destination_lastname]") {
        error.insertAfter("#name_error");
      }
      else if (element.attr("name") == "user[destination_firstname_kana]" || element.attr("name") == "user[destination_lastname_kana]") {
        error.insertAfter("#name_kana_error");
      }
      else if (element.attr("name") == "user[prefectures]") {
        error.insertAfter("#prefectures_error");
      }
      else if (element.attr("name") == "card_number") {
        error.insertAfter("#card_number_error");
      }
      else if (element.attr("name") == "exp_month" || element.attr("name") == "exp_year") {
        error.insertAfter("#exp_date_error");
      }
      else {
        error.insertAfter(element);
      }
    }
  });
  // 入力欄or選択欄をフォーカスアウトしたときにバリデーションを実行(ウィザードページ毎)
  $("#nickname, #email, #password, #password_confirmation, #lastname, #firstname, #lastname_kana, #firstname_kana, #select_birth_year, #select_birth_month, #select_birth_day").blur(function () {
    $(this).valid();
  });
  $("#phone_number").blur(function () {
    $(this).valid();
  });
  $("#destination_firstname, #destination_lastname, #destination_firstname_kana, #destination_lastname_kana, #postal_code, #user_address_attributes_prefectures, #city, #address").blur(function () {
    $(this).valid();
  });
  $("#card_number, #exp_month, #exp_year, #cvc").blur(function () {
    $(this).valid();
  });
});