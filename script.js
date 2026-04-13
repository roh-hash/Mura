/* ============================================
   Mura — Menu data + rendering + tab filter
   ============================================ */

const MENU_DATA = {
  sushi: [
    {
      title: 'Mura Specialty Rolls',
      subtitle: '8 pieces · 무라스페셜롤',
      items: [
        { name: 'Crunchy Salmon Roll', price: '14.99', desc: 'Spicy salmon, tempura flake, red snapper and avocado on top.' },
        { name: 'Rainbow Roll', price: '14.99', desc: 'California roll with salmon, red snapper, tuna and avocado on top.' },
        { name: 'Dragon Roll', price: '14.99', desc: 'Eel, crab meat stick, avocado and eel sauce on top.' },
        { name: 'Crazy Roll', price: '14.99', desc: 'Eel, avocado and spicy salmon on top with eel sauce and tempura flake.' },
        { name: 'Godzilla Roll', price: '14.99', desc: 'Shrimp tempura and cucumber topped with eel and avocado, dressed with eel sauce.' },
        { name: 'Crunchy Tuna Roll', price: '14.99', desc: 'Spicy tuna, tempura flake, salmon and avocado on top.' },
        { name: 'Black Dragon', price: '14.99', desc: 'Shrimp tempura and crab meat stick with whole eel on top and eel sauce.' },
        { name: 'Magic Salmon Roll', price: '14.99', desc: 'Fresh salmon, avocado and cucumber inside; spicy salmon on top.' },
        { name: 'King Kani Roll', price: '14.99', desc: 'Spicy crab and shrimp tempura inside; topped with crab, spicy mayo, eel sauce and tempura flake.' },
        { name: 'Tiger Roll', price: '14.99', desc: 'Shrimp tempura and avocado inside; topped with spicy crab, spicy mayo and eel sauce.' },
        { name: 'Hawaiian Roll', price: '14.99', desc: 'Shrimp tempura and cucumber inside; topped with spicy king crab.' },
        { name: 'Bloomington Roll', price: '14.99', desc: 'Tempura crabmeat and avocado inside; topped with salmon.' },
        { name: 'Salmon Lover Roll', price: '14.99', desc: 'Spicy salmon and cucumber inside; topped with salmon and avocado.' },
        { name: 'Honey Special', price: '14.99', desc: 'Spicy salmon inside; topped with tuna and avocado.' }
      ]
    },
    {
      title: 'Sushi Bar Rolls',
      subtitle: '8 pieces',
      items: [
        { name: 'Cucumber Roll', price: '6.99', desc: 'Cucumber rolled with sushi rice and seaweed.' },
        { name: 'Oshinko Roll', price: '6.99', desc: 'Japanese pickled yellow radish.' },
        { name: 'Avocado Roll', price: '6.99', desc: 'Sliced avocado wrapped in sushi rice and seaweed.' },
        { name: 'Vegetable Roll', price: '6.99', desc: 'Cucumber, avocado and oshinko.' },
        { name: 'California Roll', price: '6.99', desc: 'Cucumber, crab meat stick and avocado.' },
        { name: 'Alaska Roll', price: '6.99', desc: 'Salmon, avocado and cucumber.' },
        { name: 'Red Snapper Roll', price: '6.99', desc: 'With scallion.' },
        { name: 'Salmon Roll', price: '6.99', desc: 'Fresh salmon wrapped in seasoned sushi rice and crisp nori.' },
        { name: 'Salmon Avocado Roll', price: '6.99', desc: 'Salmon and avocado.' },
        { name: 'Tuna Roll', price: '6.99', desc: 'Slices of fresh tuna wrapped in seasoned rice and seaweed.' },
        { name: 'Eel Avocado Roll', price: '6.99', desc: 'Topped with eel sauce.' },
        { name: 'Eel Cucumber Roll', price: '6.99', desc: 'Topped with eel sauce.' },
        { name: 'Spicy Salmon Roll', price: '6.99', desc: 'Topped with spicy mayo.', spicy: true },
        { name: 'Spicy Tuna Roll', price: '6.99', desc: 'Topped with spicy mayo.', spicy: true },
        { name: 'Shrimp Tempura Cucumber Roll', price: '6.99', desc: 'Topped with eel sauce.' },
        { name: 'Shrimp Tempura Avocado Roll', price: '6.99', desc: 'Topped with eel sauce.' },
        { name: 'Shrimp Tempura Avocado & Cucumber Roll', price: '6.99', desc: 'Topped with eel sauce.' },
        { name: 'Philadelphia Crab Roll', price: '6.99', desc: 'Crab meat stick, cream cheese and avocado.' },
        { name: 'Philadelphia Salmon Roll', price: '6.99', desc: 'Fresh salmon, cream cheese and avocado.' },
        { name: 'Avocado & Cucumber Roll', price: '6.99', desc: 'Avocado and cucumber garnished with sesame seeds.' },
        { name: 'Spicy Crab Meat Roll', price: '6.99', desc: 'Topped with spicy mayo.', spicy: true },
        { name: 'Chicken Roll', price: '6.99', desc: 'Chicken, avocado and cucumber. Topped with eel sauce.' }
      ]
    },
    {
      title: 'Vegetable Rolls',
      subtitle: '야채롤',
      items: [
        { name: 'Cucumber Avocado Roll', price: '6.99', desc: 'Cucumber and avocado wrapped in sushi rice and nori with sesame seeds.' },
        { name: 'Cucumber Roll', price: '6.99', desc: 'A simple, classic cucumber maki.' },
        { name: 'Avocado Roll', price: '6.99', desc: 'Sushi rice and ripe avocado delicately wrapped in seaweed.' },
        { name: 'Oshinko Roll', price: '6.99', desc: 'Japanese pickled radish with a crisp, tangy flavor.' },
        { name: 'Vegetable Roll', price: '6.99', desc: 'Avocado, cucumber and oshinko.' }
      ]
    }
  ],

  korean: [
    {
      title: 'Korean Entrée · Meat',
      subtitle: '주방한국특선 · 육류',
      items: [
        { name: 'Spicy Sam-Kim', kr: '삼겹살김치', price: '19.99', desc: 'Thick-sliced pork belly with pan-fried kimchi and rice cakes.', spicy: true },
        { name: 'Grilled Chicken Teriyaki', kr: '치킨불고기', price: '17.99', desc: 'Sliced boneless chicken in teriyaki sauce.' },
        { name: 'Grilled Pork Spicy Teriyaki', kr: '제육볶음', price: '18.99', desc: 'Thinly sliced tender pork in a spicy sauce.', spicy: true },
        { name: 'Grilled Beef Teriyaki Rice', kr: '불고기', price: '19.99', desc: 'Sliced beef marinated in teriyaki sauce.' },
        { name: 'Deep Fried Chicken Cutlet', kr: '치킨까스', price: '16.99', desc: 'Breaded chicken cutlet, deep-fried and served with a tangy sauce.' },
        { name: 'Ojingeo Bokeum', kr: '오징어볶음', price: '19.99', desc: 'Spicy stir-fried squid and vegetables.', spicy: true },
        { name: 'Osam Bulgogi', kr: '오삼불고기', price: '19.99', desc: 'Spicy stir-fried squid and pork with vegetables.', spicy: true },
        { name: 'Godeungeo Gui', kr: '고등어구이', price: '16.99', desc: 'Pan-fried mackerel fish, lightly salted.' },
        { name: 'Spicy Chicken', kr: '매운닭갈비', price: '17.99', desc: 'Deep-fried chicken in a gochujang-garlic-ginger Korean sauce.', spicy: true }
      ]
    },
    {
      title: 'Korean Entrée · Soup',
      subtitle: '주방한국특선 · 국',
      items: [
        { name: 'Soondubu', kr: '매콤한해물순두부', price: '15.99', desc: 'Spicy soft tofu soup with mixed seafood, vegetables, egg and rice.', spicy: true },
        { name: 'Rice Cake Soup', kr: '떡국', price: '14.99', desc: 'Vegetables, sliced rice cake, egg, rice and beef.' },
        { name: 'Rice Cake & Dumpling Soup', kr: '떡만두국', price: '14.99', desc: 'Vegetable dumplings with sliced rice cake, egg, rice and beef.' },
        { name: 'Spicy Pork Kimchi Stew', kr: '김치찌개', price: '14.99', desc: 'Spicy kimchi stew with pork and vegetables, served with rice.', spicy: true },
        { name: 'Dumpling Soup', kr: '만두국', price: '14.99', desc: 'Vegetable dumplings, egg, rice and beef.' },
        { name: 'Spicy Army Stew', kr: '매콤한부대찌개', price: '17.99', desc: 'Spicy kimchi, ham, sausage, cheese, pork, vegetables and rice.', spicy: true },
        { name: 'Soondaeguk', kr: '순대국', price: '18.99', desc: 'Sundae (Korean blood sausage) and vegetables in a savory broth.' },
        { name: 'Gamjatang', kr: '감자탕', price: '17.99', desc: 'Spicy pork back neck bone soup.', spicy: true },
        { name: 'Galbitang', kr: '갈비탕', price: '19.99', desc: 'Beef tender soup.' },
        { name: 'Spicy Galbitang', kr: '매운갈비탕', price: '19.99', desc: 'Spicy beef tender soup.', spicy: true },
        { name: 'Ginseng Samgyetang', kr: '삼계탕', price: '22.99', desc: 'Whole chicken soup.' }
      ]
    },
    {
      title: 'Korean Entrée · Mixed Rice',
      subtitle: '주방한국특선 · 밥',
      items: [
        { name: 'Vegetable & Egg Fried Rice', kr: '야채계란볶음밥', price: '14.99', desc: 'Stir-fried rice with vegetables and egg.' },
        { name: 'Bibimbap', kr: '비빔밥', price: '14.99', desc: 'Rice bowl with cooked vegetables, egg, and your choice of beef, fried tofu, pork, chicken or kimchi.' },
        { name: 'Beef Fried Rice', kr: '소고기볶음밥', price: '14.99', desc: 'Stir-fried rice with beef, assorted vegetables and egg.' },
        { name: 'Chicken Fried Rice', kr: '치킨볶음밥', price: '14.99', desc: 'Fried rice with chicken, vegetables and egg.' },
        { name: 'Shrimp Fried Rice', kr: '새우볶음밥', price: '14.99', desc: 'Stir-fried rice with shrimp, mixed vegetables and egg.' }
      ]
    },
    {
      title: 'Bento Box',
      subtitle: '벤토박스',
      items: [
        { name: 'Tofu & Vegetable Bento', kr: '두부랑야채벤토', price: '18.99', desc: 'Stir-fried tofu, rice, potato korokke, 4pc roll and salad.' },
        { name: 'Chicken Teriyaki Bento', kr: '치킨데리야끼벤또박스', price: '18.99', desc: '4-piece roll, salad and potato korokke.' },
        { name: 'Beef Teriyaki Bento', kr: '비프데리야끼벤또박스', price: '19.99', desc: 'Beef teriyaki with steamed rice, miso soup, tempura, California roll and salad.' },
        { name: 'Spicy Pork Bento', kr: '돼지벤토박스', price: '18.99', desc: 'Marinated spicy pork, steamed rice, vegetables and miso soup.', spicy: true },
        { name: 'Salmon Bento', kr: '살몬 도시락', price: '19.99', desc: 'Grilled teriyaki salmon, California roll, tamago, seaweed salad, breaded shrimp, pickled radish, arugula and sushi rice.' },
        { name: 'Deep Fried Chicken Cutlet Bento', kr: '치킨까스벤토', price: '18.99', desc: 'Deep-fried chicken cutlet with rice, salad, miso soup and side dishes.' }
      ]
    },
    {
      title: 'Lunch Bento Special',
      subtitle: '12:00 – 14:30',
      items: [
        { name: 'Chicken Bento', price: '14.99', desc: 'Chicken teriyaki, California roll (4pc), shrimp tempura, vegetable tempura, steamed rice, salad and miso soup.' },
        { name: 'Spicy Chicken Bento', price: '14.99', desc: 'Grilled chicken in spicy sauce with steamed rice, house salad and a spring roll.', spicy: true },
        { name: 'Spicy Pork Bento', price: '14.99', desc: 'Spicy marinated pork stir-fried with vegetables, steamed rice, salad and miso soup.', spicy: true },
        { name: 'Salmon Bento', price: '15.99', desc: 'Salmon teriyaki, tempura, California roll, rice, salad and miso soup.' }
      ]
    },
    {
      title: 'Kimbap',
      subtitle: '한국의 김밥',
      items: [
        { name: 'Cheese Kimbap', kr: '치즈김밥', price: '8.99', desc: 'Seaweed rice roll with American cheese, egg and vegetables.' },
        { name: 'Beef Kimbap', kr: '소고기김밥', price: '9.99', desc: 'Seaweed-wrapped roll with marinated beef, egg, carrot, cucumber and pickled radish.' },
        { name: 'Chicken Kimbap', kr: '치킨김밥', price: '9.99', desc: 'Seasoned chicken with egg, spinach, carrot, pickled radish and cucumber.' },
        { name: 'Vegetable Kimbap', kr: '야채김밥', price: '8.99', desc: 'Assorted vegetables with pickled radish.' },
        { name: 'Kimchi Kimbap', kr: '김치김밥', price: '8.99', desc: 'Spicy stir-fried kimchi, rice, spinach and carrots.', spicy: true }
      ]
    },
    {
      title: 'Appetizers',
      subtitle: '에피타이져',
      items: [
        { name: 'Steamed Vegetable Dumplings', kr: '야채물만두', price: '8.99', desc: '5 pieces of vegetable steamed dumplings.' },
        { name: 'Seafood Pancake', kr: '해물파전', price: '17.99', desc: 'Asian-style pancake with mixed seafood and vegetables.' },
        { name: 'Pork Gyoza', kr: '돼지만두튀김', price: '8.99', desc: '5 pieces of deep-fried pork dumplings.' },
        { name: 'Vegetable Spring Rolls', kr: '스프링롤', price: '9.99', desc: '5 pieces of fried spring rolls with sweet chili dipping sauce.' },
        { name: 'Kimchi Pancake', kr: '김치전', price: '17.99', desc: 'Asian-style pancake with kimchi and vegetables.' },
        { name: 'Soonsal Chicken', kr: '순살치킨', price: '10.99', desc: 'Korean-style chicken tenders in sauce.' },
        { name: 'Tteokbokki', kr: '떡볶이', price: '12.99', desc: 'Stir-fried rice cakes in spicy Korean sauce with vegetables.', spicy: true },
        { name: 'Vegetable Fried Dumplings', kr: '야채튀김만두', price: '8.99', desc: '5 pieces of fried vegetable dumplings.' },
        { name: 'Shumai', kr: '슈마이', price: '8.99', desc: '5 pieces of steamed shrimp dumplings.' },
        { name: 'Edamame', kr: '에다마메', price: '7.99', desc: 'Blanched and lightly salted Japanese soy beans.' },
        { name: 'Seaweed Salad', kr: '미역샐러드', price: '7.99', desc: 'Fresh seaweed with sesame seeds and light dressing.' },
        { name: 'Tteok Kochi', kr: '떡꼬치', price: '11.99', desc: 'Fried rice cake skewers with Korean-style sauce.' },
        { name: 'Shrimp Tempura (5pc)', kr: '새우튀김', price: '10.99', desc: 'Five pieces of lightly battered deep-fried shrimp with dipping sauce.' },
        { name: 'Steamed Pork Dumplings', kr: '돼지물만두', price: '8.99', desc: '5 pieces of pork steamed dumplings.' },
        { name: 'Chicken Wings (7pc)', price: '18.99', desc: 'Korean-style wings in sweet and spicy sauce.' },
        { name: 'Spicy French Fries', price: '6.99', desc: 'Deep-fried potato sticks served with spicy sauce.', spicy: true },
        { name: 'Potato Korokke (3pc)', kr: '고로케', price: '9.99', desc: 'Fried potato croquettes.' },
        { name: 'Chicken Fried Dumplings (5pc)', kr: '치킨군만두', price: '8.99', desc: 'Crispy fried dumplings with chicken and vegetables.' },
        { name: 'Chicken Steamed Dumplings (5pc)', kr: '치킨물만두', price: '8.99', desc: 'Steamed dumplings with chicken and light vegetables.' }
      ]
    },
    {
      title: 'Banchan · Side Dishes',
      items: [
        { name: 'House-Made Kimchi (16oz)', price: '7.99', desc: 'Salted and fermented napa cabbage seasoned with Korean chili powder.' },
        { name: 'Fish Cakes (8oz)', price: '5.99', desc: 'Thinly sliced fish cakes stir-fried with carrots, green peppers and sesame.' },
        { name: 'Sweet Potato in Soy Sauce (8oz)', price: '4.99', desc: 'Sweet potato glazed with soy sauce.' }
      ]
    }
  ],

  ramen: [
    {
      title: 'Stir-Fried Yaki Udon',
      subtitle: '야끼우동',
      items: [
        { name: 'Shrimp Yaki Udon', kr: '새우야끼우동', price: '14.99', desc: 'Stir-fried udon with shrimp, cabbage, carrots and green onions.' },
        { name: 'Beef Yaki Udon', kr: '비프야끼우동', price: '14.99', desc: 'Stir-fried udon with sliced beef and vegetables in a soy-based sauce.' },
        { name: 'Vegetable Yaki Udon', kr: '야채야끼우동', price: '14.99', desc: 'Thick udon with bok choy, mushrooms, carrots, onions and cabbage.' },
        { name: 'Chicken Yaki Udon', kr: '치킨야끼우동', price: '14.99', desc: 'Stir-fried udon with chicken, cabbage, carrots and onions.' },
        { name: 'Pork Yaki Udon', kr: '돼지야끼우동', price: '14.99', desc: 'Stir-fried udon with pork, cabbage, carrots, onions and mushrooms.' }
      ]
    },
    {
      title: 'Udon with Soup',
      subtitle: '우동',
      items: [
        { name: 'Tofu Vegetable Udon', kr: '두부야채우동', price: '14.99', desc: 'Thick wheat noodles in savory broth with tofu and vegetables.' },
        { name: 'Chicken Udon', kr: '치킨우동', price: '14.99', desc: 'Udon in savory broth with chicken, vegetables, green onions and nori.' },
        { name: 'Shrimp Tempura Udon', kr: '새우템푸라튀김우동', price: '14.99', desc: 'Udon in savory broth topped with crispy shrimp tempura.' },
        { name: 'Beef Udon', kr: '비프우동', price: '14.99', desc: 'Udon in savory broth with thinly sliced beef and vegetables.' },
        { name: 'Shrimp Udon', kr: '새우우동', price: '14.99', desc: 'Udon in savory broth with shrimp, green onions and seaweed.' }
      ]
    },
    {
      title: 'Stir-Fried Yakisoba',
      subtitle: '야끼소바',
      items: [
        { name: 'Vegetable Yakisoba', kr: '야채야끼소바', price: '14.99', desc: 'Japanese noodles with cabbage, carrots, onions and yakisoba sauce.' },
        { name: 'Chicken Yakisoba', kr: '치킨야끼소바', price: '14.99', desc: 'Chicken yakisoba with bell peppers, carrots, cabbage and green onions.' },
        { name: 'Shrimp Yakisoba', kr: '새우야끼소바', price: '14.99', desc: 'Sautéed shrimp with noodles, mushrooms, asparagus, scallions and sesame.' },
        { name: 'Beef Yakisoba', kr: '비프야끼소바', price: '14.99', desc: 'Yakisoba with beef, cabbage, onions and carrots in savory sauce.' },
        { name: 'Pork Yakisoba', kr: '돼지야끼소바', price: '14.99', desc: 'Egg noodles with sliced pork, cabbage, carrots and onions in sweet-savory sauce.' }
      ]
    },
    {
      title: 'Korean Noodle Specialties',
      subtitle: '주방퓨전특선',
      items: [
        { name: 'Chappong', kr: '짬뽕', price: '17.99', desc: 'Spicy thick flour noodle soup with mixed seafood and vegetables.', spicy: true },
        { name: 'Chajangmyun', kr: '짜장면', price: '17.99', desc: 'Flour noodle in black bean sauce with pork and vegetables.' },
        { name: 'Naengmyun · Cold Noodles', kr: '물냉면', price: '16.99', desc: 'Cold buckwheat noodles in chilled beef broth topped with beef, vegetables and egg.' },
        { name: 'Spicy Bibim Naengmyun', kr: '비빔냉면', price: '16.99', desc: 'Spicy cold buckwheat noodles with beef, vegetables and egg.', spicy: true },
        { name: 'Vegetables Yellow Curry', kr: '야채카레', price: '16.99', desc: 'Vegetables and spices simmered in a rich curry, served over rice.' },
        { name: 'Chicken Japchae', kr: '치킨잡채', price: '16.99', desc: 'Stir-fried sweet potato noodles topped with chicken.' },
        { name: 'Beef Japchae', kr: '소고기잡채', price: '16.99', desc: 'Stir-fried sweet potato noodles topped with beef.' },
        { name: 'Pork Japchae', kr: '돼지잡채', price: '16.99', desc: 'Stir-fried sweet potato noodles topped with pork.' },
        { name: 'Shrimp Japchae', kr: '새우잡채', price: '16.99', desc: 'Stir-fried sweet potato noodles topped with shrimp.' },
        { name: 'Tofu Japchae', kr: '두부잡채', price: '16.99', desc: 'Stir-fried sweet potato noodles topped with fried tofu.' }
      ]
    },
    {
      title: 'Ramen',
      subtitle: '라면 · served with rice',
      items: [
        { name: 'Beef Ramen', kr: '소고기 라면', price: '14.99', desc: 'Ramen soup served with rice.' },
        { name: 'Pork Ramen', kr: '돼지라면', price: '14.99', desc: 'Ramen soup served with rice.' },
        { name: 'Chicken Ramen', kr: '치킨라면', price: '14.99', desc: 'Ramen soup served with rice.' },
        { name: 'Rice Cake Ramen', kr: '떡라면', price: '14.99', desc: 'Ramen soup served with rice.' },
        { name: 'Cheese Ramen', kr: '치즈라면', price: '14.99', desc: 'Ramen soup served with rice.' },
        { name: 'Kimchi Ramen', kr: '김치라면', price: '14.99', desc: 'Ramen soup served with rice.', spicy: true }
      ]
    },
    {
      title: 'Vegetarian Noodles & Bowls',
      subtitle: '채식주의자를 위한 음식',
      items: [
        { name: 'Vegetable Ramen', kr: '야채라면', price: '14.99', desc: 'Ramen soup served with rice.' },
        { name: 'Tofu Vegetable Yaki Udon', kr: '두부야끼우동', price: '14.99', desc: 'Fried tofu stir-fried with udon noodles.' },
        { name: 'Tofu Vegetable Yakisoba', kr: '두부야채야끼소바', price: '14.99', desc: 'Stir-fried tofu with egg noodles.' },
        { name: 'Vegetable Udon with Soup', kr: '야채우동', price: '14.99', desc: 'Udon in savory broth with cabbage, carrots, broccoli and mushrooms.' },
        { name: 'Tofu Japchae', kr: '두부잡채', price: '15.99', desc: 'Stir-fried sweet potato noodles with tofu and vegetables in soy sauce.' },
        { name: 'Tofu Bibimbap', kr: '두부비빔밥', price: '14.99', desc: 'Rice bowl topped with fried tofu and cooked vegetables.' },
        { name: 'Vegetable Fried Rice', kr: '야채볶음밥', price: '14.99', desc: 'Mixed vegetables with rice, no egg.' },
        { name: 'Vegetable Spicy Soft Tofu Soup', kr: '야채순두부', price: '14.99', desc: 'Spicy soft tofu soup with vegetables and rice, no egg.', spicy: true },
        { name: 'Vegetable Rice Cake Soup', kr: '야채떡국', price: '14.99', desc: 'Sliced rice cake soup with vegetables and rice.' },
        { name: 'Vegetable Rice Cake & Dumpling Soup', kr: '야채떡만두국', price: '14.99', desc: 'Vegetable dumpling, sliced rice cake and rice.' },
        { name: 'Vegetable Dumpling Soup', kr: '야채만두국', price: '14.99', desc: 'Vegetable dumplings and rice.' },
        { name: 'Vegetable Curry', kr: '야채카레', price: '13.99', desc: 'Japanese vegetable curry in a rich curry sauce, served with rice.' },
        { name: 'Tofu & Vegetable Bento', kr: '두부벤토', price: '18.99', desc: 'Stir-fried tofu, rice, vegetable dumplings, 4pc roll and salad.' }
      ]
    }
  ],

  drinks: [
    {
      title: 'Drinks',
      subtitle: '음료',
      items: [
        { name: 'Soft Drinks', price: '2.99', desc: 'Coke · Diet Coke · Sprite · Dr. Pepper · Lemonade. Served as a fountain drink in a 16 oz cup.' },
        { name: 'Milkis', kr: '밀키스', price: '3.00', desc: 'Korean carbonated drink with milk and a slightly sweet yogurt taste.' },
        { name: 'Aloe', kr: '알로에', price: '3.50', desc: 'Aloe vera juice with natural aloe pulp.' },
        { name: 'Ramune', kr: '라무네', price: '3.99', desc: 'Traditional Japanese carbonated soda in a marble-sealed bottle.' },
        { name: 'Brown Sugar Bubble Tea (can)', price: '4.50', desc: 'Canned bubble tea with brown sugar and tapioca pearls.' },
        { name: 'Matcha Bubble Tea (can)', price: '4.50', desc: 'Canned matcha bubble tea with tapioca pearls.' },
        { name: 'Taro Bubble Tea (can)', price: '4.50', desc: 'Canned taro bubble tea with tapioca pearls.' },
        { name: 'Korean Banana Milk', price: '3.50', desc: 'A sweet and creamy blend of banana flavor with milk.' },
        { name: 'Korean Ice Milk Coffee', price: '5.99', desc: 'Chilled coffee with sweetened milk, Korean-style.' }
      ]
    },
    {
      title: 'Desserts',
      subtitle: '디저트',
      items: [
        { name: 'New York Cheesecake', kr: '뉴욕치즈케이크', price: '5.99', desc: 'Creamy cheesecake with a rich texture and buttery graham cracker crust.' },
        { name: 'Donuts', price: '10.99', desc: 'Fluffy donuts topped with pink icing and colorful sprinkles.' },
        { name: 'Macarons (5pc)', price: '10.00', desc: 'Five macarons in flavors such as chocolate, raspberry and vanilla.' },
        { name: 'Korean Hotdog', kr: '핫도그', price: '5.99', desc: 'Mozzarella and fish cake corn dogs with yum yum sauce.' },
        { name: 'Hoteok', kr: '호떡', price: '5.99', desc: 'Korean pancake filled with brown sugar.' }
      ]
    },
    {
      title: 'Add-Ons',
      items: [
        { name: 'Miso Soup', price: '3.00', desc: 'Savory broth with miso paste and chopped green onions.' },
        { name: 'Just White Rice', price: '3.00', desc: 'Steamed white rice.' },
        { name: 'Just Fried Egg', price: '2.50', desc: 'Single fried egg served atop steamed rice.' },
        { name: 'Spicy Mayo', price: '1.99', desc: 'Creamy blend of mayonnaise and spices with a spicy kick.' },
        { name: 'Eel Sauce', price: '1.99', desc: 'Sweet and savory soy-based condiment for sushi and grilled items.' }
      ]
    }
  ]
};

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

function renderMenu() {
  const container = document.getElementById('menu-content');
  if (!container) return;

  const html = Object.entries(MENU_DATA).map(([tabKey, categories]) => {
    const catsHtml = categories.map((cat) => {
      const itemsHtml = cat.items.map((item) => {
        const spicy = item.spicy ? '<span class="menu-item__spicy" aria-label="spicy">🌶</span>' : '';
        const kr = item.kr ? `<span class="menu-item__kr">${escapeHtml(item.kr)}</span>` : '';
        const desc = item.desc ? `<p class="menu-item__desc">${escapeHtml(item.desc)}</p>` : '';
        return `
          <article class="menu-item">
            <div class="menu-item__head">
              <h4 class="menu-item__name">${spicy}${escapeHtml(item.name)}${kr}</h4>
              <span class="menu-item__dots"></span>
              <span class="menu-item__price">$${escapeHtml(item.price)}</span>
            </div>
            ${desc}
          </article>`;
      }).join('');

      return `
        <section class="menu-category">
          <div class="menu-category__header">
            <h3 class="menu-category__title">${escapeHtml(cat.title)}</h3>
            ${cat.subtitle ? `<span class="menu-category__sub">${escapeHtml(cat.subtitle)}</span>` : ''}
          </div>
          <div class="menu-items">${itemsHtml}</div>
        </section>`;
    }).join('');

    return `<div class="menu-panel" data-panel="${tabKey}">${catsHtml}</div>`;
  }).join('');

  container.innerHTML = html;
}

function setupTabs() {
  const tabs = document.querySelectorAll('[data-menu-tab]');
  const panels = document.querySelectorAll('.menu-panel');

  function activate(key, { scroll = false } = {}) {
    tabs.forEach((t) => t.classList.toggle('pill--active', t.dataset.menuTab === key));
    panels.forEach((p) => p.classList.toggle('menu-panel--active', p.dataset.panel === key));

    if (scroll) {
      const target = document.getElementById('menu');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      activate(tab.dataset.menuTab, { scroll: tab.dataset.scrollOnClick !== 'false' });
    });
  });

  activate('sushi');
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  setupTabs();
});
