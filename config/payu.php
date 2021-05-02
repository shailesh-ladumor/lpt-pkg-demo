<?php

return [
    'merchant_key' => env('PAYU_MERCHANT_KEY'),
    'salt_key' => env('PAYU_SALT_KEY'),
    'test_mode' => env('PAYU_TEST_MODE', true),
];
