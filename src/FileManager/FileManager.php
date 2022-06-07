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

namespace Promokit\Module\Pkreact\FileManager;

class FileManager
{
  public function writeToFile(string $data, string $file): string
  {
      if (!$fileHolder = @fopen($file, 'w')) {
          return "Unable to open file {$file}";
      }

      if (!fwrite($fileHolder, $data)) {
          fclose($fileHolder);
          return 'Unable to save file '.$file;
      }

      fclose($fileHolder);
      return 'Ok';
  }

  public function readFile(string $file): string
  {
      if (!$f = @fopen($file, 'r')) {
          return "Unable to open file {$file}";
      }

      $code = '';

      if (file_exists($file) && filesize($file) !== false)
      {
          $code = @fread($f, filesize($file));
          fclose($f);
      }

      return $code;
  }
}
