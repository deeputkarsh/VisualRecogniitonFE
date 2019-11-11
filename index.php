<!--
  /* Redirect http to https */
  <?php if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;
  } ?>-->
<!doctype html>
<html lang="en">
  <head>
    <base href="/" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes"
    />
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#f4f8f9"/>
    <title>Visual Recognition</title>
  <link rel="shortcut icon" href="/favicon.ico"><link href="/main.fc1d587400ec4b223fea.css" rel="stylesheet"></head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  <script type="text/javascript" src="/1.fc1d587400ec4b223fea.js"></script><script type="text/javascript" src="/fc1d587400ec4b223fea.js"></script></body>
</html>
