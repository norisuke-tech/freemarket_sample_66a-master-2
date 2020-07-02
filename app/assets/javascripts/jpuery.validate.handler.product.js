$(function () {
  // メソッドの定義
  var methods = {
    price: function (value, element) {
      return this.optional(element) || /^\d+$/.test(value);
    },
  }
  // メソッドの追加
  $.each(methods, function (key) {
    $.validator.addMethod(key, this);
  });
  // バリデーションの実行
  $("#product-form").validate({
    // ルール設定
    rules: {
      "image-box--0": {
        required: true
      },
      "product[name]": {
        required: true,
        rangelength: [1, 40]
      },
      "product[description]": {
        required: true,
        rangelength: [1, 1000]
      },
      "product[category_id]": {
        required: true
      },
      "parent_category": {
        required: true
      },
      "parent": {
        required: true
      },
      "child": {
        required: true
      },
      "parent": {
        required: true,
      },
      "child": {
        required: true,
      },
      "product[size_id]": {
        required: true
      },
      "product[condition]": {
        required: true
      },
      "product[delivery_cost]": {
        required: true
      },
      "product_delivery_origin": {
        required: true
      },
      "product[delivery_origin]": {
        required: true
      },
      "product[delivery_days]": {
        required: true
      },
      "product[price]": {
        required: true,
        price: true,
        range: [300, 9999999]
      },
    },
    // エラーメッセージの定義
    messages: {
      "image-box--0": {
        required: "入力してください"
      },      
      "product[name]": {
        required: "入力してください",
        rangelength: "40文字以内で入力してください"
      },
      "product[description]": {
        required: "入力してください",
        rangelength: "1000文字以内で入力してください"
      },
      "product[category_id]": {
        required: "選択してください"
      },
      "parent_category": {
        required: true
      },
      "parent": {
        required: "選択してください"
      },
      "child": {
        required: "選択してください"
      },
      "parent": {
        required: "選択してください",
      },
      "child": {
        required: "選択してください",
      },
      "product[size_id]": {
        required: "選択してください"
      },
      "product[condition]": {
        required: "選択してください"
      },
      "product[delivery_cost]": {
        required: "選択してください"
      },
      "product_delivery_origin": {
        required: "選択してください"
      },
      "product[delivery_origin]": {
        required: "選択してください"
      },
      "product[delivery_days]": {
        required: "選択してください"
      },
      "product[price]": {
        required: "300以上9999999以下で入力してください",
        price: "半角数字で入力してください",
        range: "300以上9999999以下で入力してください"
      },
    },
    errorClass: "invalid",
    errorElement: "p",
    validClass: "valid",
  });
  // 入力欄or選択欄をフォーカスアウトしたときにバリデーションを実行
  $("#parent_category,#product_name, #description, #parent_category, #child_category, #grandchild_category, #size, #product_condition, #product_delivery_cost, #product_delivery_origin, #product_delivery_days, #price").blur(function () {
    $(this).valid();
  });
});