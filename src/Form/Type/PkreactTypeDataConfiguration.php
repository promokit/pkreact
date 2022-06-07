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

namespace Promokit\Module\Pkreact\Form\Type;

use PrestaShop\PrestaShop\Core\Configuration\DataConfigurationInterface;
use PrestaShop\PrestaShop\Core\ConfigurationInterface;
use Promokit\Module\Pkreact\AppConfig\ConfigManager;
use Promokit\Module\Pkreact\AppConfig\ConfigBuilder;
use Promokit\Module\Pkreact\Db\Db;

/**
 * Configuration is used to save data to configuration table and retrieve from it
 */
final class PkreactTypeDataConfiguration implements DataConfigurationInterface
{
    /**
     * @var ConfigurationInterface
     */
    private $configuration;

    public $db;
    public $builder;
    public $manager;

    /**
     * @param ConfigurationInterface $configuration
     */
    public function __construct(ConfigurationInterface $configuration)
    {
        $this->configuration = $configuration;
        $this->builder = new ConfigBuilder;
        $this->manager = new ConfigManager;
        $this->db = new Db;
    }

    /**
     * {@inheritdoc}
     */
    public function getConfiguration(): array
    {
        return $this->db->getData();
    }

    /**
     * {@inheritdoc}
     */
    public function updateConfiguration(array $configuration): array
    {
        $additionalParams = $this->builder->getAdditionalParams();
        $mergedData = array_merge($configuration, $additionalParams);

        // save data to database
        $db_response = $this->db->setData($mergedData);
        // save data to the JSON file for React App
        $file_response = $this->manager->saveConfig($mergedData);

        return [];
    }

    /**
     * Ensure the parameters passed are valid.
     *
     * @param array $configuration
     *
     * @return bool Returns true if no exception are thrown
     */
    public function validateConfiguration(array $configuration): bool
    {
        return true;
    }
}
