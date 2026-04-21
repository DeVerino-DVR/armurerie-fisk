ConfigCraft = {}

-- ['Weapon'] = { 
--     hashname = 'WEAPON_MELEE_KNIFE_TRADER',
--     locations = { (Id of the locations or 'all')},
--     costcraft = false,
--     exp = { required = (Experience required), reward = (Experience gain when crafting) },
--     craft = {
--         { label = (Name to be displayed in the menu), item = (Name of the required item), amount = (Quantity required for the item) },
--     },
-- },

-- ['Ammo'] = { 
--     item = (Name of the item to craft),
--     locations = { (Id of the locations or 'all')},
--     costcraft = false,
--     exp = { required = (Experience required), reward = (Experience gain when crafting) },
--     craft = {
--         { label = (Name to be displayed in the menu), item = (Name of the required item), amount = (Quantity required for the item) },
--     },
-- },

-- NOTE: If you add 1 'all' location the product will be in all locations.

ConfigCraft.Crafts = {
    [_U('Weapons')] = {
        [_U('Melee')] = {
            -- [_U('TraddersKnife')] = { 
            --     hashname = 'WEAPON_MELEE_KNIFE_TRADER',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 14 },
            --         { label = 'Wood', item = 'wood', amount = 7 },
            --     },
            -- },

            [_U('Knife')] = { --couteau
                hashname = 'WEAPON_MELEE_KNIFE',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 2
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 1
                }}
            },
            -- [_U('JawBoneKnife')] = { 
            --     hashname = 'WEAPON_MELEE_KNIFE_JAWBONE',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 15 },
            --         { label = 'Wood', item = 'wood', amount = 2 },
            --     },
            -- },
            -- [_U('Cleaver')] = { 
            --     hashname = 'WEAPON_MELEE_CLEAVER',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 22 },
            --         { label = 'Wood', item = 'wood', amount = 7 },
            --     },
            -- },
            -- [_U('Hatchet')] = { 
            --     hashname = 'WEAPON_MELEE_HATCHET',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 20 },
            --         { label = 'Wood', item = 'wood', amount = 4 },
            --     },
            -- },
            [_U('HunterHatchet')] = { -- Hachette de chasseur
                hashname = 'WEAPON_MELEE_HATCHET_HUNTER',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 4
                }, {
                    label = 'Petit cuir',
                    item = 'small_leather',
                    amount = 2
                }}
            },
            [_U('Machete')] = { -- Machette
                hashname = 'WEAPON_MELEE_MACHETE',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 4
                }, {
                    label = 'Petit cuir',
                    item = 'small_leather',
                    amount = 2
                }}
            },
            -- [_U('CollectorMachete')] = { 
            --     hashname = 'WEAPON_MELEE_MACHETE_COLLECTOR',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 40 },
            --         { label = 'Wood', item = 'wood', amount = 10 },
            --     },
            -- },
            -- [_U('KnifeHorror')] = { 
            --     hashname = 'WEAPON_MELEE_KNIFE_HORROR',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Lingot de fer', item = 'ingot_iron', amount = 1 },
            --         { label = 'Planche', item = 'wood_plank', amount = 2 },
            --     },
            -- },
            [_U('Hammer')] = { -- Marteau
                hashname = 'WEAPON_MELEE_HAMMER',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 4
                }, {
                    label = 'Petit cuir',
                    item = 'small_leather',
                    amount = 2
                }}
            }
            -- [_U('Torch')] = { 
            --     hashname = 'WEAPON_MELEE_TORCH',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Hard wood', item = 'hwood', amount = 20 },
            --         { label = 'Wood', item = 'wood', amount = 5 },
            --     },
            -- },
            -- [_U('LanternHalloween')] = { 
            --     hashname = 'WEAPON_MELEE_LANTERN_HALLOWEEN',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 50 },
            --         { label = 'Sulfur', item = 'sulfur', amount = 10 },
            --     },
            -- },
            -- [_U('MetalDetector')] = { 
            --     hashname = 'WEAPON_KIT_METAL_DETECTOR',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 30 },
            --     },
            -- },
        },
        -- [_U('Bows')] = {
        --     [_U('Bow')] = { 
        --         hashname = 'WEAPON_BOW',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Bâton de bois', item = 'stick', amount = 5 },
        --             { label = 'Wood', item = 'wood', amount = 2 },
        --         },
        --     },
        --     [_U('ImprovedBow')] = { 
        --         hashname = 'WEAPON_BOW_IMPROVED',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Bâton de bois', item = 'stick', amount = 5 },
        --             { label = 'Wood', item = 'wood', amount = 2 },
        --         },
        --     },
        -- },
        [_U('Rifles')] = {
            [_U('ElephantRifle')] = { -- Fusil à éléphant
                hashname = 'WEAPON_RIFLE_ELEPHANT',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 3
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 4
                }, {
                    label = 'Lingot d\'or',
                    item = 'gold_ingot',
                    amount = 3
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('VarmintRifle')] = { -- Fusil à petit gibier
                hashname = 'WEAPON_RIFLE_VARMINT',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 1
                }}
            },
            -- [_U('RollingblockRifle')] = { 
            --     hashname = 'WEAPON_SNIPERRIFLE_ROLLINGBLOCK',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 150 },
            --         { label = 'Wood', item = 'wood', amount = 60 },
            --     },
            -- },
            -- [_U('CarcanoRifle')] = { 
            --     hashname = 'WEAPON_SNIPERRIFLE_CARCANO',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 250 },
            --         { label = 'Wood', item = 'wood', amount = 100 },
            --     },
            -- },
            [_U('SpringfieldRifle')] = { -- Fusil Springfield
                hashname = 'WEAPON_RIFLE_SPRINGFIELD',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 3
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('BoltactionRifle')] = { -- Fusil à verrou
                hashname = 'WEAPON_RIFLE_BOLTACTION',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 5
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 4
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            }
        },
        [_U('Repeaters')] = {
            [_U('WinchesterRepeater')] = { -- Lancaster
                hashname = 'WEAPON_REPEATER_WINCHESTER',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 4
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 3
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('HenryRepeater')] = { -- Litchfield
                hashname = 'WEAPON_REPEATER_HENRY',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 4
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 3
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('EvansRepeater')] = { -- Carabine Evans
                hashname = 'WEAPON_REPEATER_EVANS',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 3
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 3
                }}
            },
            [_U('CarbineRepeater')] = { -- Carabine à répétition
                hashname = 'WEAPON_REPEATER_CARBINE',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 2
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 3
                }}
            }
        },
        [_U('Pistols')] = {
            [_U('Volcanic')] = { -- Volcanic
                hashname = 'WEAPON_PISTOL_VOLCANIC',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('M1899')] = { -- M1899
                hashname = 'WEAPON_PISTOL_M1899',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('SemiAuto')] = { -- Pistolet semi-automatique
                hashname = 'WEAPON_PISTOL_SEMIAUTO',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('Mauser')] = { -- Mauser
                hashname = 'WEAPON_PISTOL_MAUSER',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            }
        },
        [_U('Revolvers')] = {
            [_U('Schofield')] = { -- Schofield
                hashname = 'WEAPON_REVOLVER_SCHOFIELD',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('Lemat')] = { -- LeMat
                hashname = 'WEAPON_REVOLVER_LEMAT',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 2
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('DoubleAction')] = { -- Double Action
                hashname = 'WEAPON_REVOLVER_DOUBLEACTION',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 1
                }}
            },
            [_U('Cattleman')] = { -- Cattleman
                hashname = 'WEAPON_REVOLVER_CATTLEMAN',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('Navy')] = { -- Navy
                hashname = 'WEAPON_REVOLVER_NAVY',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            }
            -- [_U('NavyCrossover')] = { 
            --     hashname = 'WEAPON_REVOLVER_NAVY_CROSSOVER',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 75 },
            --         { label = 'Wood', item = 'wood', amount = 25 },
            --     },
            -- },
        },
        [_U('Throwable')] = {
            -- [_U('Tomahawk')] = { 
            --     hashname = 'WEAPON_THROWN_TOMAHAWK',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 45 },
            --         { label = 'Wood', item = 'wood', amount = 10 },
            --     },
            -- },
            [_U('Knives')] = { -- Couteaux de lancer
                hashname = 'WEAPON_THROWN_THROWING_KNIVES',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Grosse pièce de cuir',
                    item = 'big_leather',
                    amount = 2
                }, {
                    label = 'Chiffon de tissu',
                    item = 'cloth',
                    amount = 2
                }}
            },
            -- [_U('PoisonBottle')] = { 
            --     hashname = 'WEAPON_THROWN_POISONBOTTLE',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 70 },
            --         { label = 'Wood', item = 'wood', amount = 30 },
            --     },
            -- },
            -- [_U('Bolas')] = { 
            --     hashname = 'WEAPON_THROWN_BOLAS',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Grosse pièce de cuir', item = 'big_leather', amount = 2 },
            --         { label = 'Laine', item = 'whool', amount = 2 },
            --     },
            -- },
            -- [_U('BolasHawkmoth')] = { 
            --     hashname = 'WEAPON_THROWN_BOLAS_HAWKMOTH',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 100 },
            --         { label = 'Wood', item = 'wood', amount = 50 },
            --     },
            -- },
            [_U('BolasIronspiked')] = { -- Bolas à pointes de fer
                hashname = 'WEAPON_THROWN_BOLAS_IRONSPIKED',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Grosse pièce de cuir',
                    item = 'big_leather',
                    amount = 2
                }, {
                    label = 'Chiffon',
                    item = 'cloth',
                    amount = 2
                }}
            }
            -- [_U('BolasIntertwined')] = { 
            --     hashname = 'WEAPON_THROWN_BOLAS_INTERTWINED',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 100 },
            --         { label = 'Wood', item = 'wood', amount = 50 },
            --     },
            -- },
            -- [_U('Dynamite')] = { 
            --     hashname = 'WEAPON_THROWN_DYNAMITE',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 250 },
            --         { label = 'Wood', item = 'wood', amount = 100 },
            --     },
            -- },
            -- [_U('Molotov')] = { 
            --     hashname = 'WEAPON_THROWN_MOLOTOV',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 150 },
            --         { label = 'Wood', item = 'wood', amount = 50 },
            --     },
            -- },
        },
        [_U('Shotguns')] = {
            ['Semiauto Shotgun'] = { -- Fusil à pompe semi-automatique
                hashname = 'WEAPON_SHOTGUN_SEMIAUTO',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 4
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 4
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('Sawedoff')] = { -- Canon scié
                hashname = 'WEAPON_SHOTGUN_SAWEDOFF',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 3
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 2
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 2
                }}
            },
            [_U('Repeating')] = { -- Fusil à pompe à répétition
                hashname = 'WEAPON_SHOTGUN_REPEATING',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 4
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 4
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('Pump')] = { -- Fusil à pompe
                hashname = 'WEAPON_SHOTGUN_PUMP',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 4
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 4
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            },
            [_U('Doublebarrel')] = { -- Double canon
                hashname = 'WEAPON_SHOTGUN_DOUBLEBARREL',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 3
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 3
                }, {
                    label = 'Planche',
                    item = 'wood_plank',
                    amount = 4
                }}
            }
            -- [_U('DoublebarrelExotic')] = { 
            --     hashname = 'WEAPON_SHOTGUN_DOUBLEBARREL_EXOTIC',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Lingot de fer', item = 'ingot_iron', amount = 6 },
            --         { label = 'Lingot de cuivre', item = 'copper', amount = 5 },
            --         { label = 'Planche', item = 'wood_plank', amount = 4 },
            --     },
            -- },
        },
        [_U('Misc')] = {
            [_U('Lasso')] = { -- Lasso
                hashname = 'WEAPON_LASSO',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Petit cuir',
                    item = 'small_leather',
                    amount = 1
                }, {
                    label = 'Chiffon de tissu',
                    item = 'cloth',
                    amount = 1
                }}
            },
            [_U('ReinforcedLasso')] = { -- Lasso renforcé
                hashname = 'WEAPON_LASSO_REINFORCED',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Linge de coton',
                    item = 'clothe_coton',
                    amount = 2
                }, {
                    label = 'Chiffon de tissu',
                    item = 'cloth',
                    amount = 2
                }, {
                    label = 'Petit cuir',
                    item = 'small_leather',
                    amount = 2
                }}
            },
            -- [_U('ImprovedBinoculars')] = { 
            --     hashname = 'WEAPON_KIT_BINOCULARS_IMPROVED',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Minerai de fer', item = 'iron', amount = 2 },
            --     },
            -- },
            [_U('Binoculars')] = { -- Jumelles
                hashname = 'WEAPON_KIT_BINOCULARS',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }}
            }
            -- [_U('FishingRod')] = { 
            --     hashname = 'WEAPON_FISHINGROD',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Hard wood', item = 'hwood', amount = 5 },
            --         { label = 'Wood', item = 'wood', amount = 25 },
            --     },
            -- },
            -- [_U('Camera')] = { 
            --     hashname = 'WEAPON_KIT_CAMERA',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 35 },
            --     },
            -- },
            -- [_U('AdvancedCamera')] = { 
            --     hashname = 'WEAPON_kIT_CAMERA_ADVANCED',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 60 },
            --     },
            -- },
            -- [_U('Lantern')] = { 
            --     hashname = 'WEAPON_MELEE_LANTERN',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 50 },
            --         { label = 'Wood', item = 'wood', amount = 10 },
            --     },
            -- },
            -- [_U('DavyLantern')] = { 
            --     hashname = 'WEAPON_MELEE_DAVY_LANTERN',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 70 },
            --         { label = 'Wood', item = 'wood', amount = 20 },
            --     },
            -- },
        }
    },
    [_U('Ammo')] = {
        [_U('RepeaterAmmo')] = {
            [_U('RepeaterAmmoNormal')] = { -- Munitions carabine
                item = 'ammorepeaternormal',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 2
                }}
            },
            [_U('RepeaterAmmoExpress')] = { -- Carabine express
                item = 'ammorepeaterexpress',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Sac de charbon',
                    item = 'charcoal_bag',
                    amount = 1
                }}
            },
            -- [_U('RepeaterAmmoExplosive')] = { 
            --     item = 'ammorepeaterexplosive',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 60 },
            --     },
            -- },
            [_U('RepeaterAmmoVelocity')] = { -- Carabine véloce
                item = 'ammorepeatervelocity',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            },
            [_U('RepeaterAmmoSplitpoint')] = { -- Carabine Tête creuse
                item = 'ammorepeatersplitpoint',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            }
        },

        [_U('RevolverAmmo')] = {
            [_U('RevolverAmmoNormal')] = { -- Munitions revolver
                item = 'ammorevolvernormal',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 2
                }}
            },
            [_U('RevolverAmmoExpress')] = { -- Revolver express
                item = 'ammorevolverexpress',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Sac de charbon',
                    item = 'charcoal_bag',
                    amount = 1
                }}
            },
            -- [_U('RevolverAmmoExplosive')] = { 
            --     item = 'ammorevolverexplosive',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 50 },
            --     },
            -- },
            [_U('RevolverAmmoVelocity')] = { -- Revolver véloce
                item = 'ammorevolvervelocity',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            },
            [_U('RevolverAmmoSplitpoint')] = { -- Revolver Tête creuse
                item = 'ammorevolversplitpoint',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            }
        },

        [_U('RifleAmmo')] = {
            [_U('RifleAmmoNormal')] = { -- Munitions fusil
                item = 'ammoriflenormal',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 2
                }}
            },
            [_U('ElephantRifleAmmo')] = { -- Munitions fusil à éléphant
                item = 'ammoelephant',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Lingot de fer',
                    item = 'iron_ingot',
                    amount = 1
                }, {
                    label = 'Lingot de cuivre',
                    item = 'copper_ingot',
                    amount = 1
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 8
                }}
            },
            [_U('RifleAmmoExpress')] = { -- Fusil express
                item = 'ammorifleexpress',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Sac de charbon',
                    item = 'charcoal_bag',
                    amount = 1
                }}
            },
            -- [_U('RifleAmmoExplosive')] = { 
            --     item = 'ammorifleexplosive',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 70 },
            --     },
            -- },
            [_U('RifleAmmoVelocity')] = { -- Fusil véloce
                item = 'ammoriflevelocity',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            },
            [_U('RifleAmmoSplitpoint')] = { -- Fusil Tête creuse
                item = 'ammoriflesplitpoint',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            }
        },
        [_U('ShotgunAmmo')] = {
            -- [_U('ShotgunAmmoIncendiary')] = { 
            --     item = 'ammoshotgunincendiary',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 30 },
            --     },
            -- },
            -- [_U('ShotgunAmmoExplosive')] = { 
            --     item = 'ammoshotgunexplosive',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 60 },
            --     },
            -- },
            [_U('ShotgunAmmoNormal')] = { -- Munitions pompe
                item = 'ammoshotgunnormal',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 2
                }}
            },
            ['Shotgun Ammo Slug'] = { -- Pompe slug
                item = 'ammoshotgunslug',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            }
        },
        [_U('PistolAmmo')] = {
            [_U('PistolAmmoNormal')] = { -- Munitions pistolet
                item = 'ammopistolnormal',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 2
                }}
            },
            [_U('PistolAmmoExpress')] = { -- Pistolet express
                item = 'ammopistolexpress',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Sac de charbon',
                    item = 'charcoal_bag',
                    amount = 1
                }}
            },
            -- [_U('PistolAmmoExplosive')] = { 
            --     item = 'ammopistolexplosive',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 50 },
            --     },
            -- },
            [_U('PistolAmmoVelocity')] = { -- Pistolet véloce
                item = 'ammopistolvelocity',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            },
            [_U('PistolAmmoSplitpoint')] = { -- Pistolet Tête creuse
                item = 'ammopistolsplitpoint',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 4
                }}
            }
        },
        -- [_U('ArrowAmmo')] = {
        --     [_U('ArrowNormal')] = { 
        --         item = 'ammoarrownormal',
        --         amount = 1,
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Iron', item = 'iron', amount = 10 },
        --             { label = 'Wood', item = 'wood', amount = 4 },
        --         },
        --     },
        --     [_U('ArrowFire')] = { 
        --         item = 'ammoarrowfire',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Iron', item = 'iron', amount = 10 },
        --             { label = 'Wood', item = 'wood', amount = 4 },
        --             { label = 'Sulfur', item = 'sulfur', amount = 1 },
        --         },
        --     },
        --     [_U('ArrowImproved')] = { 
        --         item = 'ammoarrowimproved',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Iron', item = 'iron', amount = 20 },
        --             { label = 'Wood', item = 'wood', amount = 8 },
        --         },
        --     },
        --     [_U('ArrowSmallGame')] = { 
        --         item = 'ammoarrowsmallgame',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Iron', item = 'iron', amount = 8 },
        --             { label = 'Wood', item = 'wood', amount = 1 },
        --         },
        --     },
        --     [_U('ArrowPoison')] = { 
        --         item = 'ammoarrowpoison',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Iron', item = 'iron', amount = 10 },
        --             { label = 'Sulfur', item = 'sulfur', amount = 20 },
        --         },
        --     },
        --     [_U('ArrowDynamite')] = { 
        --         item = 'ammoarrowdynamite',
        --         locations = { 'all' },
        --         costcraft = false,
        --         exp = { required = 0, reward = 5 },
        --         craft = {
        --             { label = 'Iron', item = 'iron', amount = 10 },
        --             { label = 'Wood', item = 'wood', amount = 4 },
        --             { label = 'Sulfur', item = 'sulfur', amount = 40 },
        --         },
        --     },
        -- },
        [_U('VarmintAmmo')] = {
            [_U('VarmintAmmo')] = { -- Munitions petit gibier
                item = 'ammovarmint',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Charbon',
                    item = 'coal',
                    amount = 2
                }}
            }
            -- [_U('VarmintTranquilizerAmmo')] = { 
            --     item = 'ammovarminttranq',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Lingot de fer', item = 'ingot_iron', amount = 1 },
            --         { label = 'Lingot de cuivre', item = 'copper', amount = 1 },
            --         { label = 'Sac de charbon', item = 'sac_de_charbon', amount = 1 },
            --     },
            -- },
        },
        [_U('ThrowingAmmo')] = {
            [_U('KnivesAmmo')] = { -- Couteaux de lancer
                item = 'ammoknives',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Minerai de fer',
                    item = 'iron',
                    amount = 2
                }, {
                    label = 'Petite pièce de cuir',
                    item = 'small_leather',
                    amount = 2
                }}
            },
            -- [_U('TomahawkAmmo')] = { 
            --     item = 'ammotomahawk',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 20 },
            --     },
            -- },
            -- [_U('HatchetAmmo')] = { 
            --     item = 'ammohatchet',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 20 },
            --     },
            -- },
            -- [_U('HatchetCleaverAmmo')] = { 
            --     item = 'ammohatchetcleaver',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 20 },
            --     },
            -- },
            -- [_U('HatchetHunterAmmo')] = { 
            --     item = 'ammohatchethunter',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Minerai de fer', item = 'iron', amount = 2 },
            --         { label = 'Petite pièce de cuir', item = 'small_leather', amount = 2 },
            --     },
            -- },
            -- [_U('PoisonBottleAmmo')] = { 
            --     item = 'ammopoisonbottle',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 40 },
            --     },
            -- },
            -- [_U('BolasAmmo')] = { 
            --     item = 'ammobolla',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Laine', item = 'whool', amount = 2 },
            --         { label = 'Petite pièce de cuir', item = 'small_leather', amount = 2 },
            --     },
            -- },
            -- [_U('DynamiteAmmo')] = { 
            --     item = 'ammodynamite',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 45 },
            --     },
            -- },
            -- [_U('VolatileDynamiteAmmo')] = { 
            --     item = 'ammovoldynamite',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 50 },
            --     },
            -- },
            -- [_U('MolotovAmmo')] = { 
            --     item = 'ammomolotov',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 20 },
            --     },
            -- },
            -- [_U('VolatileMolotovAmmo')] = { 
            --     item = 'ammovolmolotov',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 25 },
            --     },
            -- },
            -- [_U('BolasAmmo')] = { 
            --     item = 'ammobola',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 35 },
            --         { label = 'Wood', item = 'wood', amount = 15 },
            --     },
            -- },
            -- [_U('BolasHawkmothAmmo')] = { 
            --     item = 'ammobolahawk',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 35 },
            --         { label = 'Wood', item = 'wood', amount = 15 },
            --     },
            -- },
            [_U('BolasIronspikedAmmo')] = { -- Bolas à pointes en fer
                item = 'ammobolaironspiked',
                amount = 1,
                locations = {'all'},
                costcraft = false,
                exp = {
                    required = 0,
                    reward = 5
                },
                craft = {{
                    label = 'Chiffon de tissu',
                    item = 'cloth',
                    amount = 2
                }, {
                    label = 'Petite pièce de cuir',
                    item = 'small_leather',
                    amount = 2
                }}
            }
            -- [_U('BolasIntertwinedAmmo')] = { 
            --     item = 'ammobolaintertwined',
            --     locations = { 'all' },
            --     costcraft = false,
            --     exp = { required = 0, reward = 5 },
            --     craft = {
            --         { label = 'Iron', item = 'iron', amount = 35 },
            --         { label = 'Wood', item = 'wood', amount = 15 },
            --     },
            -- },
        }
    }
}
