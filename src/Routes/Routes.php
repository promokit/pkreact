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

namespace Promokit\Module\Pkreact\Routes;

use Module;
use Promokit\Module\Pkreact\Db\Db;

class Routes
{
  public static function getRoutes(Module $module): array
  {
    $db = new Db;
    $data = $db->getData();
    $dirs = $data['subdirs'];
    $moduleName = $module->name;
    $moduleController = $module->controllers[0];
    
    $item_params = [
        'fc' => 'module',
        'module' => $moduleName,
    ];

    $routes = [
        // Home 
        'module-'.$moduleName.'-home' => [
            'controller' => $moduleController,
            'rule' => $data['slug'],
            'keywords' => [],
            'params' => $item_params,
        ],
        // Category
        'module-'.$moduleName.'-'.$dirs['category'] => [
            'controller' => $moduleController,
            'rule' => $data['slug'].'/'.$dirs['category'].'/{id}',
            'keywords' => [
                'id' => [
                    'regexp' => '[0-9]+',
                    'param' => 'id'
                ],
            ],
            'params' => $item_params,
        ],
        // Product
        'module-'.$moduleName.'-'.$dirs['product'] => [
            'controller' => $moduleController,
            'rule' => $data['slug'].'/'.$dirs['product'].'/{id}',
            'keywords' => [
                'id' => [
                    'regexp' => '[0-9]+',
                    'param' => 'id'
                ],
            ],
            'params' => $item_params
        ],
        // Manufacturer
        'module-'.$moduleName.'-'.$dirs['manufacturer'] => [
          'controller' => $moduleController,
          'rule' => $data['slug'].'/'.$dirs['manufacturer'].'/{id}',
          'keywords' => [
              'id' => [
                  'regexp' => '[0-9]+',
                  'param' => 'id'
              ],
          ],
          'params' => $item_params
        ],
        // CMS
        'module-'.$moduleName.'-'.$dirs['cmspage'] => [
            'controller' => $moduleController,
            'rule' => $data['slug'].'/'.$dirs['cmspage'].'/{id}',
            'keywords' => [
                'id' => [
                    'regexp' => '[0-9]+',
                    'param' => 'id'
                ],
            ],
            'params' => $item_params
        ],
    ];

    // New Products
    if (isset($dirs['new_products'])) {
        $routes['module-'.$moduleName.'-'.$dirs['new_products']] = [
            'controller' => $moduleController,
            'rule' => $data['slug'].'/'.$dirs['new_products'],
            'keywords' => [],
            'params' => $item_params,
        ];
    }

    return $routes;
  }
}
