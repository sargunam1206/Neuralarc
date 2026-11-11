<?php
// Serves the pre-rendered "page not found" page (404.html, built by
// scripts/prerender.mjs) with a real 404 status. .htaccess routes every
// unknown URL here, because this host ignores ErrorDocument for static files.
http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-cache');
readfile(__DIR__ . '/404.html');
