<?php
/**
* 2007-2022 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

class PkreactHomeModuleFrontController extends ModuleFrontController
{
    public function __construct()
    {
        parent::__construct();

        $this->assets = 'pkreact/app/build/static/';
    }

    public function initContent()
    {   
        $this->context->smarty->assign([
            'js' => $this->getFile('js'),
            'css' => $this->getFile('css')
        ]);

        //$f = $this->getIndexFile();
        //print_r($f);

        $this->setTemplate('module:pkreact/views/templates/front/home.tpl');
    }

    public function setMedia($isNewTheme = false)
    {
        //echo $this->module->getPathUri().'app/build/static/js/main.64f29f1b.js';
        Context::getContext()->controller->registerJavascript('addon', 'modules/'.$this->assets.'js/main.64f29f1b.js', ['position' => 'bottom']);
        //$this->addCSS($this->module->getPathUri().'app/build/static/css/main.14858acb.css');
        //$this->addJS($this->module->getPathUri().'app/build/static/js/main.64f29f1b.js');
    }

    public function getIndexFile() {
        $filename = $this->assets.'index.html';
        $handle = fopen($filename, 'r');
        $contents = fread($handle, filesize($filename));
        fclose($handle);
        return $contents;
    }

    public function getFile($type)
    {
        $files = glob(_PS_MODULE_DIR_.$this->assets.$type.'/*.'.$type);
        
        if (empty($files)) return false;

        // find main file
        foreach ($files as $file)
        {
            if (strpos(basename($file), 'main') !== false) {
                return _MODULE_DIR_.$this->assets.$type.'/'.basename($file);
            }
        }
    }
}