define([
  'order!jquery',
  'order!libs/jquery.mobile/jquery.mobile-1.0.min'
], function($) {
  $(document).ready(function() {
    $("head").append($("<meta name='viewport' content='width=device-width, initial-scale=1'>"));

    if (document.createStyleSheet) {
      document.createStyleSheet('js/libs/jquery.mobile/jquery.mobile-1.0.min.css');
    } else {
      $("head").append($("<link rel='stylesheet' href='js/libs/jquery.mobile/jquery.mobile-1.0.min.css' />"));
    }
  });
  return $;
});