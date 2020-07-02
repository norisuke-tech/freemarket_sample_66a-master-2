$(function(){
  
  //プレビューのhtmlを定義
  function buildHTML(count) {
    var html = `<div class="product-image" id="preview-box__${count}">
                  <div class="product-image__content">
                    <div class="product-image__content--icon">
                      <img src="" width="95" height="116">
                    </div>
                  </div>
                  <div class="product-image__operetion">
                    <div class="product-image__operetion--edit">編集</div>
                    <div class="product-image__operetion--delete" id="delete_btn_${count}">削除</div>
                  </div>
                </div>`
    $('.image-box').before(html);
  }

  // 投稿編集時
  //products/:i/editページへリンクした際のアクション=======================================
  if (window.location.href.match(/\/products\/\d+\/edit/)){
    //プレビューにidを追加
    $('.product-image').each(function(index, box){
      $(box).attr('id', `preview-box__${index}`);
    })
    //削除ボタンにidを追加
    $('.product-image__operetion--delete').each(function(index, box){
      $(box).attr('id', `delete_btn_${index}`);
    })
  }
  //=============================================================================
  $('.image-box').on('click', function(){
    if($('.product-image').length==0){
      $('.error').text("入力してください");  
    }
  })
  // プレビューの追加
  $('.image-box').on('change', '.image-field', function() {
    $('.error').text("");
    //image-fieldのidの数値のみ取得
    var id = $(this).attr('id').replace(/[^0-9]/g, '');
    var count = $('.product-image').length
    //labelのidとforを更新
    $('.image-box').attr({id: `image-box--${count}`,for: `product_images_attributes_${id}_image`});
    //選択したfileのオブジェクトを取得
    var file = this.files[0];
    var reader = new FileReader();
    //readAsDataURLで指定したFileオブジェクトを読み込む
    reader.readAsDataURL(file);
    //読み込み時に発火するイベント
    reader.onload = function() {
      var image = this.result;
      //プレビューが元々なかった場合はhtmlを追加
      if ($(`#preview-box__${id}`).length == 0) {
        var html = buildHTML(id);
        //labelの直前のプレビュー群にプレビューを追加
        var prevContent = $('.image-content').prev();
        $(prevContent).append(html);
      }
      //イメージを追加
      $(`#preview-box__${id} img`).attr('src', `${image}`);

      //プレビュー削除したフィールドにdestroy用のチェックボックスがあった場合、チェックを外す=============
      if ($(`#product_images_attributes_${id}__destroy`)){
        $(`#product_images_attributes_${id}__destroy`).prop('checked',false);
      } 
      //=============================================================================

      //labelのidとforの値を変更
      var count = $('.product-image').length
      $('.image-box').attr({id: `image-box--${count}`,for: `product_images_attributes_${count}_image`});
    }
  });

  // 画像の削除
  $(document).on('click', '.product-image__operetion--delete', function() {
    var id = $(this).attr('id').replace(/[^0-9]/g, '');
    $(`#preview-box__${id}`).remove();

    //新規登録時と編集時の場合分け==========================================================

    //新規投稿時
    //削除用チェックボックスの有無で判定
    if ($(`#product_images_attributes_${id}__destroy`).length == 0) {
      //フォームの中身を削除 
      $(`#product_images_attributes_${id}_image`).val("");

      var count = $('.product-image').length
      $('.image-box').attr({id: `image-box--${count}`,for: `product_images_attributes_${id}_image`});

    } else {

      //投稿編集時
      $(`#product_images_attributes_${id}__destroy`).prop('checked',true);

      //削除したプレビューのidによって、ラベルのidを変更する
        var count = $('.product-image').length
        $('.image-box').attr({id: `image-box--${count}`,for: `product_images_attributes_${id}_image`});
    }
    //=============================================================================
  });
});
