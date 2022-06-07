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

if (file_exists(dirname(__FILE__) . '/vendor/autoload.php')) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

use PrestaShop\PrestaShop\Adapter\SymfonyContainer;
use Promokit\Module\Pkreact\Installer\Installer;
use Promokit\Module\Pkreact\Routes\Routes;
use Promokit\Module\Pkreact\Tabs\Tabs;

class Pkreact extends Module
{
    public function __construct()
    {
        $this->name = 'pkreact';
        $this->version = '1.0.0';
        $this->need_instance = 0;
        $this->author = 'promokit.eu';
        $this->controllers = ['front'];
        $this->tab = 'front_office_features';
        $this->ps_versions_compliancy = ['min' => '1.7.7'];
        $this->displayName = $this->trans('React JS front office');
        $this->description = $this->trans('add React JS front office view');
        parent::__construct();
    }

    public function install()
    {
        $installer = new Installer();

        return parent::install() && $installer->install($this);
    }

    public function getTabs()
    {
        return Tabs::getTabs();
    }

    public function getContent()
    {
        Tools::redirectAdmin(
            SymfonyContainer::getInstance()->get('router')->generate('pkreact_configuration_form')
        );
    }

    public function hookModuleRoutes()
    {
        return Routes::getRoutes($this);
    }    
}