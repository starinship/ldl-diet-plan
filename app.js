"use strict";

const DAYS = [
  {
    weekday: 1,
    label: "星期一",
    focus: "重點：燕麥水溶性纖維，晚餐清蒸三文魚",
    meals: [
      {
        slot: "早餐",
        name: "蘋果合桃燕麥粥",
        method: "煮",
        time: "約 10 分鐘",
        ingredients: [
          ["燕麥片", "40 克"],
          ["水或低脂奶", "220 毫升"],
          ["蘋果", "半個（約 80 克）"],
          ["合桃", "3 粒（約 10 克）"],
          ["肉桂粉", "少許，可免"]
        ],
        steps: [
          "蘋果洗淨，去芯切成細粒。合桃拍碎。",
          "細鑊放入燕麥和水或低脂奶，中小火煮 3 至 5 分鐘，不時攪拌，至變得綿稠。",
          "離火，拌入蘋果粒。想有香氣可加少許肉桂粉。",
          "盛入碗中，面頭撒合桃碎，趁暖食。不必加糖。"
        ]
      },
      {
        slot: "午餐",
        name: "蒸豆腐灼菜心雜糧飯",
        method: "蒸、灼",
        time: "約 40 分鐘",
        ingredients: [
          ["糙米或雜糧米", "50 克"],
          ["板豆腐", "150 克"],
          ["菜心", "200 克"],
          ["蒜頭", "2 瓣"],
          ["橄欖油或芥花籽油", "1 茶匙"],
          ["生抽", "1 茶匙"],
          ["白胡椒", "少許"]
        ],
        steps: [
          "米洗淨放入飯煲，50 克米加約 100 毫升水，煮好再悶 10 分鐘。沒有飯煲就用細鑊，煮滾後細火約 30 分鐘，水乾可加一兩湯匙熱水。",
          "豆腐倒走盒中水，切厚件放碟，撒少許白胡椒。水滾後隔水蒸 8 分鐘。",
          "菜心洗淨。另燒一鑊水，水滾後放菜心灼 1 至 2 分鐘，梗軟而葉仍綠便撈起瀝乾。",
          "抹乾小鑊，下 1 茶匙油，中小火爆香蒜蓉至金黃而不焦。拌入菜心，點 1 茶匙生抽。",
          "和豆腐、雜糧飯一齊食。若晚餐也吃雜糧飯，午餐可一次過煮乾米 100 克，分兩餐。"
        ]
      },
      {
        slot: "下午小食",
        name: "梨配原味杏仁",
        method: "切",
        time: "約 5 分鐘",
        ingredients: [
          ["梨", "1 個（約 150 克）"],
          ["原味杏仁（無鹽）", "8 粒（約 10 克）"]
        ],
        steps: [
          "梨洗淨，對半去芯，切成方便食的塊。",
          "杏仁可放乾平底鑊，小火烘約 1 分鐘，輕搖至微香，盛起放涼。",
          "梨和杏仁一齊食。果仁只食這一小份。"
        ]
      },
      {
        slot: "晚餐",
        name: "清蒸三文魚配西蘭花",
        method: "蒸、灼",
        time: "約 25 分鐘",
        ingredients: [
          ["三文魚柳（去皮）", "120 克"],
          ["西蘭花", "150 克"],
          ["薑", "3 片"],
          ["蔥", "1 條"],
          ["檸檬", "2 片"],
          ["橄欖油", "1 茶匙"],
          ["蒸魚豉油或少鹽豉油", "1 茶匙"],
          ["熟雜糧飯", "1 碗（乾米約 50 克）"]
        ],
        steps: [
          "未有熟飯就用飯煲煮乾米 50 克，加水約 100 毫升，煮好悶 10 分鐘。三文魚抹乾，檢查有沒有骨。",
          "碟上墊薑片，放上魚柳和檸檬。水滾後中火蒸 8 至 10 分鐘，至魚肉可用筷子輕輕撥開。",
          "西蘭花切小朵，滾水灼約 2 分鐘，瀝乾。",
          "魚蒸好後倒走碟中蒸汁，鋪上蔥絲。小鑊燒熱 1 茶匙橄欖油，淋在蔥上，再點 1 茶匙豉油。",
          "配西蘭花和雜糧飯。味道靠薑、蔥和檸檬，醬汁不宜再加。"
        ]
      }
    ]
  },
  {
    weekday: 2,
    label: "星期二",
    focus: "重點：鷹嘴豆和豆腐",
    meals: [
      {
        slot: "早餐",
        name: "牛油果多士水煮蛋",
        method: "煮、烤",
        time: "約 15 分鐘",
        ingredients: [
          ["全麥麵包", "1 片"],
          ["牛油果", "半個（約 60 克）"],
          ["雞蛋", "1 隻"],
          ["車厘茄", "4 粒"],
          ["檸檬汁", "數滴"],
          ["黑胡椒", "少許"]
        ],
        steps: [
          "雞蛋放入室溫水，水滾後轉小火，煮 8 至 9 分鐘至全熟，撈起浸冷水，去殼。",
          "全麥麵包放入多士爐，或用乾鑊烤至表面微脆。",
          "牛油果去核，壓成茸，拌檸檬汁和黑胡椒，塗在多士上。不必加牛油。",
          "蛋對半切開，配車厘茄一齊食。"
        ]
      },
      {
        slot: "午餐",
        name: "番茄鷹嘴豆蔬菜湯",
        method: "煮",
        time: "約 25 分鐘",
        ingredients: [
          ["鷹嘴豆罐頭（瀝乾沖淨）", "120 克"],
          ["番茄", "1 個（約 120 克）"],
          ["洋蔥", "半個"],
          ["甘筍", "半條"],
          ["西芹", "1 條"],
          ["蒜頭", "1 瓣"],
          ["橄欖油", "1 茶匙"],
          ["清水", "400 毫升"],
          ["黑胡椒或乾香草", "少許"],
          ["全麥麵包", "1 片，可免"]
        ],
        steps: [
          "洋蔥、甘筍、西芹洗淨切件，蒜拍碎，番茄切件。鷹嘴豆沖走罐中鹽水，瀝乾。",
          "鑊下 1 茶匙橄欖油，中火炒洋蔥、蒜、甘筍和西芹約 3 分鐘。",
          "加入番茄，炒至開始出汁。",
          "倒入鷹嘴豆和清水，煮滾後轉小火 10 分鐘。用匙羹輕壓少許豆粒，湯會更濃。",
          "以黑胡椒或香草調味，不必加鹽。可配一片全麥包。"
        ]
      },
      {
        slot: "下午小食",
        name: "肉桂烤番薯",
        method: "烤",
        time: "約 25 分鐘",
        ingredients: [
          ["番薯", "1 個（約 150 克）"],
          ["肉桂粉", "少許，可免"]
        ],
        steps: [
          "番薯洗淨，用叉刺穿表皮數下，避免加熱時爆開。",
          "氣炸鍋 180°C 約 18 至 22 分鐘。沒有氣炸鍋可用焗爐 200°C 約 35 至 40 分鐘。以筷子可輕插入為準。",
          "對半切開。可灑少許肉桂，不要加牛油或砂糖。"
        ]
      },
      {
        slot: "晚餐",
        name: "香煎豆腐炒芥蘭",
        method: "少油快炒",
        time: "約 15 分鐘",
        ingredients: [
          ["硬豆腐", "150 克"],
          ["芥蘭", "200 克"],
          ["蒜頭", "2 瓣"],
          ["芥花籽油或橄欖油", "2 茶匙"],
          ["生抽", "1 茶匙"],
          ["清水", "2 湯匙"],
          ["熟雜糧飯", "半碗，可免"]
        ],
        steps: [
          "豆腐抹乾，切厚片。芥蘭洗淨，梗和葉分開，梗部斜切。",
          "不黏鑊中小火放 1 茶匙油，豆腐每面煎約 2 分鐘至金黃，盛起。",
          "同鑊再下 1 茶匙油，中小火爆香蒜蓉。先放芥蘭梗炒約 1 分鐘。",
          "加入芥蘭葉和 2 湯匙水，加蓋煮約 1 分鐘。",
          "豆腐回鑊，點 1 茶匙生抽，快炒數下即可。肚餓可配半碗雜糧飯。"
        ]
      }
    ]
  },
  {
    weekday: 3,
    label: "星期三",
    focus: "重點：大麥粥，午餐鯖魚",
    meals: [
      {
        slot: "早餐",
        name: "香蕉大麥粥",
        method: "煮",
        time: "約 30 分鐘",
        ingredients: [
          ["珍珠大麥", "40 克"],
          ["清水", "350 毫升"],
          ["香蕉", "1 隻（約 100 克）"],
          ["奇亞籽", "1 茶匙"],
          ["低脂奶", "50 毫升，可免"]
        ],
        steps: [
          "大麥洗淨。若能預先浸 2 小時或以上，之後會較快熟。",
          "大麥加清水煮滾，轉細火。預浸過的煮約 20 至 25 分鐘；未浸的煮約 35 至 40 分鐘，至粒身軟而仍有嚼頭。太乾可加少許熱水。",
          "香蕉切片。粥離火，拌入奇亞籽和低脂奶。",
          "面頭放香蕉，靜置約 2 分鐘，讓奇亞籽微微脹起再食。不必加糖。"
        ]
      },
      {
        slot: "午餐",
        name: "鯖魚藜麥沙律",
        method: "煮、拌",
        time: "約 25 分鐘",
        ingredients: [
          ["鯖魚", "鮮柳 100 克，或水浸罐頭瀝乾 80 克"],
          ["藜麥", "40 克"],
          ["青瓜", "半條"],
          ["車厘茄", "6 粒"],
          ["洋蔥", "一小片"],
          ["檸檬汁", "1 湯匙"],
          ["橄欖油", "1 茶匙"],
          ["黑胡椒", "少許"],
          ["蔥", "少許"]
        ],
        steps: [
          "藜麥洗至水不再混濁。加清水約 80 毫升煮滾，轉細火約 12 分鐘，離火悶 5 分鐘，撥散放涼。",
          "新鮮鯖魚抹乾。不黏鑊放少許橄欖油（由 1 茶匙中取用），中火每面約 2 至 3 分鐘，加蓋煮至魚肉實淨、沒有半透明。罐頭魚瀝乾後撕成塊即可。",
          "青瓜切片，車厘茄對半，洋蔥切幼絲。",
          "藜麥、魚和蔬菜放在一碗，淋剩餘橄欖油和檸檬汁，撒黑胡椒和蔥，拌勻。",
          "可暖食或放至室溫。罐頭魚不要再加鹽。"
        ]
      },
      {
        slot: "下午小食",
        name: "灼毛豆配車厘茄",
        method: "灼",
        time: "約 8 分鐘",
        ingredients: [
          ["冷凍毛豆莢", "80 克"],
          ["車厘茄", "6 粒"],
          ["黑胡椒", "少許"]
        ],
        steps: [
          "水煮滾，放下毛豆灼 3 至 4 分鐘，至莢內豆粒變軟，撈起瀝乾。",
          "可撒少許黑胡椒。若毛豆本身已調味，便不要再加鹽。",
          "車厘茄洗淨，和毛豆一齊做小食。"
        ]
      },
      {
        slot: "晚餐",
        name: "彩椒蘑菇炒雞胸",
        method: "少油快炒",
        time: "約 40 分鐘",
        ingredients: [
          ["去皮雞胸", "120 克"],
          ["彩椒", "半個"],
          ["鮮磨菇", "4 隻"],
          ["洋蔥", "四分一個"],
          ["蒜頭", "1 瓣"],
          ["芥花籽油", "1 茶匙"],
          ["生抽", "1 茶匙"],
          ["黑胡椒", "少許"],
          ["糙米或雜糧米", "50 克"]
        ],
        steps: [
          "米洗淨放入飯煲，加約 100 毫升水，煮好悶 10 分鐘。沒有飯煲就用細鑊煮滾後細火約 30 分鐘。",
          "雞胸切薄片，加黑胡椒和半茶匙生抽拌勻，醃 5 分鐘。彩椒、洋蔥、磨菇切片，蒜拍碎。",
          "鑊燒熱 1 茶匙油，中火炒雞片至切開沒有粉紅色，盛起。",
          "同鑊炒洋蔥、蒜、磨菇和彩椒約 3 分鐘，菜仍可保持少許脆度。",
          "雞片回鑊，加入剩餘半茶匙生抽，快炒均勻，配雜糧飯。"
        ]
      }
    ]
  },
  {
    weekday: 4,
    label: "星期四",
    focus: "重點：紅豆雜糧，晚餐豆腐魚湯",
    meals: [
      {
        slot: "早餐",
        name: "奇異果藍莓燕麥碗",
        method: "煮",
        time: "約 10 分鐘",
        ingredients: [
          ["燕麥片", "40 克"],
          ["低脂奶或無糖豆漿", "200 毫升"],
          ["奇異果", "1 個"],
          ["藍莓", "40 克"],
          ["合桃碎", "1 茶匙（約 5 克）"]
        ],
        steps: [
          "燕麥和低脂奶或豆漿放入細鑊，中小火煮約 3 分鐘，不時攪拌至綿稠。亦可用微波爐高火約 90 秒，中途取出攪勻。",
          "奇異果去皮切片。藍莓沖淨瀝乾。",
          "燕麥盛碗，鋪上奇異果和藍莓，撒一小匙合桃碎。",
          "不必加糖或煉奶。"
        ]
      },
      {
        slot: "午餐",
        name: "紅豆飯清蒸雞胸",
        method: "蒸、灼",
        time: "約 45 分鐘",
        ingredients: [
          ["糙米", "40 克"],
          ["紅豆", "15 克"],
          ["去皮雞胸", "120 克"],
          ["薑", "2 片"],
          ["西蘭花", "120 克"],
          ["檸檬汁", "1 茶匙"]
        ],
        steps: [
          "紅豆和糙米洗淨。紅豆最好預浸 1 小時。紅豆先加水約 150 毫升煮 15 分鐘，再加入糙米，細火再煮 25 至 30 分鐘，至水乾粒軟，悶 5 分鐘。水不夠就加一兩湯匙。",
          "雞胸放碟，底墊薑片。水滾後隔水蒸 12 至 15 分鐘，切開中心沒有粉紅色。",
          "西蘭花切小朵，滾水灼約 2 分鐘，瀝乾。",
          "雞胸切片，淋 1 茶匙檸檬汁。配紅豆糙米飯和西蘭花。若要蘸醬，只用極少量生抽。"
        ]
      },
      {
        slot: "下午小食",
        name: "橙配合桃",
        method: "切",
        time: "約 5 分鐘",
        ingredients: [
          ["橙", "1 個"],
          ["合桃", "2 粒（約 8 克）"]
        ],
        steps: [
          "橙洗淨，去皮，分成瓣。",
          "合桃拍碎，或原粒食。",
          "橙和合桃一齊食，不用加蜜糖。"
        ]
      },
      {
        slot: "晚餐",
        name: "番茄豆腐魚湯",
        method: "煮、灼",
        time: "約 20 分鐘",
        ingredients: [
          ["龍利魚柳或鯇魚柳", "100 克"],
          ["嫩豆腐", "150 克"],
          ["番茄", "1 個"],
          ["薑", "2 片"],
          ["蔥", "1 條"],
          ["菜心", "150 克"],
          ["清水", "500 毫升"],
          ["白胡椒", "少許"]
        ],
        steps: [
          "魚柳切厚件，抹乾，檢查魚骨。豆腐切塊，番茄切件，蔥切成蔥花。",
          "清水加薑片煮滾，放番茄煮 3 分鐘。",
          "放入豆腐和魚，轉中小火煮 4 至 5 分鐘，至魚肉變實、可用筷輕輕撥開。",
          "撒白胡椒和蔥花。湯保持清淡，不要加大量鹽。",
          "菜心另用滾水灼 1 至 2 分鐘。配湯一齊食。仍肚餓可加半碗雜糧飯。"
        ]
      }
    ]
  },
  {
    weekday: 5,
    label: "星期五",
    focus: "重點：扁豆，晚餐沙甸魚",
    meals: [
      {
        slot: "早餐",
        name: "蔬菜蛋奄列",
        method: "少油快炒",
        time: "約 15 分鐘",
        ingredients: [
          ["雞蛋", "1 隻"],
          ["菠菜", "一小把（約 40 克）"],
          ["鮮磨菇", "2 隻"],
          ["橄欖油", "1 茶匙"],
          ["全麥麵包", "1 片"],
          ["黑胡椒", "少許"]
        ],
        steps: [
          "磨菇切片。菠菜洗淨。",
          "不黏鑊燒熱半茶匙油，中火炒磨菇約 2 分鐘，加入菠菜炒至塌身，盛起。",
          "雞蛋打散，加黑胡椒。鑊中再放剩餘半茶匙油，倒入蛋液，用中小火。",
          "蛋液底面凝固、表面仍微濕時放入蔬菜，對折，再煮半分鐘至全熟。配烤好的全麥多士。"
        ]
      },
      {
        slot: "午餐",
        name: "番茄扁豆燴",
        method: "煮",
        time: "約 35 分鐘",
        ingredients: [
          ["綠扁豆或棕扁豆", "乾豆 50 克，或罐頭瀝乾 150 克"],
          ["洋蔥", "半個"],
          ["甘筍", "半條"],
          ["節瓜", "100 克"],
          ["番茄", "1 個"],
          ["蒜頭", "1 瓣"],
          ["橄欖油", "1 茶匙"],
          ["清水", "乾豆用 150 毫升；罐頭用 50 毫升"],
          ["黑胡椒或乾香草", "少許"],
          ["熟雜糧飯", "半碗"]
        ],
        steps: [
          "乾扁豆洗淨，加水煮 20 至 25 分鐘至軟身，瀝乾。罐頭扁豆則沖淨即可。未有熟飯就用乾米約 25 克，加水約 50 毫升，飯煲煮好悶 10 分鐘。",
          "洋蔥、蒜、甘筍、節瓜、番茄切件。",
          "鑊下 1 茶匙油，中火炒洋蔥、蒜和甘筍約 3 分鐘。",
          "加入節瓜、番茄、扁豆和清水，加蓋，中小火煮約 8 分鐘，至瓜軟、汁變濃。",
          "以胡椒或香草調味，配半碗雜糧飯。"
        ]
      },
      {
        slot: "下午小食",
        name: "木瓜配腰果",
        method: "切",
        time: "約 5 分鐘",
        ingredients: [
          ["熟木瓜", "150 克"],
          ["原味腰果（無鹽）", "6 粒（約 8 克）"],
          ["青檸汁", "數滴，可免"]
        ],
        steps: [
          "木瓜去皮去籽，切成塊。",
          "可淋數滴青檸汁。",
          "配腰果食。腰果只取這一小份。"
        ]
      },
      {
        slot: "晚餐",
        name: "氣炸沙甸魚烤時蔬",
        method: "氣炸",
        time: "約 30 分鐘",
        ingredients: [
          ["沙甸魚", "新鮮 2 條（約 150 克），或水浸罐頭瀝乾約 100 克"],
          ["番薯", "100 克"],
          ["彩椒", "半個"],
          ["洋蔥", "四分一個"],
          ["橄欖油", "1 茶匙"],
          ["檸檬", "2 片"],
          ["黑胡椒", "少許"],
          ["乾香草", "少許，可免"]
        ],
        steps: [
          "番薯洗淨，切成約 2 厘米的塊。彩椒和洋蔥切塊。蔬菜拌入半茶匙油和香草。",
          "氣炸鍋 180°C 先烤蔬菜和番薯 12 分鐘，中途翻動一次。沒有氣炸鍋可用焗爐 200°C 約 20 分鐘。",
          "新鮮沙甸魚抹乾，放上檸檬和黑胡椒，加入鍋中再烤 8 至 10 分鐘，至魚肉易離骨。",
          "若用水浸罐頭，先瀝乾；只有油浸時盡量瀝走油。蔬菜烤好後拌入魚柳即可，不必再長時間烤。",
          "出爐擠檸檬汁。沙甸魚的細骨較軟，進食時仍要小心。"
        ]
      }
    ]
  },
  {
    weekday: 6,
    label: "星期六",
    focus: "重點：蒸蛋、黑豆和豆腐",
    meals: [
      {
        slot: "早餐",
        name: "菠菜豆腐蒸蛋",
        method: "蒸",
        time: "約 20 分鐘",
        ingredients: [
          ["雞蛋", "1 隻"],
          ["嫩豆腐", "80 克"],
          ["低脂奶", "80 毫升"],
          ["菠菜", "一小把（約 30 克）"],
          ["甘筍碎", "1 湯匙"],
          ["黑胡椒", "少許"]
        ],
        steps: [
          "菠菜用滾水灼 30 秒，過冷水，擠乾切碎。甘筍切碎。",
          "雞蛋打散，加入低脂奶。豆腐用叉壓成粗泥拌入，再加菠菜、甘筍碎和黑胡椒。",
          "倒入小碗，蓋上碟子，以免蒸氣水滴在蛋面。",
          "水滾後隔水中火蒸 10 至 12 分鐘。筷子插入中心、汁水清澈即熟。蒸太久會變老。"
        ]
      },
      {
        slot: "午餐",
        name: "黑豆粟米雞胸碗",
        method: "蒸、拌",
        time: "約 25 分鐘",
        ingredients: [
          ["去皮雞胸", "120 克"],
          ["熟黑豆", "80 克"],
          ["粟米粒", "40 克"],
          ["生菜", "2 塊"],
          ["車厘茄", "4 粒"],
          ["檸檬汁", "1 湯匙"],
          ["橄欖油", "1 茶匙"],
          ["黑胡椒", "少許"],
          ["熟雜糧飯", "半碗"]
        ],
        steps: [
          "乾黑豆需預浸過夜，再煮 40 至 50 分鐘；罐頭黑豆沖淨即可。未有熟飯就用乾米約 25 克，加水約 50 毫升煮好。",
          "雞胸放碟，水滾後蒸 12 至 15 分鐘至全熟，切片。",
          "冷凍粟米用滾水灼 1 分鐘，瀝乾。生菜鋪開，車厘茄對半。",
          "碗中鋪生菜，放半碗飯、黑豆、粟米、車厘茄和雞片。",
          "淋 1 茶匙橄欖油和 1 湯匙檸檬汁，撒黑胡椒，拌勻再食。"
        ]
      },
      {
        slot: "下午小食",
        name: "士多啤梨低脂乳酪",
        method: "拌",
        time: "約 5 分鐘",
        ingredients: [
          ["低脂原味乳酪（無加糖）", "100 克"],
          ["士多啤梨", "5 粒"]
        ],
        steps: [
          "士多啤梨沖淨，去蒂切片。",
          "鋪在乳酪上面。",
          "不要加砂糖、煉奶或蜜糖。揀原味低脂，避免本身已經很甜的乳酪。"
        ]
      },
      {
        slot: "晚餐",
        name: "冬菇豆腐煲",
        method: "煮、灼",
        time: "約 30 分鐘",
        ingredients: [
          ["硬豆腐", "150 克"],
          ["乾冬菇", "4 隻（或鮮冬菇 6 隻）"],
          ["薑", "2 片"],
          ["蒜頭", "2 瓣"],
          ["蔥", "1 條"],
          ["芥花籽油", "1 茶匙"],
          ["生抽", "1 茶匙"],
          ["清水", "150 毫升"],
          ["菜心", "200 克"]
        ],
        steps: [
          "乾冬菇浸軟約 20 分鐘，去蒂切片。浸泡水可留 100 毫升，不要倒入渣滓。鮮冬菇直接切片。豆腐切塊。",
          "小煲或鑊下半茶匙油，中火爆香薑和一半蒜片，放冬菇炒 1 分鐘。",
          "加入豆腐、浸泡水或清水，以及 1 茶匙生抽。煮滾後轉小火 8 分鐘，至汁略濃。撒蔥花。",
          "菜心用滾水灼 1 至 2 分鐘，瀝乾。剩餘半茶匙油爆香餘下蒜蓉，拌入菜心。",
          "豆腐煲配蒜蓉菜心。汁已有生抽，上桌不必再加鹽。這餐可以不加飯。"
        ]
      }
    ]
  },
  {
    weekday: 0,
    label: "星期日",
    focus: "重點：燕麥煎餅和眉豆",
    meals: [
      {
        slot: "早餐",
        name: "香蕉燕麥煎餅",
        method: "少油香煎",
        time: "約 15 分鐘",
        ingredients: [
          ["熟香蕉", "1 隻"],
          ["燕麥片", "40 克"],
          ["低脂奶", "2 湯匙"],
          ["肉桂粉", "少許，可免"],
          ["芥花籽油", "1 茶匙"],
          ["藍莓", "數粒，可免"]
        ],
        steps: [
          "香蕉壓成茸，加入燕麥、低脂奶和肉桂，拌勻。靜置 5 分鐘，讓燕麥吸濕。如果麵糊太稀，再加 1 茶匙燕麥。",
          "不黏鑊以小火燒熱，用廚房紙薄薄抹上 1 茶匙芥花籽油。",
          "每個煎餅約用 2 至 3 湯匙麵糊，鋪成小圓片。中小火每面煎約 2 至 3 分鐘，至兩面金黃、中心熟透。",
          "可配數粒藍莓。不要加油、煉奶或糖漿。"
        ]
      },
      {
        slot: "午餐",
        name: "節瓜蝦仁豆腐湯",
        method: "煮",
        time: "約 20 分鐘",
        ingredients: [
          ["蝦仁", "100 克"],
          ["嫩豆腐", "120 克"],
          ["節瓜", "150 克"],
          ["冬菇", "2 隻"],
          ["粉絲（乾）", "15 克"],
          ["薑", "2 片"],
          ["清水", "500 毫升"],
          ["白胡椒", "少許"],
          ["蔥", "1 條"]
        ],
        steps: [
          "蝦仁挑去腸線，沖淨抹乾。節瓜去皮切片，豆腐切塊，冬菇切片。粉絲浸軟，剪短。",
          "清水加薑片煮滾，放節瓜和冬菇，煮 3 分鐘。",
          "放入豆腐和粉絲，再煮 2 分鐘。",
          "最後放蝦仁，煮至蝦身變色彎曲，約 1 至 2 分鐘即熄火。蝦仁煮太久會韌。",
          "撒白胡椒和蔥花。湯保持淡味，不必加鹽。"
        ]
      },
      {
        slot: "下午小食",
        name: "鷹嘴豆泥配青瓜",
        method: "拌",
        time: "約 10 分鐘",
        ingredients: [
          ["鷹嘴豆（熟，罐頭沖淨）", "80 克"],
          ["橄欖油", "1 茶匙"],
          ["檸檬汁", "1 茶匙"],
          ["蒜頭", "半瓣，可免"],
          ["青瓜", "半條"],
          ["黑胡椒", "少許"]
        ],
        steps: [
          "鷹嘴豆用叉或匙羹壓成粗泥。想更幼滑，可用攪拌機打數秒。",
          "拌入 1 茶匙橄欖油、1 茶匙檸檬汁、黑胡椒和少許蒜。太乾可加 1 茶匙水。",
          "青瓜洗淨切條，用來蘸豆泥。這是小食份量，不必配餅或酥皮。"
        ]
      },
      {
        slot: "晚餐",
        name: "番茄眉豆燴",
        method: "煮",
        time: "約 40 分鐘",
        ingredients: [
          ["眉豆或芸豆（熟，罐頭沖淨）", "100 克"],
          ["番茄", "1 個"],
          ["洋蔥", "半個"],
          ["蒜頭", "1 瓣"],
          ["甘筍", "半條"],
          ["西芹", "1 條"],
          ["橄欖油", "1 茶匙"],
          ["清水", "80 毫升"],
          ["黑胡椒或乾香草", "少許"],
          ["糙米或雜糧米", "50 克"],
          ["菜心", "100 克，可免"]
        ],
        steps: [
          "米洗淨放入飯煲，加約 100 毫升水，煮好悶 10 分鐘。沒有飯煲就用細鑊煮滾後細火約 30 分鐘。",
          "洋蔥、蒜、甘筍、西芹、番茄切件。豆沖淨瀝乾。",
          "鑊下 1 茶匙油，中火炒洋蔥和蒜至軟，約 2 分鐘。加甘筍和西芹再炒 2 分鐘。",
          "放番茄炒至出汁，倒入眉豆和清水，小火煮約 8 分鐘。以胡椒或香草調味。",
          "配雜糧飯。若加菜心，滾水灼 1 分鐘即可。"
        ]
      }
    ]
  }
];

const SLOTS = ["早餐", "午餐", "下午小食", "晚餐"];

function assertPlan(days) {
  if (days.length !== 7) {
    throw new Error("餐單需要七日");
  }
  const weekdays = new Set(days.map((day) => day.weekday));
  if (weekdays.size !== 7) {
    throw new Error("星期重複或缺少");
  }
  const names = new Set();
  days.forEach((day) => {
    if (day.meals.length !== 4) {
      throw new Error(day.label + " 應該有四餐");
    }
    day.meals.forEach((meal, index) => {
      if (meal.slot !== SLOTS[index]) {
        throw new Error(day.label + " 餐序不對");
      }
      if (!meal.ingredients.length || !meal.steps.length) {
        throw new Error(meal.name + " 缺少材料或煮法");
      }
      if (names.has(meal.name)) {
        throw new Error("菜式重複：" + meal.name);
      }
      names.add(meal.name);
    });
  });
}

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([key, value]) => {
    if (key === "class") {
      node.className = value;
    } else if (value === true) {
      node.setAttribute(key, "");
    } else if (value !== false && value != null) {
      node.setAttribute(key, String(value));
    }
  });
  (children || []).forEach((child) => {
    if (child == null || child === "") return;
    node.append(child);
  });
  return node;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function centerTab(tab) {
  const parent = tab.parentElement;
  const left = tab.offsetLeft - (parent.clientWidth - tab.offsetWidth) / 2;
  parent.scrollTo({
    left: Math.max(0, left),
    behavior: prefersReducedMotion() ? "auto" : "smooth"
  });
}

const menu = document.querySelector("#menu");
const scroller = document.querySelector("#day-scroller");
const today = new Date().getDay();
let current = null;

function renderMeal(meal) {
  const ingredientItems = meal.ingredients.map(([name, qty]) =>
    el("li", {}, [el("span", {}, [name]), el("span", { class: "qty" }, [qty])])
  );
  const stepItems = meal.steps.map((step) => el("li", {}, [step]));
  return el("article", { class: "meal", "data-slot": meal.slot }, [
    el("div", { class: "meal-top" }, [
      el("span", { class: "slot" }, [meal.slot]),
      el("span", { class: "meta" }, [meal.time + " · " + meal.method])
    ]),
    el("h3", {}, [meal.name]),
    el("p", { class: "ings-label" }, ["材料（一人份）"]),
    el("ul", { class: "ings" }, ingredientItems),
    el("details", {}, [
      el("summary", {}, ["煮法 · " + meal.steps.length + " 步"]),
      el("ol", { class: "steps" }, stepItems)
    ])
  ]);
}

function renderPanel(day) {
  const isToday = day.weekday === today;
  const headingChildren = [day.label];
  if (isToday) {
    headingChildren.push(el("span", { class: "seal" }, ["今日"]));
  }
  const head = el("div", { class: "day-head" }, [
    el("h2", { class: "day-title", id: "day-heading" }, headingChildren),
    isToday
      ? null
      : el("button", { type: "button", class: "back-today", id: "back-today" }, ["返回今日"])
  ]);
  menu.replaceChildren(
    head,
    el("p", { class: "focus" }, [day.focus]),
    el("p", { class: "portion" }, ["一人份 · 材料份量是約數"]),
    ...day.meals.map(renderMeal)
  );
  menu.setAttribute("aria-labelledby", "tab-" + day.weekday);
  const back = document.getElementById("back-today");
  if (back) {
    back.addEventListener("click", () => selectDay(today, { scrollMenu: true }));
  }
}

function paintTabs() {
  scroller.querySelectorAll('[role="tab"]').forEach((tab) => {
    const selected = Number(tab.dataset.weekday) === current;
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.tabIndex = selected ? 0 : -1;
  });
}

function selectDay(weekday, options) {
  const settings = options || {};
  const day = DAYS.find((item) => item.weekday === weekday);
  if (!day) return;
  current = weekday;
  paintTabs();
  renderPanel(day);
  const tab = scroller.querySelector('[data-weekday="' + weekday + '"]');
  if (tab) {
    centerTab(tab);
    if (settings.focusTab) tab.focus();
  }
  if (settings.scrollMenu) {
    menu.scrollIntoView({
      block: "start",
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  }
}

function buildTabs() {
  DAYS.forEach((day) => {
    const children = [day.label];
    if (day.weekday === today) {
      children.push(el("span", { class: "flag" }, ["今日"]));
    }
    const tab = el("button", {
      type: "button",
      class: "day-chip",
      role: "tab",
      id: "tab-" + day.weekday,
      "aria-controls": "menu",
      "data-weekday": String(day.weekday),
      "aria-label": day.weekday === today ? day.label + "，今日" : day.label
    }, children);
    tab.addEventListener("click", () => selectDay(day.weekday, { scrollMenu: true }));
    scroller.append(tab);
  });

  scroller.addEventListener("keydown", (event) => {
    const order = DAYS.map((day) => day.weekday);
    const index = order.indexOf(current);
    let next = null;
    if (event.key === "ArrowRight") next = order[(index + 1) % order.length];
    else if (event.key === "ArrowLeft") next = order[(index - 1 + order.length) % order.length];
    else if (event.key === "Home") next = order[0];
    else if (event.key === "End") next = order[order.length - 1];
    else return;
    event.preventDefault();
    selectDay(next, { focusTab: true });
  });
}

function init() {
  if (!menu || !scroller) return;
  assertPlan(DAYS);
  buildTabs();
  selectDay(today);
  const jumpToday = document.querySelector("[data-jump='today']");
  if (jumpToday) {
    jumpToday.addEventListener("click", (event) => {
      event.preventDefault();
      selectDay(today, { scrollMenu: true });
    });
  }
}

init();
