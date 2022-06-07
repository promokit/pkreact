<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5f78aa65dddf1bf300a81d778c5ded37
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Promokit\\Module\\Pkreact\\' => 24,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Promokit\\Module\\Pkreact\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5f78aa65dddf1bf300a81d778c5ded37::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5f78aa65dddf1bf300a81d778c5ded37::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5f78aa65dddf1bf300a81d778c5ded37::$classMap;

        }, null, ClassLoader::class);
    }
}