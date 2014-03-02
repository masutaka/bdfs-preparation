function ctrlRead($scope) {
    $scope.combinations = [
        {"item1":       "獣の肝",
         "item2":       "獣の肝",
         "result":      "ビーストパワー",
         "description": "4ターンの間対象の物理攻撃力を75%アップ"},
        {"item1":       "獣の肝",
         "item2":       "硬い鱗",
         "result":      "ビーストシールド",
         "description": "4ターンの間対象の物理防御力を25%アップ"},
        {"item1":       "獣の肝",
         "item2":       "死霊の骨",
         "result":      "ビーストオーラ",
         "description": "4ターンの間対象の魔法攻撃力を25%アップ"},
        {"item1":       "獣の肝",
         "item2":       "悪魔の尻尾",
         "result":      "ビーストソウル",
         "description": "4ターンの間対象の魔法防御力を25%アップ"},
        {"item1":       "獣の肝",
         "item2":       "竜の牙",
         "result":      "巨人の薬",
         "description": "対象の最大HPが2倍になり全回復する"},

        {"item1":       "硬い鱗",
         "item2":       "獣の肝",
         "result":      "アクアパワー",
         "description": "4ターンの間対象の物理攻撃力を25%アップ"},
        {"item1":       "硬い鱗",
         "item2":       "硬い鱗",
         "result":      "アクアシールド",
         "description": "4ターンの間対象の物理防御力を25%アップ"},
        {"item1":       "硬い鱗",
         "item2":       "死霊の骨",
         "result":      "アクアオーラ",
         "description": "4ターンの間対象の魔法攻撃力を25%アップ"},
        {"item1":       "硬い鱗",
         "item2":       "悪魔の尻尾",
         "result":      "アクアソウル",
         "description": "4ターンの間対象の魔法防御力を50%アップ"},
        {"item1":       "硬い鱗",
         "item2":       "竜の牙",
         "result":      "亀の甲羅割り",
         "description": "4ターンの間対象の防御力を下げる"},

        {"item1":       "虫の触角",
         "item2":       "獣の肝",
         "result":      "インセクパワー",
         "description": "4ターンの間対象の物理攻撃力を50%アップ"},
        {"item1":       "虫の触角",
         "item2":       "硬い鱗",
         "result":      "インセクシールド",
         "description": "4ターンの間対象の物理防御力を25%アップ"},
        {"item1":       "虫の触角",
         "item2":       "死霊の骨",
         "result":      "インセクオーラ",
         "description": "4ターンの間対象の魔法攻撃力を25%アップ"},
        {"item1":       "虫の触角",
         "item2":       "悪魔の尻尾",
         "result":      "インセクソウル",
         "description": "4ターンの間対象の魔法防御力を25%アップ"},
        {"item1":       "虫の触角",
         "item2":       "竜の牙",
         "result":      "ヘイストドリンク",
         "description": "4ターンの間対象の行動速度が上昇する"},
        {"item1":       "虫の触角",
         "item2":       "フロギストン",
         "result":      "ウィークファイア",
         "description": "対象の弱点に火属性を加える"},
        {"item1":       "虫の触角",
         "item2":       "六花晶",
         "result":      "ウィークアクア",
         "description": "対象の弱点に水属性を加える"},
        {"item1":       "虫の触角",
         "item2":       "妖精の羽根",
         "result":      "ウィークウィンド",
         "description": "対象の弱点に風属性を加える"},
        {"item1":       "虫の触角",
         "item2":       "稲妻の欠片",
         "result":      "ウィークサンダー",
         "description": "対象の弱点に雷属性を加える"},
        {"item1":       "虫の触角",
         "item2":       "砂のバラ",
         "result":      "ウィークアース",
         "description": "対象の弱点に土属性を加える"},
        {"item1":       "虫の触角",
         "item2":       "ピカピカ虫",
         "result":      "ウィークライト",
         "description": "対象の弱点に光属性を加える"},
        {"item1":       "虫の触角",
         "item2":       "ダークマター",
         "result":      "ウィークダーク",
         "description": "対象の弱点に闇属性を加える"},

        {"item1":       "魔物の繊維",
         "item2":       "獣の肝",
         "result":      "プラントパワー",
         "description": "4ターンの間対象の物理攻撃力を25%アップ"},
        {"item1":       "魔物の繊維",
         "item2":       "硬い鱗",
         "result":      "プラントシールド",
         "description": "4ターンの間対象の物理防御力を25%アップ"},
        {"item1":       "魔物の繊維",
         "item2":       "死霊の骨",
         "result":      "プラントオーラ",
         "description": "4ターンの間対象の魔法攻撃力を50%アップ"},
        {"item1":       "魔物の繊維",
         "item2":       "悪魔の尻尾",
         "result":      "プラントソウル",
         "description": "4ターンの間対象の魔法防御力を25%アップ"},
        {"item1":       "魔物の繊維",
         "item2":       "竜の牙",
         "result":      "エレメントパワー",
         "description": "5ターンの間対象の属性攻撃力が上昇する"},
        {"item1":       "魔物の繊維",
         "item2":       "フロギストン",
         "result":      "レジストファイア",
         "description": "対象が受ける火属性ダメージを無効化する"},
        {"item1":       "魔物の繊維",
         "item2":       "六花晶",
         "result":      "レジストアクア",
         "description": "対象が受ける水属性ダメージを無効化する"},
        {"item1":       "魔物の繊維",
         "item2":       "妖精の羽根",
         "result":      "レジストウィンド",
         "description": "対象が受ける風属性ダメージを無効化する"},
        {"item1":       "魔物の繊維",
         "item2":       "稲妻の欠片",
         "result":      "レジストサンダー",
         "description": "対象が受ける雷属性ダメージを無効化する"},
        {"item1":       "魔物の繊維",
         "item2":       "砂のバラ",
         "result":      "レジストアース",
         "description": "対象が受ける土属性ダメージを無効化する"},
        {"item1":       "魔物の繊維",
         "item2":       "ピカピカ虫",
         "result":      "レジストライト",
         "description": "対象が受ける光属性ダメージを無効化する"},
        {"item1":       "魔物の繊維",
         "item2":       "ダークマター",
         "result":      "レジストダーク",
         "description": "対象が受ける闇属性ダメージを無効化する"},

        {"item1":       "死霊の骨",
         "item2":       "獣の肝",
         "result":      "ゴーストパワー",
         "description": "4ターンの間対象の物理攻撃力を25%アップ"},
        {"item1":       "死霊の骨",
         "item2":       "硬い鱗",
         "result":      "ゴーストシールド",
         "description": "4ターンの間対象の物理防御力を75%アップ"},
        {"item1":       "死霊の骨",
         "item2":       "死霊の骨",
         "result":      "ゴーストオーラ",
         "description": "4ターンの間対象の魔法攻撃力を25%アップ"},
        {"item1":       "死霊の骨",
         "item2":       "悪魔の尻尾",
         "result":      "ゴーストソウル",
         "description": "4ターンの間対象の魔法防御力を25%アップ"},
        {"item1":       "死霊の骨",
         "item2":       "竜の牙",
         "result":      "ダークブレス",
         "description": "対象に自身の最大HP-現在HP分のダメージ"},

        {"item1":       "悪魔の尻尾",
         "item2":       "獣の肝",
         "result":      "デビルパワー",
         "description": "4ターンの間対象の物理攻撃力を25%アップ"},
        {"item1":       "悪魔の尻尾",
         "item2":       "硬い鱗",
         "result":      "デビルシールド",
         "description": "4ターンの間対象の物理防御力を25%アップ"},
        {"item1":       "悪魔の尻尾",
         "item2":       "死霊の骨",
         "result":      "デビルオーラ",
         "description": "4ターンの間対象の魔法攻撃力を75%アップ"},
        {"item1":       "悪魔の尻尾",
         "item2":       "悪魔の尻尾",
         "result":      "デビルソウル",
         "description": "4ターンの間対象の魔法防御力を75%アップ"},
        {"item1":       "悪魔の尻尾",
         "item2":       "竜の牙",
         "result":      "シャドーフレア",
         "description": "対象に5000の闇属性ダメージ"},

        {"item1":       "竜の牙",
         "item2":       "獣の肝",
         "result":      "ドラゴンパワー",
         "description": "6ターンの間対象の物理攻撃力を100%アップ"},
        {"item1":       "竜の牙",
         "item2":       "硬い鱗",
         "result":      "ドラゴンシールド",
         "description": "6ターンの間対象の物理防御力を100%アップ"},
        {"item1":       "竜の牙",
         "item2":       "死霊の骨",
         "result":      "ドラゴンオーラ",
         "description": "6ターンの間対象の魔法攻撃力を100%アップ"},
        {"item1":       "竜の牙",
         "item2":       "悪魔の尻尾",
         "result":      "ドラゴンソウル",
         "description": "6ターンの間対象の魔法防御力を100%アップ"},
        {"item1":       "竜の牙",
         "item2":       "竜の牙",
         "result":      "ドラゴンブレス",
         "description": "対象に自身の現在HP分のダメージ"},

        {"item1":       "フロギストン",
         "item2":       "虫の触角",
         "result":      "ウィークファイア",
         "description": "対象の弱点に火属性を加える"},
        {"item1":       "フロギストン",
         "item2":       "魔物の繊維",
         "result":      "レジストファイア",
         "description": "対象が受ける火属性ダメージを無効化する"},
        {"item1":       "フロギストン",
         "item2":       "フロギストン",
         "result":      "ボムの右腕",
         "description": "パーティ全体に1500の火属性ダメージ"},

        {"item1":       "六花晶",
         "item2":       "虫の触角",
         "result":      "ウィークアクア",
         "description": "対象の弱点に水属性を加える"},
        {"item1":       "六花晶",
         "item2":       "魔物の繊維",
         "result":      "レジストアクア",
         "description": "対象が受ける水属性ダメージを無効化する"},
        {"item1":       "六花晶",
         "item2":       "六花晶",
         "result":      "北極の風",
         "description": "パーティ全体に1500の水属性ダメージ"},

        {"item1":       "妖精の羽根",
         "item2":       "虫の触角",
         "result":      "ウィークウィンド",
         "description": "対象の弱点に風属性を加える"},
        {"item1":       "妖精の羽根",
         "item2":       "魔物の繊維",
         "result":      "レジストウィンド",
         "description": "対象が受ける風属性ダメージを無効化する"},
        {"item1":       "妖精の羽根",
         "item2":       "妖精の羽根",
         "result":      "天狗のくしゃみ",
         "description": "パーティ全体に1500の風属性ダメージ"},

        {"item1":       "稲妻の欠片",
         "item2":       "虫の触角",
         "result":      "ウィークサンダー",
         "description": "対象の弱点に雷属性を加える"},
        {"item1":       "稲妻の欠片",
         "item2":       "魔物の繊維",
         "result":      "レジストサンダー",
         "description": "対象が受ける雷属性ダメージを無効化する"},
        {"item1":       "稲妻の欠片",
         "item2":       "稲妻の欠片",
         "result":      "神々の怒り",
         "description": "パーティ全体に1500の雷属性ダメージ"},

        {"item1":       "砂のバラ",
         "item2":       "虫の触角",
         "result":      "ウィークアース",
         "description": "対象の弱点に土属性を加える"},
        {"item1":       "砂のバラ",
         "item2":       "魔物の繊維",
         "result":      "レジストアース",
         "description": "対象が受ける土属性ダメージを無効化する"},
        {"item1":       "砂のバラ",
         "item2":       "砂のバラ",
         "result":      "大地のハンマー",
         "description": "パーティ全体に1500の土属性ダメージ"},

        {"item1":       "ピカピカ虫",
         "item2":       "虫の触角",
         "result":      "ウィークライト",
         "description": "対象の弱点に光属性を加える"},
        {"item1":       "ピカピカ虫",
         "item2":       "魔物の繊維",
         "result":      "レジストライト",
         "description": "対象が受ける光属性ダメージを無効化する"},
        {"item1":       "ピカピカ虫",
         "item2":       "ピカピカ虫",
         "result":      "ホーリーシャワー",
         "description": "パーティ全体に1500の光属性ダメージ"},

        {"item1":       "ダークマター",
         "item2":       "虫の触角",
         "result":      "ウィークダーク",
         "description": "対象の弱点に闇属性を加える"},
        {"item1":       "ダークマター",
         "item2":       "魔物の繊維",
         "result":      "レジストダーク",
         "description": "対象が受ける闇属性ダメージを無効化する"},
        {"item1":       "ダークマター",
         "item2":       "ダークマター",
         "result":      "暗黒の溜息",
         "description": "パーティ全体に1500の闇属性ダメージ"},

        {"item1":       "ポーション",
         "item2":       "ポーション",
         "result":      "ポーション",
         "description": "対象のHPを300回復する"},
        {"item1":       "ポーション",
         "item2":       "ハイポーション",
         "result":      "生命の水",
         "description": "対象に「リジェネ」の効果を付与する"},
        {"item1":       "ポーション",
         "item2":       "エクスポーション",
         "result":      "生命の水",
         "description": "対象に「リジェネ」の効果を付与する"},
        {"item1":       "ポーション",
         "item2":       "フェニックスの尾",
         "result":      "リザレクション",
         "description": "戦闘不能の対象の戦闘不能とHP5000を回復"},
        {"item1":       "ポーション",
         "item2":       "エーテル",
         "result":      "エクスポーション",
         "description": "対象のHPを3000回復する"},
        {"item1":       "ポーション",
         "item2":       "エーテルターボ",
         "result":      "エクスポーション",
         "description": "対象のHPを3000回復する"},
        {"item1":       "ポーション",
         "item2":       "どくけし",
         "result":      "キュアポイズン",
         "description": "対象の毒状態とHP150を回復する"},
        {"item1":       "ポーション",
         "item2":       "目薬",
         "result":      "キュアブライン",
         "description": "対象の暗闇状態とHP150を回復する"},
        {"item1":       "ポーション",
         "item2":       "やまびこ草",
         "result":      "キュアサイレス",
         "description": "対象の沈黙状態とHP150を回復する"},
        {"item1":       "ポーション",
         "item2":       "目覚まし",
         "result":      "キュアスリープ",
         "description": "対象の睡眠状態とHP150を回復する"},
        {"item1":       "ポーション",
         "item2":       "安息香",
         "result":      "キュアフィアー",
         "description": "対象の恐怖状態とHP150を回復する"},
        {"item1":       "ポーション",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復する"},

        {"item1":       "ハイポーション",
         "item2":       "ポーション",
         "result":      "生命の水",
         "description": "対象に「リジェネ」の効果を付与する"},
        {"item1":       "ハイポーション",
         "item2":       "ハイポーション",
         "result":      "ハイポーション",
         "description": "対象のHPを1000回復する"},
        {"item1":       "ハイポーション",
         "item2":       "エクスポーション",
         "result":      "生命の泉",
         "description": "対象に「リレイズ」の効果を付与する"},
        {"item1":       "ハイポーション",
         "item2":       "フェニックスの尾",
         "result":      "リザレクション",
         "description": "戦闘不能の対象の戦闘不能とHP5000を回復"},
        {"item1":       "ハイポーション",
         "item2":       "エーテル",
         "result":      "クォートエリクサー",
         "description": "対象のHP2500とMP250を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "エーテルターボ",
         "result":      "クォートエリクサー",
         "description": "対象のHP2500とMP250を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "どくけし",
         "result":      "キュアポイズン",
         "description": "対象の毒状態とHP150を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "目薬",
         "result":      "キュアブライン",
         "description": "対象の暗闇状態とHP150を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "やまびこ草",
         "result":      "キュアサイレス",
         "description": "対象の沈黙状態とHP150を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "目覚まし",
         "result":      "キュアスリープ",
         "description": "対象の睡眠状態とHP150を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "安息香",
         "result":      "キュアフィアー",
         "description": "対象の恐怖状態とHP150を回復する"},
        {"item1":       "ハイポーション",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復する"},

        {"item1":       "エクスポーション",
         "item2":       "ポーション",
         "result":      "生命の水",
         "description": "対象に「リジェネ」の効果を付与する"},
        {"item1":       "エクスポーション",
         "item2":       "ハイポーション",
         "result":      "生命の泉",
         "description": "対象に「リレイズ」の効果を付与する"},
        {"item1":       "エクスポーション",
         "item2":       "エクスポーション",
         "result":      "エクスポーション",
         "description": "対象のHPを3000回復する"},
        {"item1":       "エクスポーション",
         "item2":       "フェニックスの尾",
         "result":      "リザレクション",
         "description": "戦闘不能の対象の戦闘不能とHP5000を回復"},
        {"item1":       "エクスポーション",
         "item2":       "エーテル",
         "result":      "クォートエリクサー",
         "description": "対象のHP2500とMP250を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "エーテルターボ",
         "result":      "ハーフエリクサー",
         "description": "対象のHP5000とMP500を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "どくけし",
         "result":      "キュアポイズン",
         "description": "対象の毒状態とHP150を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "目薬",
         "result":      "キュアブライン",
         "description": "対象の暗闇状態とHP150を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "やまびこ草",
         "result":      "キュアサイレス",
         "description": "対象の沈黙状態とHP150を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "目覚まし",
         "result":      "キュアスリープ",
         "description": "対象の睡眠状態とHP150を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "安息香",
         "result":      "キュアフィアー",
         "description": "対象の恐怖状態とHP150を回復する"},
        {"item1":       "エクスポーション",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復する"},

        {"item1":       "フェニックスの尾",
         "item2":       "ポーション",
         "result":      "リザレクション",
         "description": "戦闘不能の対象の戦闘不能とHP5000を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "ハイポーション",
         "result":      "リザレクション",
         "description": "戦闘不能の対象の戦闘不能とHP5000を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "エクスポーション",
         "result":      "リザレクション",
         "description": "戦闘不能の対象の戦闘不能とHP5000を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "フェニックスの尾",
         "result":      "フェニックスの尾",
         "description": "対象の戦闘不能状態を回復する"},
        {"item1":       "フェニックスの尾",
         "item2":       "エーテル",
         "result":      "リンカネーション",
         "description": "戦闘不能の対象の戦闘不能とHPとMPを回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "エーテルターボ",
         "result":      "リンカネーション",
         "description": "戦闘不能の対象の戦闘不能とHPとMPを回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "どくけし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "目薬",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "やまびこ草",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "目覚まし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "安息香",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "フェニックスの尾",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"},

        {"item1":       "エーテル",
         "item2":       "ポーション",
         "result":      "エクスポーション",
         "description": "対象のHPを3000回復する"},
        {"item1":       "エーテル",
         "item2":       "ハイポーション",
         "result":      "クォートエリクサー",
         "description": "対象のHP2500とMP250を回復する"},
        {"item1":       "エーテル",
         "item2":       "エクスポーション",
         "result":      "クォートエリクサー",
         "description": "対象のHP2500とMP250を回復する"},
        {"item1":       "エーテル",
         "item2":       "フェニックスの尾",
         "result":      "リンカネーション",
         "description": "戦闘不能の対象の戦闘不能とHPとMPを回復"},
        {"item1":       "エーテル",
         "item2":       "エーテル",
         "result":      "エーテル",
         "description": "対象のMPを80回復する"},
        {"item1":       "エーテル",
         "item2":       "エーテルターボ",
         "result":      "エーテルドライ",
         "description": "対象のMPを500回復する"},
        {"item1":       "エーテル",
         "item2":       "どくけし",
         "result":      "レジストポイズン",
         "description": "対象を毒無効にする"},
        {"item1":       "エーテル",
         "item2":       "目薬",
         "result":      "レジストブライン",
         "description": "対象を暗闇無効にする"},
        {"item1":       "エーテル",
         "item2":       "やまびこ草",
         "result":      "レジストサイレス",
         "description": "対象を沈黙無効にする"},
        {"item1":       "エーテル",
         "item2":       "目覚まし",
         "result":      "レジストスリープ",
         "description": "対象を睡眠無効にする"},
        {"item1":       "エーテル",
         "item2":       "安息香",
         "result":      "レジストフィアー",
         "description": "対象を恐怖無効にする"},
        {"item1":       "エーテル",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"},

        {"item1":       "エーテルターボ",
         "item2":       "ポーション",
         "result":      "エクスポーション",
         "description": "対象のHPを3000回復する"},
        {"item1":       "エーテルターボ",
         "item2":       "ハイポーション",
         "result":      "クォートエリクサー",
         "description": "対象のHP2500とMP250を回復する"},
        {"item1":       "エーテルターボ",
         "item2":       "エクスポーション",
         "result":      "ハーフエリクサー",
         "description": "対象のHP5000とMP500を回復する"},
        {"item1":       "エーテルターボ",
         "item2":       "フェニックスの尾",
         "result":      "リンカネーション",
         "description": "戦闘不能の対象の戦闘不能とHPとMPを回復"},
        {"item1":       "エーテルターボ",
         "item2":       "エーテル",
         "result":      "エーテルドライ",
         "description": "対象のMPを500回復する"},
        {"item1":       "エーテルターボ",
         "item2":       "エーテルターボ",
         "result":      "エーテルターボ",
         "description": "対象のMPを300回復する"},
        {"item1":       "エーテルターボ",
         "item2":       "どくけし",
         "result":      "レジストポイズン",
         "description": "対象を毒無効にする"},
        {"item1":       "エーテルターボ",
         "item2":       "目薬",
         "result":      "レジストブライン",
         "description": "対象を暗闇無効にする"},
        {"item1":       "エーテルターボ",
         "item2":       "やまびこ草",
         "result":      "レジストサイレス",
         "description": "対象を沈黙無効にする"},
        {"item1":       "エーテルターボ",
         "item2":       "目覚まし",
         "result":      "レジストスリープ",
         "description": "対象を睡眠無効にする"},
        {"item1":       "エーテルターボ",
         "item2":       "安息香",
         "result":      "レジストフィアー",
         "description": "対象を恐怖無効にする"},
        {"item1":       "エーテルターボ",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復する"},

        {"item1":       "どくけし",
         "item2":       "ポーション",
         "result":      "キュアポイズン",
         "description": "対象の毒状態とHP150を回復する"},
        {"item1":       "どくけし",
         "item2":       "ハイポーション",
         "result":      "キュアポイズン",
         "description": "対象の毒状態とHP150を回復する"},
        {"item1":       "どくけし",
         "item2":       "エクスポーション",
         "result":      "キュアポイズン",
         "description": "対象の毒状態とHP150を回復する"},
        {"item1":       "どくけし",
         "item2":       "フェニックスの尾",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "どくけし",
         "item2":       "エーテル",
         "result":      "レジストポイズン",
         "description": "対象を毒無効にする"},
        {"item1":       "どくけし",
         "item2":       "エーテルターボ",
         "result":      "レジストポイズン",
         "description": "対象を毒無効にする"},
        {"item1":       "どくけし",
         "item2":       "どくけし",
         "result":      "どくけし",
         "description": "対象の毒状態を回復する"},
        {"item1":       "どくけし",
         "item2":       "目薬",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "どくけし",
         "item2":       "やまびこ草",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "どくけし",
         "item2":       "目覚まし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "どくけし",
         "item2":       "安息香",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "どくけし",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"},

        {"item1":       "目薬",
         "item2":       "ポーション",
         "result":      "キュアブライン",
         "description": "対象の暗闇状態とHP150を回復する"},
        {"item1":       "目薬",
         "item2":       "ハイポーション",
         "result":      "キュアブライン",
         "description": "対象の暗闇状態とHP150を回復する"},
        {"item1":       "目薬",
         "item2":       "エクスポーション",
         "result":      "キュアブライン",
         "description": "対象の暗闇状態とHP150を回復する"},
        {"item1":       "目薬",
         "item2":       "フェニックスの尾",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目薬",
         "item2":       "エーテル",
         "result":      "レジスト",
         "description": "対象を暗闇無効にする"},
        {"item1":       "目薬",
         "item2":       "エーテルターボ",
         "result":      "レジスト",
         "description": "対象を暗闇無効にする"},
        {"item1":       "目薬",
         "item2":       "どくけし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目薬",
         "item2":       "目薬",
         "result":      "目薬",
         "description": "対象の暗闇状態を回復する"},
        {"item1":       "目薬",
         "item2":       "やまびこ草",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目薬",
         "item2":       "目覚まし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目薬",
         "item2":       "安息香",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目薬",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"},

        {"item1":       "やまびこ草",
         "item2":       "ポーション",
         "result":      "キュアサイレス",
         "description": "対象の沈黙状態とHP150を回復する"},
        {"item1":       "やまびこ草",
         "item2":       "ハイポーション",
         "result":      "キュアサイレス",
         "description": "対象の沈黙状態とHP150を回復する"},
        {"item1":       "やまびこ草",
         "item2":       "エクスポーション",
         "result":      "キュアサイレス",
         "description": "対象の沈黙状態とHP150を回復する"},
        {"item1":       "やまびこ草",
         "item2":       "フェニックスの尾",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "やまびこ草",
         "item2":       "エーテル",
         "result":      "レジストサイレス",
         "description": "対象を沈黙無効にする"},
        {"item1":       "やまびこ草",
         "item2":       "エーテルターボ",
         "result":      "レジストサイレス",
         "description": "対象を沈黙無効にする"},
        {"item1":       "やまびこ草",
         "item2":       "どくけし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "やまびこ草",
         "item2":       "目薬",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "やまびこ草",
         "item2":       "やまびこ草",
         "result":      "やまびこ草",
         "description": "対象の沈黙状態を回復する"},
        {"item1":       "やまびこ草",
         "item2":       "目覚まし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "やまびこ草",
         "item2":       "安息香",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "やまびこ草",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"},

        {"item1":       "目覚まし",
         "item2":       "ポーション",
         "result":      "キュアスリープ",
         "description": "対象の睡眠状態とHP150を回復する"},
        {"item1":       "目覚まし",
         "item2":       "ハイポーション",
         "result":      "キュアスリープ",
         "description": "対象の睡眠状態とHP150を回復する"},
        {"item1":       "目覚まし",
         "item2":       "エクスポーション",
         "result":      "キュアスリープ",
         "description": "対象の睡眠状態とHP150を回復する"},
        {"item1":       "目覚まし",
         "item2":       "フェニックスの尾",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目覚まし",
         "item2":       "エーテル",
         "result":      "レジストスリープ",
         "description": "対象を睡眠無効にする"},
        {"item1":       "目覚まし",
         "item2":       "エーテルターボ",
         "result":      "レジストスリープ",
         "description": "対象を睡眠無効にする"},
        {"item1":       "目覚まし",
         "item2":       "どくけし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目覚まし",
         "item2":       "目薬",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目覚まし",
         "item2":       "やまびこ草",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目覚まし",
         "item2":       "目覚まし",
         "result":      "目覚まし",
         "description": "対象の睡眠状態を回復する"},
        {"item1":       "目覚まし",
         "item2":       "安息香",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "目覚まし",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"},

        {"item1":       "安息香",
         "item2":       "ポーション",
         "result":      "キュアフィアー",
         "description": "対象の恐怖状態とHP150を回復する"},
        {"item1":       "安息香",
         "item2":       "ハイポーション",
         "result":      "キュアフィアー",
         "description": "対象の恐怖状態とHP150を回復する"},
        {"item1":       "安息香",
         "item2":       "エクスポーション",
         "result":      "キュアフィアー",
         "description": "対象の恐怖状態とHP150を回復する"},
        {"item1":       "安息香",
         "item2":       "フェニックスの尾",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "安息香",
         "item2":       "エーテル",
         "result":      "レジストフィアー",
         "description": "対象を恐怖無効にする"},
        {"item1":       "安息香",
         "item2":       "エーテルターボ",
         "result":      "レジストフィアー",
         "description": "対象を恐怖無効にする"},
        {"item1":       "安息香",
         "item2":       "どくけし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "安息香",
         "item2":       "目薬",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "安息香",
         "item2":       "やまびこ草",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "安息香",
         "item2":       "目覚まし",
         "result":      "気付け薬",
         "description": "対象の様々な状態異常を回復"},
        {"item1":       "安息香",
         "item2":       "安息香",
         "result":      "安息香",
         "description": "対象の恐怖状態を回復する"},
        {"item1":       "安息香",
         "item2":       "万能薬",
         "result":      "万能薬",
         "description": "対象の様々な状態異常を回復"}
    ];
}
