<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    @yield('styles')
</head>
<body>

<div class="wrapper" style="background-color:#345d7c">
  <div class="container" style="background-color:#fff">
    <div id="app"></div>
  </div>
</div>

<script src="{{ mix('/js/app.js') }}"></script>
@stack('scripts')
</body>
</html>
