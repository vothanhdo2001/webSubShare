<?php

class Request
{
    public $shId;
    public $reId;
    public $cuId;
    public $pName;
    public $pLanguage;
    public $category;
    public $imagesLink;
    public $videoLink;
    public $price;
    public $info;
    public $tRequest;
    public $private;
    public $rate;
}
class Share extends Request
{
    public $shId;
    public $subLink;
    public $tShare;
    public $rate;
}

?>