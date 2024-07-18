'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7baafb72b62281946417fd2332636793",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6f744984331ab724677c42370b0b6f00",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "693eed22c8939dd1eda7373222084f1e",
".git/logs/refs/heads/main": "0b32b68af7e33410eb21dae09d4c3903",
".git/logs/refs/remotes/origin/main": "60dd5ae91e2b23f81081173c02a0b720",
".git/objects/02/6942b7c3c4f8d2df0971ffb1e67b9b7aa7f4d6": "bc0f4101fa0a31c1a8e2980ea77908b9",
".git/objects/06/cdd85d372161b0094dc0dd56f5ef8361c49bef": "197cbe1a370a97927c6d1936baf2d76d",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0d/17a92357c77ffb3ed89b09ea076456a3be739a": "b16577e855b00614a55ff78409c1bcd3",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/881da3f755f8ab0f1b51bcf76e2ee5021c17cd": "c7e755878087686453911445d1101d11",
".git/objects/14/0deb132565e5b42bcc0072561b6db0e3e34070": "224bfd03b302fe4e0b70d2ae9af4ef23",
".git/objects/16/1c93e383e6dd2868174aafe9ffc620a4c55459": "f0c00cecb5011e651778443457bc24b2",
".git/objects/17/8c50df794d0fd4dc40b72d2ebec678ee4285c8": "c86411ba5569479352cb8d9ed432c9f1",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/a18e984cdb211add76b4213ff6bb6309b79c98": "da3558b8b1b6f08531d18d82dfa4329d",
".git/objects/1a/c10ea894ab89951b50def7ce57b0cd0af86499": "5e7c15fe862b97fdf6e6d88ca44f27fa",
".git/objects/1b/5a74f140519b8baa0a277d3f48dcc33dea4f8b": "76dc576285c3c7734ed83bf000c1a543",
".git/objects/1c/187a09bf9cec7170a8bae85d8287ddf92bf23d": "ed3d97f2a53e848fa16526da2c54392e",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/77ea228db7a7f1e6e63e29ac6f77168c8b1c71": "7ad6581f0eff1fe58f83f0ca2ee02b55",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/aa3102849a7dae80dda24b26aaeb340017a0fe": "252a56a525a7f17f4d4a544bb3eff927",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/27/0bfa977964725f03fb572c74d05716fe2b55ea": "2490b0c3e2cba67b7b989cc1a709bf3b",
".git/objects/2e/256d77bce052de2b13668de41f7b32a8e0793a": "44c90077a92ecfc34d7eec7718a98722",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/37/8b614d0a4a70a610f3502a1646381ca70e880d": "d86d0fdf479e03ed709b2cabc0731c54",
".git/objects/3b/3f665db81ba549366bfa752d643f202271a29d": "11b494ded71175b4b85b7c917bc63f6b",
".git/objects/3d/ac3feb9f8c214e2429f475a3fcea2d85526f0d": "41d189fe1f6f691d6e5580fee4a0debd",
".git/objects/41/0b5e794aa38f4ff0cdf353ac3f9949abfa771c": "db4db34a93292bc86b6a9d34e2d0e71f",
".git/objects/44/287b49c62d42c1fac8f92e1fe0f9c900dfd4f3": "99550a257c63fda28079d943e475bb0b",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/bd588b2e453f26acf2450ba325d63b6c7491f8": "bc6758f0ff7f0c1999cffbe63b2ed463",
".git/objects/4c/a1b748db856863d86bfee6b178945aef937cb4": "c3ee763ff1f37afd14d95f841caa7e80",
".git/objects/4d/406c951c6113d33c8d5c9824ec87703d94747e": "a34ab4996ba20c39b72c59061186cc15",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5d/305762170727b54ee0e371ba2af4ec9f3adf0e": "0df2dcae1b742132d074244cb46c3fd0",
".git/objects/5d/8a3bd9d012fa2bc446dc96ac6d897d8e255527": "2b36cfd4cd3bc953f2b0258593340453",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/494bbe30094980d24b6a68356a124a198c87ba": "b8ff139fe380994a0f2581aecec75c59",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/66/c6e232cde654705f80ae3f6eeb3cd3ea6b86bd": "e527579b36de135aece1ced77d9b76ae",
".git/objects/67/23c0199f1fd9129c9151f3204df50d56972111": "ddf9f284c12dd51ae7c9993e37fca2c6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/75/5d7d59b794bb482c0c06be6e8e4e376539a19a": "c55e727b2bce1e108a4adce7166097c5",
".git/objects/79/ddf89141cbd69f5b792e00bed27ea24bf07209": "c884201832ad9cccf60ffb7f87fc0039",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/98b9a2801cd3ea241fba215b4ebe7fb858f072": "541abd9c3dbe66650f98330741f51b34",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/24ddddbd903c9f2ebcd742530b0dccb1251079": "5e99c41890ad0aafff59ba65d42a174a",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/1725693b8636edcd31f51809af518ea1d94082": "25fa4e41208c4b893f765b7510947df3",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/00ac3ca56be4ccf69354b7936bc2a47a421e9f": "0adf59d180814013c26f489aacdfb80d",
".git/objects/96/d5ff247c02c73b9b01316fa4e350283b4f25e8": "d3d257fae091183af2d8b70adf1180e2",
".git/objects/96/df707b5eeec62acace5976e105328e1f2798da": "0ca6ebbdbb6149e8c63aa4e20686a7ea",
".git/objects/98/4fc6f501c594b8f031112850bfd8c1ed145e14": "77f84ee8a24af6a6bc676c1f9fde57b0",
".git/objects/99/1a7f64d69040e031f84217b47e22ed11bad4c1": "071196e08d5f65e51c9c6216ee2fbc60",
".git/objects/9b/2537377e740e70a83430765d99012c67da199d": "2c2cc1045f7e998a9b6b63aebbff235b",
".git/objects/9c/0479ed049541212222dd96a78f0091e4fc24c1": "49525e0c4c247a09f5c93eaefe022eed",
".git/objects/9e/8d648f93b9340e099fae3adba41d5a4b4f10cf": "b2b090fdadfa330d3cbd28b18ca15bb2",
".git/objects/9e/e1b50ddb892bd3c42592995f8a6d3bce82ca7f": "9165a2a957dcfd368644370d8e39d651",
".git/objects/9f/9e8903f2981aea55b81e9ea13e07d9f1fa7660": "3a61ee7002ff57fbdf713b57fa66bb3d",
".git/objects/a2/ec9a59617096efd57e30a6cb3ed02fbbce5007": "01304f7de41f86d613242c1d3f7007a0",
".git/objects/a6/916c44d44a94f31a1c5730aa1f8b0d156b50ab": "6141d4ceb43ece8c4c68b0c779bb9274",
".git/objects/ac/d6ded308d586d282c417fa8e47ffff46c46a97": "2f5488ac617decbb0eeddb9e5e1b12c9",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b2/7069bc6af40602a5e3e82ee5393d851f1c7f9f": "0911ca048f469cc1231f3049ce70accc",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/1fe356e18a3afc6634a4315266ee41e88ace47": "1f9185762e13d545f2fbd1b693db14b4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/9529a4092c7720736cbbf60e754dc5671d2b63": "81366860fbab730ab1a4caa7e55bd24b",
".git/objects/c2/12c3306908922f29aa25ccfa3d51bea31529be": "8a407e651f1b9e6b3e81f98156c721be",
".git/objects/c9/2ba2b7088317348e48fb153c52d9a1a9d30844": "30752557ef98ca96fd92443606c94344",
".git/objects/c9/6edb66cab5f95f4a13e303d874d87a28da4579": "2a82b55834112d96a993a26d208a93e9",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/c1e49ed6d5bd73c11d35eb0d236793896a01c4": "b8c233d8fa6b248ea9aec224ca6683e7",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/af7a82691dc2dad9013a76cc0529377f6ead30": "f9a7670ed02d6e8cbe5afc44cea8a0eb",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6d6d030a4ccb4a47fe52c1ea49ec0e84f7837c": "d80471b4e8a660a5948f294874a8c71a",
".git/objects/d7/70ef967b0ca744ede296fb2b7e2ac5c18af536": "7dd528a7d23648a248203d7539f85258",
".git/objects/da/29fd409186fd67a056c0846f7e7b446633c740": "0345e8b68a180dce68dd4dd24641c20a",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/e0/f21967e7eeaff4b8b273764ebd57592fec8325": "97805da3a37cd77e592036fe01040205",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e4/dca50858bfcde437b23b0dd8db0953e9a9e3d2": "55df31e2bfc43f3d64c3de7f59671424",
".git/objects/e7/34aca4d5f2fc7aca32ecd3eda51a053af6d464": "4477c8b3fdb294fb2614f5c42f0ae49f",
".git/objects/e7/663525329fd3724bdeb74ca13c51f29d4a63f1": "9ac25d63147e997e257aa0ba518c6778",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/ea/176edccf7809e8b8cd10fc5d5489cebf17c5c3": "30e137badb5a94c07fa841f92c675e5a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/0d5fa3dd8597d2c7579d5f25a616049a3c4b59": "b24673f49bb608271f0927c4fa23e796",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/refs/heads/main": "8f39c56f2ced06238e108a8d4f3028d7",
".git/refs/remotes/origin/main": "8f39c56f2ced06238e108a8d4f3028d7",
"assets/AssetManifest.bin": "db7bc438f39588e68a4f22403f73e8d1",
"assets/AssetManifest.bin.json": "751b0245f8763c76dc46dd291b159a5c",
"assets/AssetManifest.json": "e84d10c02a4854a49110a293f407f3ff",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/images/backgraedchat.jpg": "025557a41636ac8bb373b99c36c1fe77",
"assets/assets/images/flag_arabic.png": "61841a0de6dce3820d54a7e183e1e17e",
"assets/assets/images/flag_english.png": "4137f7fcf480c91bd35872ab55fc1ac7",
"assets/assets/images/locationPhoto.jpg": "6e38107f9f88e07d91021f7243d83597",
"assets/assets/images/Logo.png": "051263cec227cc0e3f09fbbb897355eb",
"assets/assets/images/logoApp.png": "46f4ddd30ef6f875b65520d5940ee5ae",
"assets/assets/images/userimage.png": "23dc8d2384efec9f2db27e089352a627",
"assets/assets/json/copyright.json": "3b959fc429d2a762b0808fd0f7b4873b",
"assets/assets/json/delete.json": "ce8ec398922b8b64c55af311b0bac04f",
"assets/assets/json/dot.json": "427d551bd91d14a13951a0629da5723e",
"assets/assets/json/favorite.json": "95caba0d1b7ac3155c84bf5ff72d3eb8",
"assets/assets/json/help.json": "40c4d312bf3959c974c8befbcb50b9c6",
"assets/assets/json/location.json": "9a6d6d8115c2d8eaa804df1b23fb9df0",
"assets/assets/json/location_marker.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/json/loding.json": "03b1fa367671b3cb7b7a807e3c15e336",
"assets/assets/json/loding1.json": "5c5c1bcff9c5d40961871286cc855f9a",
"assets/assets/json/login.json": "1cda64bb4a2a1d34b87c3b4e37a1d942",
"assets/assets/json/notfacation.json": "30e7f600246745d440db13fe2714b8f3",
"assets/assets/json/notfound.json": "4c5dd398f9656d3479a04985eda12155",
"assets/assets/json/notfoundRelStalt.json": "40f505d5e4e8899a7072e70e59a08488",
"assets/assets/json/no_internet.json": "63c7cfda61cf3145db7a58bd34e92dfc",
"assets/assets/json/onbording1.json": "6aad0380c315067e17bd470d5acb3035",
"assets/assets/json/onbording2.json": "105df9f4033567553ab23c5be1216e05",
"assets/assets/json/onbording3.json": "cc11e75b818f220923f64a2d247fb8c9",
"assets/assets/json/phone.json": "af3cbbb91856fc8577155d21ede3ea06",
"assets/assets/json/rating.json": "6bdd4f61215cd5f424741c5dd13f9aa8",
"assets/assets/json/whatsap.json": "58a402e3fc308365b446146d57e68903",
"assets/assets/map_style/night_mode.json": "c8cb66889e5bf25fc9741fed81ae6821",
"assets/assets/translations/ar.json": "6a3de3a9d8a47f6e487407eef3e982ae",
"assets/assets/translations/en.json": "8f07c0ff2af577489419b69aa464b1f2",
"assets/FontManifest.json": "9a978e5a5a73229c1d7fc4cf629b8882",
"assets/fonts/MaterialIcons-Regular.otf": "ff9ec3052bbeacbb5b8a81592d8fdf1b",
"assets/NOTICES": "80d5b7b1b2cb49bb6e499135652dbd11",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "5b978c5871925783045a9c1b4a2ce840",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d251e33f0c729e6d31ada8846b6de44c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1989c9abd3ca82435cfeac6e03a9087",
"/": "e1989c9abd3ca82435cfeac6e03a9087",
"logoApp.png": "46f4ddd30ef6f875b65520d5940ee5ae",
"main.dart.js": "30246a775e808a2cc9506f05f0827f55",
"manifest.json": "f7e5ed0c8dfd7f69f9e57e8c8987162f",
"splash/img/dark-1x.png": "f7f725b740728751e3b190361cd06765",
"splash/img/dark-2x.png": "ca321a1a134bb65591168bf6f52c8456",
"splash/img/dark-3x.png": "4cd9060e52f92e24c1b227b9c58cbe57",
"splash/img/dark-4x.png": "83cbae6e50bf0152da78350417d0f93c",
"splash/img/light-1x.png": "f7f725b740728751e3b190361cd06765",
"splash/img/light-2x.png": "ca321a1a134bb65591168bf6f52c8456",
"splash/img/light-3x.png": "4cd9060e52f92e24c1b227b9c58cbe57",
"splash/img/light-4x.png": "83cbae6e50bf0152da78350417d0f93c",
"version.json": "3aa4dd691083b293140a783e82fd6650"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
