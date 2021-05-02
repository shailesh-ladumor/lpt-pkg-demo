<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Class PayuMoneyController
 */
class PayuMoneyController extends \InfyOm\Payu\PayuMoneyController
{
    public function paymentCancel(Request $request)
    {
        $data = $request->all();
        echo "<pre>";
        print_r($data);
        die;
        // your code here
    }
    
    public function paymentSuccess(Request $request)
    {
        $data = $request->all();
        $validHash = $this->checkHasValidHas($data);
        
        if (!$validHash) {
            echo "Invalid Transaction. Please try again";
        } else {
            // success code here
        }
    }
}
