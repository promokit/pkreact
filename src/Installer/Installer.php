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

namespace Promokit\Module\Pkreact\Installer;

use Module;
use Promokit\Module\Pkreact\Db\Db;
use Promokit\Module\Pkreact\FileManager\FileManager;
use Promokit\Module\Pkreact\AppConfig\ConfigBuilder;

class Installer
{
  /**
   * Module's installation entry point.
   *
   * @param Module $module
   *
   * @return bool
   */
  public function install(Module $module): bool
  {
    if (!$this->registerHooks($module) || !$this->importDefaultConfig()) {
        return false;
    }

    return true;
  }

  /**
   * Register hooks for the module.
   *
   * @see https://devdocs.prestashop.com/1.7/modules/concepts/hooks/
   *
   * @param Module $module
   *
   * @return bool
   */
  private function registerHooks(Module $module): bool
  {
    $hooks = [
      'moduleRoutes'
    ];

    return (bool)$module->registerHook($hooks);
  }

  private function importDefaultConfig(): bool
  {
    $builder = new ConfigBuilder;
    $db = new Db;

    $configJson = $this->readConfigFile();

    if (empty($configJson)) return false;
    
    $additionalParams = $builder->getAdditionalParams();
    $mergedData = array_merge($configJson, $additionalParams);

    // save data to database
    $db_response = $db->setData($mergedData);

    return empty($db_response) ? true : false;
  }

  private function readConfigFile(): array
  {
    $fileManager = new FileManager;
    $moduleConfigFile = dirname(__FILE__).'/../../config/config.json';

    $configJson = json_decode($fileManager->readFile($moduleConfigFile));

    if (!$configJson) {
      return [];
    }

    return (array)$configJson;
  }
}
