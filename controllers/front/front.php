<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */

declare(strict_types=1);

class PkreactFrontModuleFrontController extends ModuleFrontController
{
    public function __construct()
    {
        parent::__construct();

        $this->assets = "{$this->module->name}/app/build/static/";
        $this->template = "module:{$this->module->name}/views/templates/front/front.tpl";
    }

    public function initContent(): void
    {   
        $this->context->smarty->assign([
            'js' => $this->getFile('js'),
            'css' => $this->getFile('css')
        ]);

        $this->setTemplate($this->template);
    }

    public function getFile(string $type): string
    {
        $files = glob(_PS_MODULE_DIR_.$this->assets.$type.'/*.'.$type);
        
        if (empty($files)) return '';

        // find main file
        foreach ($files as $file)
        {
            if (strpos(basename($file), 'main') !== false) {
                return _MODULE_DIR_.$this->assets.$type.'/'.basename($file);
            }
        }

        return '';
    }
}