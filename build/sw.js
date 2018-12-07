/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/main.css",
    "revision": "3489ca91addcc6b6a76045c5e24874e4"
  },
  {
    "url": "images/AlbumArt/12Songs-min.jpg",
    "revision": "1feb51e975ad6f9608a757cda51e32ba"
  },
  {
    "url": "images/AlbumArt/12Songs.jpg",
    "revision": "3c5b0beb32dd9887e34608e027ec9f2b"
  },
  {
    "url": "images/AlbumArt/1999-min.jpg",
    "revision": "3463c56ce5aaa8a411adfc6027385491"
  },
  {
    "url": "images/AlbumArt/1999.jpg",
    "revision": "349031fa74e9c1ea69aed2623601d00c"
  },
  {
    "url": "images/AlbumArt/1Record-min.jpg",
    "revision": "0b83b7d527fdb3d803ffb83aa1575dfa"
  },
  {
    "url": "images/AlbumArt/1Record.jpg",
    "revision": "de2903a079605731da8030911928d8e8"
  },
  {
    "url": "images/AlbumArt/20GoldenGreats-min.jpg",
    "revision": "cbb2ca4f9bfdc23471e81a896a854997"
  },
  {
    "url": "images/AlbumArt/20GoldenGreats.jpg",
    "revision": "a8de2b5b6429710b932352a5076096c7"
  },
  {
    "url": "images/AlbumArt/3FeetHighAndRising-min.jpg",
    "revision": "897be5d904b85e7bd50eab04f0d07196"
  },
  {
    "url": "images/AlbumArt/3FeetHighAndRising.jpg",
    "revision": "85a20f6fe6e59d51f154b65277f1e500"
  },
  {
    "url": "images/AlbumArt/3rd-min.jpg",
    "revision": "0affec0032b879beaad4b107954470f5"
  },
  {
    "url": "images/AlbumArt/3rd.jpg",
    "revision": "c0f688dacdbb6294be17e5dd4b9905b9"
  },
  {
    "url": "images/AlbumArt/40GreatestHits-min.jpg",
    "revision": "78a9e40958cee8d9d3f14a61beb15c7b"
  },
  {
    "url": "images/AlbumArt/40GreatestHits.jpg",
    "revision": "e01ae8b14c0cdff1b187e6eb14303946"
  },
  {
    "url": "images/AlbumArt/461OceanBoulevard-min.jpg",
    "revision": "89a898b5c4257fde7da1a6e7d29c1975"
  },
  {
    "url": "images/AlbumArt/461OceanBoulevard.jpg",
    "revision": "641bc95fecaf1f5f7389f8ccdb639c83"
  },
  {
    "url": "images/AlbumArt/52ndStreet-min.jpg",
    "revision": "e607b581306fafc8acd0543ec1759fc5"
  },
  {
    "url": "images/AlbumArt/52ndStreet.jpg",
    "revision": "2fc5a17b353184313b20901e4087bd14"
  },
  {
    "url": "images/AlbumArt/69LoveSongs-min.jpg",
    "revision": "f10dea776aa16be4cd4c608e8cfb4d8d"
  },
  {
    "url": "images/AlbumArt/69LoveSongs.jpg",
    "revision": "7651b8e748030c19048aeb1d8d4e0fc8"
  },
  {
    "url": "images/AlbumArt/77-min.jpg",
    "revision": "01add74849d944632eb3e653a66c6d32"
  },
  {
    "url": "images/AlbumArt/77.jpg",
    "revision": "f4f2e2d568f1401f721e571dd86fe256"
  },
  {
    "url": "images/AlbumArt/AbbeyRoad-min.jpg",
    "revision": "600045105ea3dc7c55d7e40039213960"
  },
  {
    "url": "images/AlbumArt/AbbeyRoad.jpg",
    "revision": "c5c2d1a48960f558213a8fa8338e9ab5"
  },
  {
    "url": "images/AlbumArt/Abraxas-min.jpg",
    "revision": "c45785efb191f2db294dce038aba322f"
  },
  {
    "url": "images/AlbumArt/Abraxas.jpg",
    "revision": "aaee474d8ff06f27ac559ef6377fb058"
  },
  {
    "url": "images/AlbumArt/AchtungBaby-min.jpg",
    "revision": "9034bad4ec503bd3a989ff6dd0ef7d53"
  },
  {
    "url": "images/AlbumArt/AchtungBaby.jpg",
    "revision": "80dcf023c801cd457dc4d511432eba57"
  },
  {
    "url": "images/AlbumArt/Aftermath-min.jpg",
    "revision": "ada8e527cea4f39b298eda8ec5d76aa2"
  },
  {
    "url": "images/AlbumArt/Aftermath.jpg",
    "revision": "6157b5ec8c373fc7a56e3877a707139c"
  },
  {
    "url": "images/AlbumArt/AfterTheGoldRush-min.jpg",
    "revision": "6dfdf76ce867c48ecd280b0daa512168"
  },
  {
    "url": "images/AlbumArt/AfterTheGoldRush.jpg",
    "revision": "964fbec6223504abfebda4014f4c29e3"
  },
  {
    "url": "images/AlbumArt/AHardDaysNight-min.jpg",
    "revision": "39bb31bce34e01520fa521b668a629b3"
  },
  {
    "url": "images/AlbumArt/AHardDaysNight.jpg",
    "revision": "4fd48786a76588a5a7dddf661f648745"
  },
  {
    "url": "images/AlbumArt/Aja-min.jpg",
    "revision": "a4184a085762d2b8917abf78f67d61b8"
  },
  {
    "url": "images/AlbumArt/Aja.jpg",
    "revision": "1b199b9879c6058452448574d516fa17"
  },
  {
    "url": "images/AlbumArt/AladdinSane-min.jpg",
    "revision": "0447cd964d82172d6c7767601ffb9dc0"
  },
  {
    "url": "images/AlbumArt/AladdinSane.jpg",
    "revision": "f93ecc832586d38a61b231d249a39822"
  },
  {
    "url": "images/AlbumArt/AlGreenGreatestHits-min.jpg",
    "revision": "63b640b4e3061aa6fb4e49d8f6b7183e"
  },
  {
    "url": "images/AlbumArt/AlGreenGreatestHits.jpg",
    "revision": "ab6d49846ce2cf3c1280e9c7ef3f0e81"
  },
  {
    "url": "images/AlbumArt/Alive-min.jpg",
    "revision": "514283183d5815170cbab2fad59dcc56"
  },
  {
    "url": "images/AlbumArt/Alive.jpg",
    "revision": "0ce5b76338580d84c120bcd406d053d2"
  },
  {
    "url": "images/AlbumArt/AllKillerNoFilter-min.jpg",
    "revision": "1b1dda409d4913bb1bb8b26465577563"
  },
  {
    "url": "images/AlbumArt/AllKillerNoFilter.jpg",
    "revision": "69f5a5086639e520b2ee3b31626ce737"
  },
  {
    "url": "images/AlbumArt/AllTheYoungDudes-min.jpg",
    "revision": "836e6ef4d0e87e8ab479e93f7ed0bb49"
  },
  {
    "url": "images/AlbumArt/AllTheYoungDudes.jpg",
    "revision": "4ac0b797a17700eb184301753fbbe0da"
  },
  {
    "url": "images/AlbumArt/AllThingsMustPass-min.jpg",
    "revision": "0485a64d635a6235b0ea95f6f951fd1a"
  },
  {
    "url": "images/AlbumArt/AllThingsMustPass.jpg",
    "revision": "266a7959e41b42184a41a1ac35d517aa"
  },
  {
    "url": "images/AlbumArt/AllTimeGreatestHits-min.jpg",
    "revision": "9697bb186158a49fa9f884857548e1f1"
  },
  {
    "url": "images/AlbumArt/AllTimeGreatestHits.jpg",
    "revision": "bfd2de881704edb2f8962fb114828195"
  },
  {
    "url": "images/AlbumArt/AllYouCantLeaveBehind-min.jpg",
    "revision": "0d68c6d5d6d730f1993a71c4cc9bbfe9"
  },
  {
    "url": "images/AlbumArt/AllYouCantLeaveBehind.jpg",
    "revision": "99ede202e921c8ed567037926ce38352"
  },
  {
    "url": "images/AlbumArt/ALoveSupreme-min.jpg",
    "revision": "58ddefa537f0f0b7604ad92e02802764"
  },
  {
    "url": "images/AlbumArt/ALoveSupreme.jpg",
    "revision": "69b95e362e1988bba1c4018d50ce958e"
  },
  {
    "url": "images/AlbumArt/AmericanBeauty-min.jpg",
    "revision": "a4b924596e83671f4b91e906dcca66cf"
  },
  {
    "url": "images/AlbumArt/AmericanBeauty.jpg",
    "revision": "5311d266e14fef99d7ef4fa83397bac4"
  },
  {
    "url": "images/AlbumArt/AmericanIdiot-min.jpg",
    "revision": "af37142e53b131d85b7ddeee9784101e"
  },
  {
    "url": "images/AlbumArt/AmericanIdiot.jpg",
    "revision": "fb934b220a9f6414d5b8190afbb80a6d"
  },
  {
    "url": "images/AlbumArt/AmericanRecordings-min.jpg",
    "revision": "5414982a602b1277b9df9e5c62f00f64"
  },
  {
    "url": "images/AlbumArt/AmericanRecordings.jpg",
    "revision": "8ba3ba2f66c1ff639509befd4563c466"
  },
  {
    "url": "images/AlbumArt/Amnesiac-min.jpg",
    "revision": "85127eab367873e6e5729ef2896cb756"
  },
  {
    "url": "images/AlbumArt/Amnesiac.jpg",
    "revision": "d04bbe2f402e8216413f08ef1ac8a7e7"
  },
  {
    "url": "images/AlbumArt/ANightAtTheOpera-min.jpg",
    "revision": "fda043d3da7fa45965390b263a4af698"
  },
  {
    "url": "images/AlbumArt/ANightAtTheOpera.jpg",
    "revision": "474c9e7e68cb2eb4349b816afdc1a487"
  },
  {
    "url": "images/AlbumArt/AnotherGreenWorld-min.jpg",
    "revision": "4b56207457a5ab86dc668dc8545bcf7b"
  },
  {
    "url": "images/AlbumArt/AnotherGreenWorld.jpg",
    "revision": "6037d0aa27ea415f6c1ff3aa04a749b3"
  },
  {
    "url": "images/AlbumArt/AnthemOfTheSun-min.jpg",
    "revision": "fcd692ca4c32a9945d4ada3450f12f79"
  },
  {
    "url": "images/AlbumArt/AnthemOfTheSun.jpg",
    "revision": "f11e150b684bb0797d47d725f7bfb784"
  },
  {
    "url": "images/AlbumArt/Anthology-min.jpg",
    "revision": "0b794eb28d277103267c693660ded112"
  },
  {
    "url": "images/AlbumArt/Anthology.jpg",
    "revision": "8697355a9a6cff0f1106c972b289d053"
  },
  {
    "url": "images/AlbumArt/Anthology2-min.jpg",
    "revision": "74e9aa3515c448148718bc9f199bc593"
  },
  {
    "url": "images/AlbumArt/Anthology2.jpg",
    "revision": "976c71ef882bdd117d8eb26906d53940"
  },
  {
    "url": "images/AlbumArt/AnthologyOfAmericanFolkMusic-min.jpg",
    "revision": "44d9f431ff89ecda06b51cc87066ee22"
  },
  {
    "url": "images/AlbumArt/AnthologyOfAmericanFolkMusic.jpg",
    "revision": "35bdb8a550a448fe14342042451272a4"
  },
  {
    "url": "images/AlbumArt/Anything-min.jpg",
    "revision": "348d7cd6d72956487a504862bb4f288a"
  },
  {
    "url": "images/AlbumArt/Anything.jpg",
    "revision": "c19cef884bc52f7734483ff673958852"
  },
  {
    "url": "images/AlbumArt/AppetiteForDestruction-min.jpg",
    "revision": "3f43e65f906753a39d23a2d249210e09"
  },
  {
    "url": "images/AlbumArt/AppetiteForDestruction.jpg",
    "revision": "f19755e80b5e2150d4468921237f9dce"
  },
  {
    "url": "images/AlbumArt/Aqualung-min.jpg",
    "revision": "ea8cd05e1f48b33fdce9b0035170d9df"
  },
  {
    "url": "images/AlbumArt/Aqualung.jpg",
    "revision": "f18f5220e1122d2d4306e430e69b49ef"
  },
  {
    "url": "images/AlbumArt/Aquemini-min.jpg",
    "revision": "785646b11548e26a10e6524c30b8bad7"
  },
  {
    "url": "images/AlbumArt/Aquemini.jpg",
    "revision": "0c4e8c76a060235315896b230503d0c8"
  },
  {
    "url": "images/AlbumArt/AQuickOne-min.jpg",
    "revision": "8166362de3eb34c46806de912836b259"
  },
  {
    "url": "images/AlbumArt/AQuickOne.jpg",
    "revision": "e1527e6c7b27f4331d8a1f7a1794dd7c"
  },
  {
    "url": "images/AlbumArt/AreYouExperienced-min.jpg",
    "revision": "6766308468aaa0a5d300ce43835fc82d"
  },
  {
    "url": "images/AlbumArt/AreYouExperienced.jpg",
    "revision": "4f69d8703ed6cfd6b2b24aa25338b351"
  },
  {
    "url": "images/AlbumArt/ArmedForces-min.jpg",
    "revision": "0e0daa1fa16596da98d4ae2cc237e055"
  },
  {
    "url": "images/AlbumArt/ArmedForces.jpg",
    "revision": "2536c7993391e9e54ebb1910ac073208"
  },
  {
    "url": "images/AlbumArt/ARushOfBloodToTheHead-min.jpg",
    "revision": "d695218e3ec540147e4ab18418a234cd"
  },
  {
    "url": "images/AlbumArt/ARushOfBloodToTheHead.jpg",
    "revision": "af30e77324167084aa96def560d379a1"
  },
  {
    "url": "images/AlbumArt/AstralWeeks-min.jpg",
    "revision": "5b4eca76d84e49fa5d15a861179b7cb9"
  },
  {
    "url": "images/AlbumArt/AstralWeeks.jpg",
    "revision": "6f4eed4148f5362f5a6f5c6e7008ad56"
  },
  {
    "url": "images/AlbumArt/AtFolsomPrison-min.jpg",
    "revision": "a22b034b98710296f33a43e149c1cced"
  },
  {
    "url": "images/AlbumArt/AtFolsomPrison.jpg",
    "revision": "25c2176b23cfebb970e86f2bcf79f9c1"
  },
  {
    "url": "images/AlbumArt/AtLast-min.jpg",
    "revision": "cc28a9a04583a0daf3c5fbdfd2ae50b4"
  },
  {
    "url": "images/AlbumArt/AtLast.jpg",
    "revision": "91351ca6ac6ae969da6eb8bdc03f9a3f"
  },
  {
    "url": "images/AlbumArt/AutomaticForThePeople-min.jpg",
    "revision": "ebd23a818f10be96d78614349029b813"
  },
  {
    "url": "images/AlbumArt/AutomaticForThePeople.jpg",
    "revision": "e57c24d1d40db714f4bfca192a4485f1"
  },
  {
    "url": "images/AlbumArt/BackInBlack-min.jpg",
    "revision": "e97d277ae142aeab0557e9a80efbe8f4"
  },
  {
    "url": "images/AlbumArt/BackInBlack.jpg",
    "revision": "630d700b1dd3c096db4efbe00aecac4b"
  },
  {
    "url": "images/AlbumArt/BackInTheUSA-min.jpg",
    "revision": "6a212fe82a5a2bacf002f56616deaea2"
  },
  {
    "url": "images/AlbumArt/BackInTheUSA.jpg",
    "revision": "e90c8ca64d6732c4496d772d531323c7"
  },
  {
    "url": "images/AlbumArt/BackStabbers-min.jpg",
    "revision": "d0f502feaa3ee50eb31d765ff7b09639"
  },
  {
    "url": "images/AlbumArt/BackStabbers.jpg",
    "revision": "fb25baf3ccfad3241bd716c1c224db33"
  },
  {
    "url": "images/AlbumArt/BackToBlack-min.jpg",
    "revision": "78d46d6a60b6ab2d512cba67ff31f1a7"
  },
  {
    "url": "images/AlbumArt/BackToBlack.jpg",
    "revision": "7c9777e86bb426ad87f6164389ad7e9f"
  },
  {
    "url": "images/AlbumArt/BackToMono-min.jpg",
    "revision": "d9d04387eb244e3f50b2c4c205220f39"
  },
  {
    "url": "images/AlbumArt/BackToMono.jpg",
    "revision": "c7728add2b39addae367b295f9840f49"
  },
  {
    "url": "images/AlbumArt/Bad-min.jpg",
    "revision": "9d542b5f69565c4f097ff30b18f441e4"
  },
  {
    "url": "images/AlbumArt/Bad.jpg",
    "revision": "8f2fbd69a1a40b70584370b7b31139fd"
  },
  {
    "url": "images/AlbumArt/BandOnTheRun-min.jpg",
    "revision": "7d679abd279a7228c7e40ace5d020bcc"
  },
  {
    "url": "images/AlbumArt/BandOnTheRun.jpg",
    "revision": "b3c277bfa0ae81d8c4afec6c17e13914"
  },
  {
    "url": "images/AlbumArt/BatOutOfHell-min.jpg",
    "revision": "b2974161b0f581cbefb3d07ac1464415"
  },
  {
    "url": "images/AlbumArt/BatOutOfHell.jpg",
    "revision": "fb4cf0f68f418d4827ee23e30de39312"
  },
  {
    "url": "images/AlbumArt/BeautyAndTheBeast-min.jpg",
    "revision": "d082abe82f9d4f018390a92eedf0b963"
  },
  {
    "url": "images/AlbumArt/BeautyAndTheBeast.jpg",
    "revision": "47b5d1f22acec4521fce63e7ff4efe2a"
  },
  {
    "url": "images/AlbumArt/BeggarsBanquet-min.jpg",
    "revision": "da7591b79e5f5f27b4f5c87ea4dea6ce"
  },
  {
    "url": "images/AlbumArt/BeggarsBanquet.jpg",
    "revision": "f66bb028966d38e48e5631493274ff32"
  },
  {
    "url": "images/AlbumArt/Berlin-min.jpg",
    "revision": "c9d14ea5667c178094901cfc62c094f1"
  },
  {
    "url": "images/AlbumArt/Berlin.jpg",
    "revision": "02a52f3709c79701398cea3aad452010"
  },
  {
    "url": "images/AlbumArt/BetweenTheButtons-min.jpg",
    "revision": "d1ce00d1747dee835eb02a6e8dc30dfa"
  },
  {
    "url": "images/AlbumArt/BetweenTheButtons.jpg",
    "revision": "f21a48d8a237a5d7e652dd4b2198ad33"
  },
  {
    "url": "images/AlbumArt/BirthOfSoul-min.jpg",
    "revision": "76f47aeb0783691542f34fe85b5a7710"
  },
  {
    "url": "images/AlbumArt/BirthOfSoul.jpg",
    "revision": "b24b2b07e06e92f51ecf0f795f32aa38"
  },
  {
    "url": "images/AlbumArt/BitchesBrew-min.jpg",
    "revision": "59026409d08702b5f99a3b07816ccd2b"
  },
  {
    "url": "images/AlbumArt/BitchesBrew.jpg",
    "revision": "e08e5eec69774eec013e1b64468e4bca"
  },
  {
    "url": "images/AlbumArt/BlackSabbath-min.jpg",
    "revision": "6dc7ac9d8c40d4c695e4be3d7f6b13d2"
  },
  {
    "url": "images/AlbumArt/BlackSabbath.jpg",
    "revision": "5283a410a86dc20eb198c2e7b49cc34d"
  },
  {
    "url": "images/AlbumArt/BlondeOnBlonde-min.jpg",
    "revision": "86351fbceb9fdaa5d2dafda0c252d132"
  },
  {
    "url": "images/AlbumArt/BlondeOnBlonde.jpg",
    "revision": "8e9ea0647644b8ba58b304e07af67f9a"
  },
  {
    "url": "images/AlbumArt/BloodOnTheTracks-min.jpg",
    "revision": "2bee554ad1db261990046977fb08f224"
  },
  {
    "url": "images/AlbumArt/BloodOnTheTracks.jpg",
    "revision": "13f3618dac4ffe3663a0dede01458621"
  },
  {
    "url": "images/AlbumArt/BloodSugarSexMagic-min.jpg",
    "revision": "d6b134e75900a684402846379d2e0dee"
  },
  {
    "url": "images/AlbumArt/BloodSugarSexMagic.jpg",
    "revision": "d541707545ea55fb12bd41cc9f98ab09"
  },
  {
    "url": "images/AlbumArt/Blue-min.jpg",
    "revision": "cdddad629217a8bba59ff81f9d168a93"
  },
  {
    "url": "images/AlbumArt/Blue.jpg",
    "revision": "5d09beaa7aba60f7b2be67b24a7e1d54"
  },
  {
    "url": "images/AlbumArt/BlueLines-min.jpg",
    "revision": "9f9b38109cd6e2c49d6212ee9b08d518"
  },
  {
    "url": "images/AlbumArt/BlueLines.jpg",
    "revision": "81a1b3dfd3179a2b27c6b55246e1d4d8"
  },
  {
    "url": "images/AlbumArt/BluesBreakers-min.jpg",
    "revision": "d5793b03d90b6122a96fff326bfd674b"
  },
  {
    "url": "images/AlbumArt/BluesBreakers.jpg",
    "revision": "0ad403936c6d96351cb7d16f6b87a1de"
  },
  {
    "url": "images/AlbumArt/BoldAsLove-min.jpg",
    "revision": "b96532e5af70100fbc0a48ed280784aa"
  },
  {
    "url": "images/AlbumArt/BoldAsLove.jpg",
    "revision": "5d6936940dfbbb73bc702f3a75631aca"
  },
  {
    "url": "images/AlbumArt/Bookends-min.jpg",
    "revision": "ba691dc14a5953a967effd1bbc2167d0"
  },
  {
    "url": "images/AlbumArt/Bookends.jpg",
    "revision": "7a1da8d8e5cf40e7ae0e184c749beb72"
  },
  {
    "url": "images/AlbumArt/BornInTheUSA-min.jpg",
    "revision": "970b2e4012b651350748a1d5fc28ca3c"
  },
  {
    "url": "images/AlbumArt/BornInTheUSA.jpg",
    "revision": "a9c92bf433116faa05a87cb0696894e3"
  },
  {
    "url": "images/AlbumArt/BornToRun-min.jpg",
    "revision": "b722b2ef6286acd865d01e46f849d21c"
  },
  {
    "url": "images/AlbumArt/BornToRun.jpg",
    "revision": "ee8eabc5a27c539ec76b6d6ab4ae31f9"
  },
  {
    "url": "images/AlbumArt/BornUnderABadSign-min.jpg",
    "revision": "f25f511c1703fd9f054c7a3cd2b2936b"
  },
  {
    "url": "images/AlbumArt/BornUnderABadSign.jpg",
    "revision": "6c4bd19766d4c04b90c12e5f400c790a"
  },
  {
    "url": "images/AlbumArt/Boy-min.jpg",
    "revision": "e4f8ddc2ef7572947f92f65b64e1badc"
  },
  {
    "url": "images/AlbumArt/Boy.jpg",
    "revision": "a7f044275af85313ba6e9f6e50c65e77"
  },
  {
    "url": "images/AlbumArt/BoysDontCry-min.jpg",
    "revision": "75284d72daa7e2afdbe7a8f8a55ca3dd"
  },
  {
    "url": "images/AlbumArt/BoysDontCry.jpg",
    "revision": "0754cea2babd31f924ce97537a33d244"
  },
  {
    "url": "images/AlbumArt/BozScaggs-min.jpg",
    "revision": "ca49443846a67e670e73f6e77ef24726"
  },
  {
    "url": "images/AlbumArt/BozScaggs.jpg",
    "revision": "f89dc327c8dc6b7fcfed384fc684ed72"
  },
  {
    "url": "images/AlbumArt/BridgeOverTroubledWater-min.jpg",
    "revision": "5317bf3e259764769a0af2e367d86398"
  },
  {
    "url": "images/AlbumArt/BridgeOverTroubledWater.jpg",
    "revision": "75ddbb249178cbd273f46bebfc767514"
  },
  {
    "url": "images/AlbumArt/BringItAllBackHome-min.jpg",
    "revision": "ca3b2ddd49eea6200b54e622aa7e7f98"
  },
  {
    "url": "images/AlbumArt/BringItAllBackHome.jpg",
    "revision": "b62af4ab12c12d570bc1d6579b92f637"
  },
  {
    "url": "images/AlbumArt/BrothersInArms-min.jpg",
    "revision": "c739363a2d1a6a74d8cc06cbeb2c71b9"
  },
  {
    "url": "images/AlbumArt/BrothersInArms.jpg",
    "revision": "a7e13f00700983f177daba42b0eb67d6"
  },
  {
    "url": "images/AlbumArt/BuffaloSpringfieldAgain-min.jpg",
    "revision": "abc11ffb675ce465be926ac271a10a68"
  },
  {
    "url": "images/AlbumArt/BuffaloSpringfieldAgain.jpg",
    "revision": "19d6ec891d28a52ec2fc0a00eb6ae294"
  },
  {
    "url": "images/AlbumArt/Burnin-min.jpg",
    "revision": "5d095b70122a81e2fe07dd1c62b93a4f"
  },
  {
    "url": "images/AlbumArt/Burnin.jpg",
    "revision": "d0127f164d2559a66b8ecfe71edbc7d3"
  },
  {
    "url": "images/AlbumArt/Californication-min.jpg",
    "revision": "39b0aef4ec6cc2900e2303b7cb78ac55"
  },
  {
    "url": "images/AlbumArt/Californication.jpg",
    "revision": "b8d2e99ad8b7c39a788db88b05e86e11"
  },
  {
    "url": "images/AlbumArt/CallMe-min.jpg",
    "revision": "7c3b170b6c5b0906da90c26c3814da6a"
  },
  {
    "url": "images/AlbumArt/CallMe.jpg",
    "revision": "4aacade04136e3599e2f3ce7434f2c0a"
  },
  {
    "url": "images/AlbumArt/Can'tBuyAThrill-min.jpg",
    "revision": "00b6a210fce19e09f9fe8386c3e2b0bd"
  },
  {
    "url": "images/AlbumArt/Can'tBuyAThrill.jpg",
    "revision": "3c11214a7862149f6f78882513049439"
  },
  {
    "url": "images/AlbumArt/CantGetEnough-min.jpg",
    "revision": "7a26399a2a4e921fc2bee9066183a179"
  },
  {
    "url": "images/AlbumArt/CantGetEnough.jpg",
    "revision": "c1c9878c2b24dbb731aa1ebf92126839"
  },
  {
    "url": "images/AlbumArt/CaptainBeefheart-min.jpg",
    "revision": "377c470064a76ec5d829afa113f6fe8a"
  },
  {
    "url": "images/AlbumArt/CaptainBeefheart.jpg",
    "revision": "2093f74c5513fd97b23f90fd6f0d13d3"
  },
  {
    "url": "images/AlbumArt/CaptainFantasticAndTheBrownDirtCowboy-min.jpg",
    "revision": "68eee5499104ec00e74645c7002874f3"
  },
  {
    "url": "images/AlbumArt/CaptainFantasticAndTheBrownDirtCowboy.jpg",
    "revision": "37749b86a8ebb80688b82367f9000e0a"
  },
  {
    "url": "images/AlbumArt/CarWheelsOnAGravelRoad-min.jpg",
    "revision": "50fd0654942ae8cd79d9b1115aa5bcc8"
  },
  {
    "url": "images/AlbumArt/CarWheelsOnAGravelRoad.jpg",
    "revision": "0fe69cd1ec2b661de4fda69fdc267aae"
  },
  {
    "url": "images/AlbumArt/CatchAFire-min.jpg",
    "revision": "d2be97330014338aa8c268c6b10106ae"
  },
  {
    "url": "images/AlbumArt/CatchAFire.jpg",
    "revision": "022e047285c9117de947ae17f12e1d19"
  },
  {
    "url": "images/AlbumArt/CheapThrills-min.jpg",
    "revision": "3e48f98624fa1d19de4915c5d7dc4393"
  },
  {
    "url": "images/AlbumArt/CheapThrills.jpg",
    "revision": "4c5b68dd3ea1e5379170ff149f2d5543"
  },
  {
    "url": "images/AlbumArt/CheapTrickAtBudokan-min.jpg",
    "revision": "3655430f0fffe1852fac59844fda1870"
  },
  {
    "url": "images/AlbumArt/CheapTrickAtBudokan.jpg",
    "revision": "96777faf98bd4ce460d7e76acf2138f4"
  },
  {
    "url": "images/AlbumArt/ChildIsFatherToTheMan-min.jpg",
    "revision": "129f512509c389e38016a783a63a8f2c"
  },
  {
    "url": "images/AlbumArt/ChildIsFatherToTheMan.jpg",
    "revision": "0104320773989431a8d6110c3eff174a"
  },
  {
    "url": "images/AlbumArt/Chronicle-min.jpg",
    "revision": "bfe7e6cd54577e46b51d901087912aa0"
  },
  {
    "url": "images/AlbumArt/Chronicle.jpg",
    "revision": "2f8a383d2f7b708d2a6cb79910f1a582"
  },
  {
    "url": "images/AlbumArt/Clash-min.jpg",
    "revision": "bfc13a2276b310a34e962c0de82ba7ba"
  },
  {
    "url": "images/AlbumArt/Clash.jpg",
    "revision": "2e86d73b2a840b59c35c57822ca8d47b"
  },
  {
    "url": "images/AlbumArt/Closer-min.jpg",
    "revision": "ea3f8d30b9a868e02fbfdbd95300524b"
  },
  {
    "url": "images/AlbumArt/Closer.jpg",
    "revision": "8a87faf194e20a4d259b80b2a151721f"
  },
  {
    "url": "images/AlbumArt/CloserToYou-min.jpg",
    "revision": "b18451d795c108a5bbed36500e4eb66b"
  },
  {
    "url": "images/AlbumArt/CloserToYou.jpg",
    "revision": "1a0bbb5b3b67efdb0bab00c53f307260"
  },
  {
    "url": "images/AlbumArt/CoatOfManyColors-min.jpg",
    "revision": "6c04fdc8eb02c9268d6fc78b10298840"
  },
  {
    "url": "images/AlbumArt/CoatOfManyColors.jpg",
    "revision": "cd567fbb4937d8adafc8272cfd6b0a9f"
  },
  {
    "url": "images/AlbumArt/CourtAndSpark-min.jpg",
    "revision": "0750bdfb224363fb65930e65bfeea698"
  },
  {
    "url": "images/AlbumArt/CourtAndSpark.jpg",
    "revision": "e7d47e9ea17bd494a9460f47ffcfe719"
  },
  {
    "url": "images/AlbumArt/CrazySexyCool-min.jpg",
    "revision": "a408f51b1c664cc0ad7e50457a80a0c2"
  },
  {
    "url": "images/AlbumArt/CrazySexyCool.jpg",
    "revision": "9eb5162bccd3ecb1cec0edf6a5af2792"
  },
  {
    "url": "images/AlbumArt/CrookedRainCrookedRain-min.jpg",
    "revision": "1748e557f9ba428066b253384bca677f"
  },
  {
    "url": "images/AlbumArt/CrookedRainCrookedRain.jpg",
    "revision": "4a421dca9f140e305b04a697caf1ff07"
  },
  {
    "url": "images/AlbumArt/CrosbyStillsAndNash-min.jpg",
    "revision": "22bfb8844be0ad48a3061acadc4720ed"
  },
  {
    "url": "images/AlbumArt/CrosbyStillsAndNash.jpg",
    "revision": "82ba37efd25ae92932a81668f7cff24a"
  },
  {
    "url": "images/AlbumArt/Damaged-min.jpg",
    "revision": "9d40f3c2c3f181b0ed3b61aa2ecc1c6b"
  },
  {
    "url": "images/AlbumArt/Damaged.jpg",
    "revision": "f8d1bf051b110b54afb8743f4e7b1cb0"
  },
  {
    "url": "images/AlbumArt/DamnTheTorpedoes-min.jpg",
    "revision": "6736d9d4f566cc497a30f3e3a1abf077"
  },
  {
    "url": "images/AlbumArt/DamnTheTorpedoes.jpg",
    "revision": "6630eb57ec6b1bccb7de4f430328b926"
  },
  {
    "url": "images/AlbumArt/DarknessOnTheEdgeOfTown-min.jpg",
    "revision": "0b8b764a4caff4c025748d93fd3dcbcc"
  },
  {
    "url": "images/AlbumArt/DarknessOnTheEdgeOfTown.jpg",
    "revision": "dd49a8114f379c46adb946f830aec451"
  },
  {
    "url": "images/AlbumArt/DaydreamNation-min.jpg",
    "revision": "12893834964357d0009e2221899ec1f9"
  },
  {
    "url": "images/AlbumArt/DaydreamNation.jpg",
    "revision": "7a0206e51bc25f68e20ccd3ed4022b1f"
  },
  {
    "url": "images/AlbumArt/DejaVu-min.jpg",
    "revision": "c430e442b14d9de58357155238e360f4"
  },
  {
    "url": "images/AlbumArt/DejaVu.jpg",
    "revision": "9d94fbbe960e34a17d3487814a9295e2"
  },
  {
    "url": "images/AlbumArt/Desire-min.jpg",
    "revision": "d5acbd54374a6655824587911eaadfa8"
  },
  {
    "url": "images/AlbumArt/Desire.jpg",
    "revision": "a06854ed082e17eab7921827dbf6978e"
  },
  {
    "url": "images/AlbumArt/Destroyer-min.jpg",
    "revision": "708327318df6dc1250ac0e8c9664e625"
  },
  {
    "url": "images/AlbumArt/Destroyer.jpg",
    "revision": "ab550c75b0250258fb7061718a16d6a2"
  },
  {
    "url": "images/AlbumArt/DigMeOut-min.jpg",
    "revision": "1f1047db1205a33565945a8c128eb4c1"
  },
  {
    "url": "images/AlbumArt/DigMeOut.jpg",
    "revision": "8008d106dfcd9cf4b321e0a8c7428c39"
  },
  {
    "url": "images/AlbumArt/DirtyMind-min.jpg",
    "revision": "b2977b47ed5b29db02bcdef349e96a89"
  },
  {
    "url": "images/AlbumArt/DirtyMind.jpg",
    "revision": "6d095d82a4c954f8410e764bd590e391"
  },
  {
    "url": "images/AlbumArt/Disintegration-min.jpg",
    "revision": "166e53f8b760f31944c72e4ffa5b6de5"
  },
  {
    "url": "images/AlbumArt/Disintegration.jpg",
    "revision": "1b850473076fb4f2e0b983bdac67c4f3"
  },
  {
    "url": "images/AlbumArt/DisraeliGears-min.jpg",
    "revision": "a03e4f2cea10927915d7f3a3123b201a"
  },
  {
    "url": "images/AlbumArt/DisraeliGears.jpg",
    "revision": "4580a5b4b4002d1e1ffff24b0f28b282"
  },
  {
    "url": "images/AlbumArt/Document-min.jpg",
    "revision": "24d0999fc17454782db880ba9fdd686d"
  },
  {
    "url": "images/AlbumArt/Document.jpg",
    "revision": "610001edbf832c1a94dfd21a80ec5dc8"
  },
  {
    "url": "images/AlbumArt/Dookie-min.jpg",
    "revision": "b8663dd868818b61a849e286b003c3fd"
  },
  {
    "url": "images/AlbumArt/Dookie.jpg",
    "revision": "08853f6bf89e379937b3e3742c86ecc6"
  },
  {
    "url": "images/AlbumArt/Doolittle-min.jpg",
    "revision": "ec1d8dabbebd80e597b9237d67d20d8b"
  },
  {
    "url": "images/AlbumArt/Doolittle.jpg",
    "revision": "9da1bc090d3e4a3e069381761cdc37f0"
  },
  {
    "url": "images/AlbumArt/DoubleNickelsOnTheDime-min.jpg",
    "revision": "67c10c25aaf7d2a601156b0ea4d2ecd6"
  },
  {
    "url": "images/AlbumArt/DoubleNickelsOnTheDime.jpg",
    "revision": "a9be16a3e6729ac318b6d19c7a4abe3f"
  },
  {
    "url": "images/AlbumArt/DownEveryRoad-min.jpg",
    "revision": "3dc78c77e14472f10eda1dec69518164"
  },
  {
    "url": "images/AlbumArt/DownEveryRoad.jpg",
    "revision": "c3046f319cbb6b9164094e1e053b0d3f"
  },
  {
    "url": "images/AlbumArt/DrJohnGumbo-min.jpg",
    "revision": "79f63bf6fc7ec934ec884da6d717b461"
  },
  {
    "url": "images/AlbumArt/DrJohnGumbo.jpg",
    "revision": "f979751693341ef2e62d4710751dec24"
  },
  {
    "url": "images/AlbumArt/Dummy-min.jpg",
    "revision": "e7f8d286f6372d0d6dee628eff6a67eb"
  },
  {
    "url": "images/AlbumArt/Dummy.jpg",
    "revision": "8e60e0e6bffac80cf59cb631d2011b5e"
  },
  {
    "url": "images/AlbumArt/DustyInMemphis-min.jpg",
    "revision": "8c3309fb1fe51c4832db8ac27b2c0512"
  },
  {
    "url": "images/AlbumArt/DustyInMemphis.jpg",
    "revision": "ec3ca843c2233769e55d89ffc110abae"
  },
  {
    "url": "images/AlbumArt/Eagles-min.jpg",
    "revision": "075257a5f478a93085df1674082aafa1"
  },
  {
    "url": "images/AlbumArt/Eagles.jpg",
    "revision": "4ebd74ffda6bfed2bb6f4b092c23b183"
  },
  {
    "url": "images/AlbumArt/ElectricLadyland-min.jpg",
    "revision": "367724d8994a10a4fda5c24b4f85debc"
  },
  {
    "url": "images/AlbumArt/ElectricLadyland.jpg",
    "revision": "850ae77315211ce81f8e10bc33ee04ee"
  },
  {
    "url": "images/AlbumArt/ElectricWarrior-min.jpg",
    "revision": "fec28c22b38da990153cf9b2ac879655"
  },
  {
    "url": "images/AlbumArt/ElectricWarrior.jpg",
    "revision": "05bac16eb091386a9452888dcb74b470"
  },
  {
    "url": "images/AlbumArt/Elephant-min.jpg",
    "revision": "2c31e42387337d3c7e677f662087d940"
  },
  {
    "url": "images/AlbumArt/Elephant.jpg",
    "revision": "d7a6236be4f9f98ee13b296703a0b6c3"
  },
  {
    "url": "images/AlbumArt/Eliminator-min.jpg",
    "revision": "63b67ba7443f6e895af0b4b12ad7fe8e"
  },
  {
    "url": "images/AlbumArt/Eliminator.jpg",
    "revision": "c47ff00064cc00b966a05ce944e5d67f"
  },
  {
    "url": "images/AlbumArt/ElvisPresley-min.jpg",
    "revision": "de349d32f2870de1a856edd21a711c18"
  },
  {
    "url": "images/AlbumArt/ElvisPresley.jpg",
    "revision": "c4bddfaf0d8525063e363840f94934b7"
  },
  {
    "url": "images/AlbumArt/Entertainment-min.jpg",
    "revision": "2446e054e19fe7b6b69846cafa52fcb6"
  },
  {
    "url": "images/AlbumArt/Entertainment.jpg",
    "revision": "cd2a7e41b8cdbec370bc49cadb6a2f6c"
  },
  {
    "url": "images/AlbumArt/EnterTheWu-Tang-min.jpg",
    "revision": "c191a8f5affc4ea24e0cda5e869be2eb"
  },
  {
    "url": "images/AlbumArt/EnterTheWu-Tang.jpg",
    "revision": "2a27c40b191beb4e843a4c8fcede98fe"
  },
  {
    "url": "images/AlbumArt/Esperanza-min.jpg",
    "revision": "a94bf33a05445d556b5c9d24b1a3b07d"
  },
  {
    "url": "images/AlbumArt/Esperanza.jpg",
    "revision": "d4078761b2ff6c720f39e25620ccb8aa"
  },
  {
    "url": "images/AlbumArt/EverybodyKnowsThisIsNowhere-min.jpg",
    "revision": "95f47c8499869afd1bc0ccccc107feae"
  },
  {
    "url": "images/AlbumArt/EverybodyKnowsThisIsNowhere.jpg",
    "revision": "a34e23816e52ba8ab04461cdd0bda01d"
  },
  {
    "url": "images/AlbumArt/EveryPictureTellsAStory-min.jpg",
    "revision": "c9e0d0ffef9444d4bd5b76caefcb47b0"
  },
  {
    "url": "images/AlbumArt/EveryPictureTellsAStory.jpg",
    "revision": "ba72d5ebc29e07343f5c5c71b2d561fe"
  },
  {
    "url": "images/AlbumArt/ExileInGuyville-min.jpg",
    "revision": "b7bc330c1d9cb04f932847fbd231ab9a"
  },
  {
    "url": "images/AlbumArt/ExileInGuyville.jpg",
    "revision": "f20dc04a77884347b6b0cab43269b275"
  },
  {
    "url": "images/AlbumArt/ExileOnMain-min.jpg",
    "revision": "a881a0485553ecc46f331805e1ab1394"
  },
  {
    "url": "images/AlbumArt/ExileOnMain.jpg",
    "revision": "022d5ece8b282213049ecb97095d670e"
  },
  {
    "url": "images/AlbumArt/Exodus-min.jpg",
    "revision": "2da01e04a5ed73bb682d04bfccf4b1a6"
  },
  {
    "url": "images/AlbumArt/Exodus.jpg",
    "revision": "ed7b42323fb682d1e1a56b3884881549"
  },
  {
    "url": "images/AlbumArt/Faith-min.jpg",
    "revision": "7be19a3381124b8400e509fa38857486"
  },
  {
    "url": "images/AlbumArt/Faith.jpg",
    "revision": "81ff33d99819d5bd2b2cd60df284b57b"
  },
  {
    "url": "images/AlbumArt/FearOfABlackPlanet-min.jpg",
    "revision": "4a9fff007ed3d4acf104b44f0015acbf"
  },
  {
    "url": "images/AlbumArt/FearOfABlackPlanet.jpg",
    "revision": "0faad9f4b5811c669ae4fd9c265260a7"
  },
  {
    "url": "images/AlbumArt/FleetwoodMac-min.jpg",
    "revision": "59ba6f55718070164c9ea4117c947847"
  },
  {
    "url": "images/AlbumArt/FleetwoodMac.jpg",
    "revision": "ab466035823015f60f9c92ffc7c5e22a"
  },
  {
    "url": "images/AlbumArt/FlyLikeAnEagle-min.jpg",
    "revision": "f01a465a611a20a8079ef74aa44dc3ca"
  },
  {
    "url": "images/AlbumArt/FlyLikeAnEagle.jpg",
    "revision": "33fec8e5a3abe891a219e7bbc035a48c"
  },
  {
    "url": "images/AlbumArt/FolkSinger-min.jpg",
    "revision": "e7a3441a6b332f79fc08eda453015c9b"
  },
  {
    "url": "images/AlbumArt/FolkSinger.jpg",
    "revision": "d97a699e2553f93dac0a6ceb67803c37"
  },
  {
    "url": "images/AlbumArt/ForeverChanges-min.jpg",
    "revision": "c14d34507cc6406d74ecf4ecb934a975"
  },
  {
    "url": "images/AlbumArt/ForeverChanges.jpg",
    "revision": "88925c2502eabb93865df06adcaee9d2"
  },
  {
    "url": "images/AlbumArt/ForEveryman-min.jpg",
    "revision": "29f809e53ba28061529d4dc7453d3ef6"
  },
  {
    "url": "images/AlbumArt/ForEveryman.jpg",
    "revision": "99a3f435bc95e18ab69578c0f8e80df1"
  },
  {
    "url": "images/AlbumArt/ForYourPleasure-min.jpg",
    "revision": "554f70ed60edea203de09a3e9df4df9d"
  },
  {
    "url": "images/AlbumArt/ForYourPleasure.jpg",
    "revision": "fa83189c4a4a88bc99027296c6eedee5"
  },
  {
    "url": "images/AlbumArt/FreakOut-min.jpg",
    "revision": "985f014c3c57065d9f29a4b442b63cd0"
  },
  {
    "url": "images/AlbumArt/FreakOut.jpg",
    "revision": "8529bfa899e468f7c445f614099c1c79"
  },
  {
    "url": "images/AlbumArt/Fresh-min.jpg",
    "revision": "cc2913dc1b2fd2dd2caeca5f6f21e691"
  },
  {
    "url": "images/AlbumArt/Fresh.jpg",
    "revision": "9fcea04e5d91d4ddaa2d167fe0cdbd5d"
  },
  {
    "url": "images/AlbumArt/FreshCream-min.jpg",
    "revision": "57352d5c6e39549fe842882f2bb1b825"
  },
  {
    "url": "images/AlbumArt/FreshCream.jpg",
    "revision": "725c0dfc72f528707ea573d83e569a5d"
  },
  {
    "url": "images/AlbumArt/FromElvisInMemphis-min.jpg",
    "revision": "9fb5ccdf1e628859027fcb2d4f89b087"
  },
  {
    "url": "images/AlbumArt/FromElvisInMemphis.jpg",
    "revision": "509a474bc44079c1cfbec40f9b81ba50"
  },
  {
    "url": "images/AlbumArt/Funeral-min.jpg",
    "revision": "408bcb8f78d189a977a23ca856b02fa0"
  },
  {
    "url": "images/AlbumArt/Funeral.jpg",
    "revision": "ab03e4747b02d2b9f6ee7796d1075676"
  },
  {
    "url": "images/AlbumArt/FunHouse-min.jpg",
    "revision": "0d2b2372d4383ebf9ca89391ab387b06"
  },
  {
    "url": "images/AlbumArt/FunHouse.jpg",
    "revision": "3b00f2fe49231d2224612fef37cf679b"
  },
  {
    "url": "images/AlbumArt/FunkyKingston-min.jpg",
    "revision": "2636ce375881b210068ed0dee49b7f0a"
  },
  {
    "url": "images/AlbumArt/FunkyKingston.jpg",
    "revision": "2ea9ac7d92544dd6952bd4618e81fee2"
  },
  {
    "url": "images/AlbumArt/GhostInTheMachine-min.jpg",
    "revision": "49702c8a43d14fbbcb13bff3ff72b29b"
  },
  {
    "url": "images/AlbumArt/GhostInTheMachine.jpg",
    "revision": "c95ee3d20d6a60b06123c0646179bd6f"
  },
  {
    "url": "images/AlbumArt/GiantSteps-min.jpg",
    "revision": "d3fc0f10f1058c689277b45f477c81b7"
  },
  {
    "url": "images/AlbumArt/GiantSteps.jpg",
    "revision": "3064490b1b938b9d1c1e1e900af2d0ac"
  },
  {
    "url": "images/AlbumArt/GiveItUp-min.jpg",
    "revision": "fe22bed42c13b6a0fa502014e584b9ef"
  },
  {
    "url": "images/AlbumArt/GiveItUp.jpg",
    "revision": "8852a7e35dceb3f1cf8d410306482fec"
  },
  {
    "url": "images/AlbumArt/GoBoDiddley-min.jpg",
    "revision": "286cef25583e18f2b7e25e6207eb8772"
  },
  {
    "url": "images/AlbumArt/GoBoDiddley.jpg",
    "revision": "90b9ba5f0b4589e0c086472c25b3d829"
  },
  {
    "url": "images/AlbumArt/GoingToAGoGo-min.jpg",
    "revision": "1927bc3cef06bb48aed390322c2519be"
  },
  {
    "url": "images/AlbumArt/GoingToAGoGo.jpg",
    "revision": "4a5a550024118700af838ddd2589d2f9"
  },
  {
    "url": "images/AlbumArt/GoodbyYellowBrickRoad-min.jpg",
    "revision": "e0c70279f84e094dbfcaf6a422af5a99"
  },
  {
    "url": "images/AlbumArt/GoodbyYellowBrickRoad.jpg",
    "revision": "27546ec94a9c9c52328ae6cb1116972c"
  },
  {
    "url": "images/AlbumArt/GoodOldBoys-min.jpg",
    "revision": "c557226b9bb4ff92ae0fc027ec8d75cb"
  },
  {
    "url": "images/AlbumArt/GoodOldBoys.jpg",
    "revision": "5cefbf92bfc5ce1aed15f43d7bd3bf69"
  },
  {
    "url": "images/AlbumArt/Grace-min.jpg",
    "revision": "a897185cb59077e1b200634aad391f56"
  },
  {
    "url": "images/AlbumArt/Grace.jpg",
    "revision": "694e6d95b1f833e70c4a72512bb4ca90"
  },
  {
    "url": "images/AlbumArt/Graceland-min.jpg",
    "revision": "9319804368a59dd44955003799ae8ec8"
  },
  {
    "url": "images/AlbumArt/Graceland.jpg",
    "revision": "85d39537297acfc7891732ed42ffb6e6"
  },
  {
    "url": "images/AlbumArt/GreatestHits-min.jpg",
    "revision": "a8f608b403343bb9370d05c02351b8cd"
  },
  {
    "url": "images/AlbumArt/GreatestHits.jpg",
    "revision": "809c1ff963033c1b056ebac1d9eb2c66"
  },
  {
    "url": "images/AlbumArt/GrievousAngel-min.jpg",
    "revision": "7a455adec96215bd4f6a88b63db0dc64"
  },
  {
    "url": "images/AlbumArt/GrievousAngel.jpg",
    "revision": "0fb6a58a1b379fd6602b187a181bad54"
  },
  {
    "url": "images/AlbumArt/GuitarTown-min.jpg",
    "revision": "5d74414f1fcb7a12ce3471e2df564ced"
  },
  {
    "url": "images/AlbumArt/GuitarTown.jpg",
    "revision": "88cdc058ab00f850c4590442dbd7fc29"
  },
  {
    "url": "images/AlbumArt/HappyTrails-min.jpg",
    "revision": "7b9cf89070d7dde5417d14ee55a3070a"
  },
  {
    "url": "images/AlbumArt/HappyTrails.jpg",
    "revision": "0071577d5ed6965e71594b8481d639ac"
  },
  {
    "url": "images/AlbumArt/Harvest-min.jpg",
    "revision": "48c7503b39987ad2776e2e93906e6344"
  },
  {
    "url": "images/AlbumArt/Harvest.jpg",
    "revision": "f28935ccbdbe352949be97ae33beee38"
  },
  {
    "url": "images/AlbumArt/HavingARaveUpWithTheYardbirds-min.jpg",
    "revision": "aea8f0be46e527192121f9f2336595e2"
  },
  {
    "url": "images/AlbumArt/HavingARaveUpWithTheYardbirds.jpg",
    "revision": "62f968b87a7b450b9b3f23071a50f81f"
  },
  {
    "url": "images/AlbumArt/Help-min.jpg",
    "revision": "5ad9f8d551e3aeedc3a935518f1b522b"
  },
  {
    "url": "images/AlbumArt/Help.jpg",
    "revision": "252043e39aef145d58afb6bcb0510e29"
  },
  {
    "url": "images/AlbumArt/HereComeTheWarmJets-min.jpg",
    "revision": "b497524fe7252adbd8ab6321d6df6e1a"
  },
  {
    "url": "images/AlbumArt/HereComeTheWarmJets.jpg",
    "revision": "5fa38dd045a4cea1bb937b442916145d"
  },
  {
    "url": "images/AlbumArt/HereMyDear-min.jpg",
    "revision": "0ba76e9cd77fbd9a4eddb875f6356837"
  },
  {
    "url": "images/AlbumArt/HereMyDear.jpg",
    "revision": "d840df3aa01b971485c7212439aae880"
  },
  {
    "url": "images/AlbumArt/HeresLittleRichard-min.jpg",
    "revision": "7f49e9feea622870b836687ef1e3c5c3"
  },
  {
    "url": "images/AlbumArt/HeresLittleRichard.jpg",
    "revision": "9aedc6695fd7c9eaa9340733bd9dacf9"
  },
  {
    "url": "images/AlbumArt/HevenUpThere-min.jpg",
    "revision": "2d416dfb4af0fec096cf2212494a2ea4"
  },
  {
    "url": "images/AlbumArt/HevenUpThere.jpg",
    "revision": "560a194e79df2ecbef9efbb7ba66bb18"
  },
  {
    "url": "images/AlbumArt/Highway61-min.jpg",
    "revision": "ab5e1799d8c7d8646635e82057661455"
  },
  {
    "url": "images/AlbumArt/Highway61.jpg",
    "revision": "3e53ceca69402722b27bf42da7956028"
  },
  {
    "url": "images/AlbumArt/HighwayToHell-min.jpg",
    "revision": "703ea63dca796055d905d2f1d221a87d"
  },
  {
    "url": "images/AlbumArt/HighwayToHell.jpg",
    "revision": "673fd975d2eaaeaf145ccbaf57b7e897"
  },
  {
    "url": "images/AlbumArt/HonkyChateau-min.jpg",
    "revision": "45fb05c96423a224510031aeb65b5063"
  },
  {
    "url": "images/AlbumArt/HonkyChateau.jpg",
    "revision": "dd0bc961ab9ae3e26c7caae25e363b2f"
  },
  {
    "url": "images/AlbumArt/Horses-min.jpg",
    "revision": "1e9b9126dbf712ff9cae080b8b171ce1"
  },
  {
    "url": "images/AlbumArt/Horses.jpg",
    "revision": "296c0c5e3d5e46eb1ea414eb2b419645"
  },
  {
    "url": "images/AlbumArt/HotelCalifornia-min.jpg",
    "revision": "762e3ea58c46bcc30547a288c9018d89"
  },
  {
    "url": "images/AlbumArt/HotelCalifornia.jpg",
    "revision": "1baa0da2b536e90b50e0b34eca4969a2"
  },
  {
    "url": "images/AlbumArt/HouseOfTheHoly-min.jpg",
    "revision": "6a65ff34336b55bd9476b3f3cebdfe41"
  },
  {
    "url": "images/AlbumArt/HouseOfTheHoly.jpg",
    "revision": "1a0157d842ccfcedec4c1c18d911ea7f"
  },
  {
    "url": "images/AlbumArt/HowlinWolf-min.jpg",
    "revision": "78ee891f9b44ecc5b3f2d0e5b18f5b00"
  },
  {
    "url": "images/AlbumArt/HowlinWolf.jpg",
    "revision": "cf8ee86751910e10c1b6c84d434692bb"
  },
  {
    "url": "images/AlbumArt/HowWillTheWolfSurvive-min.jpg",
    "revision": "2df80843566dd6a1eb43bd0f04ca524a"
  },
  {
    "url": "images/AlbumArt/HowWillTheWolfSurvive.jpg",
    "revision": "8d389735c93c68ca39be799a15796b25"
  },
  {
    "url": "images/AlbumArt/HunkyDory-min.jpg",
    "revision": "5b0cbf1dd14b5e714cc81820d89951d4"
  },
  {
    "url": "images/AlbumArt/HunkyDory.jpg",
    "revision": "041f5ba98bd443d4c22c6492a4926d59"
  },
  {
    "url": "images/AlbumArt/Hysteria-min.jpg",
    "revision": "2927b14e16c5310c3c4e4fe9882b20de"
  },
  {
    "url": "images/AlbumArt/Hysteria.jpg",
    "revision": "b1d16551aedf385216a8178c2e56e44f"
  },
  {
    "url": "images/AlbumArt/IDoNotWantWhatIHaventGot-min.jpg",
    "revision": "01098962fb630b5328f5949af2bb8c2c"
  },
  {
    "url": "images/AlbumArt/IDoNotWantWhatIHaventGot.jpg",
    "revision": "650f401a6962f7bbf34442c857983517"
  },
  {
    "url": "images/AlbumArt/IfYouCanBelieveYourEyesAndEars-min.jpg",
    "revision": "3d3354f6ff30939775e62a6081940e6a"
  },
  {
    "url": "images/AlbumArt/IfYouCanBelieveYourEyesAndEars.jpg",
    "revision": "28375fde17c7a546a0b4abed6b871a8b"
  },
  {
    "url": "images/AlbumArt/Illmatic-min.jpg",
    "revision": "643ea5aae1553174727e66b19a3b5ae1"
  },
  {
    "url": "images/AlbumArt/Illmatic.jpg",
    "revision": "f31e0835279a03a6b805349ffb3f9249"
  },
  {
    "url": "images/AlbumArt/Imagine-min.jpg",
    "revision": "2e7e69b88c7d620b342a4901cae487b1"
  },
  {
    "url": "images/AlbumArt/Imagine.jpg",
    "revision": "de5abc11a9553ce8c378c1583524ea1b"
  },
  {
    "url": "images/AlbumArt/ImperialBedroom-min.jpg",
    "revision": "9bb8d07850f8ed234de775cae2af58f0"
  },
  {
    "url": "images/AlbumArt/ImperialBedroom.jpg",
    "revision": "aa00a31d19345da56733283dde84eb68"
  },
  {
    "url": "images/AlbumArt/ImStillInLoveWithYou-min.jpg",
    "revision": "bb51bbea88cd28692ca963ba9a392d90"
  },
  {
    "url": "images/AlbumArt/ImStillInLoveWithYou.jpg",
    "revision": "eb86b8080a11b94c5f5f589235f29c3c"
  },
  {
    "url": "images/AlbumArt/InColor-min.jpg",
    "revision": "6254c09dc8cdbcf23ba9e268bc62636c"
  },
  {
    "url": "images/AlbumArt/InColor.jpg",
    "revision": "81189e5c3932bb4eb188d54ba023e3b5"
  },
  {
    "url": "images/AlbumArt/INeverLovedAManTheWayILoveYou-min.jpg",
    "revision": "554c0d6cb1cb85a2fa3379dfa386976a"
  },
  {
    "url": "images/AlbumArt/INeverLovedAManTheWayILoveYou.jpg",
    "revision": "209918077f5ffab14402a530ead8ea0f"
  },
  {
    "url": "images/AlbumArt/Innervisions-min.jpg",
    "revision": "975726bc02636940f59b64af3267502b"
  },
  {
    "url": "images/AlbumArt/Innervisions.jpg",
    "revision": "21ed4f732482ccaedc33f81af8c3c346"
  },
  {
    "url": "images/AlbumArt/InRainbows-min.jpg",
    "revision": "bcc45fff0b3bd157f73ff722ac29a465"
  },
  {
    "url": "images/AlbumArt/InRainbows.jpg",
    "revision": "afdface2132bb83e2423e75aa1e57d89"
  },
  {
    "url": "images/AlbumArt/InTheJungleGroove-min.jpg",
    "revision": "5a26085e14d8d1827cd315fb81539934"
  },
  {
    "url": "images/AlbumArt/InTheJungleGroove.jpg",
    "revision": "633dc81a5cb273edcff6ee270f1790da"
  },
  {
    "url": "images/AlbumArt/InTheWeeSmallHours-min.jpg",
    "revision": "20f37036097acc5e7f23e21c27117747"
  },
  {
    "url": "images/AlbumArt/InTheWeeSmallHours.jpg",
    "revision": "e460a94153dda5f9a92172cdf59df19a"
  },
  {
    "url": "images/AlbumArt/InUtero-min.jpg",
    "revision": "fa3eb3fae0cbb38f70c8c939ffd4ddf4"
  },
  {
    "url": "images/AlbumArt/InUtero.jpg",
    "revision": "fc72df160cde043f64a4e70a2efe87c8"
  },
  {
    "url": "images/AlbumArt/IsThisIt-min.jpg",
    "revision": "853a5bf39411b3eef03cd7102670b834"
  },
  {
    "url": "images/AlbumArt/IsThisIt.jpg",
    "revision": "44988d5d2db00889a2bb0845bd97b4b0"
  },
  {
    "url": "images/AlbumArt/ItTakesANationOfMillionsToHoldUsBack-min.jpg",
    "revision": "0c63ea64bcb431368a0a2f125898e52e"
  },
  {
    "url": "images/AlbumArt/ItTakesANationOfMillionsToHoldUsBack.jpg",
    "revision": "dbd4a15d4e0cf98f0c210b3d46d48f33"
  },
  {
    "url": "images/AlbumArt/IWantToSeeTheBrightLightsTonight-min.jpg",
    "revision": "ab3303dbf67deec70f5f800219a4f0d9"
  },
  {
    "url": "images/AlbumArt/IWantToSeeTheBrightLightsTonight.jpg",
    "revision": "4145de7c0223513d41a818633a00d7a8"
  },
  {
    "url": "images/AlbumArt/JamesBrownLiveAtTheApollo-min.jpg",
    "revision": "134c280a135bc12107ff7980491da7a1"
  },
  {
    "url": "images/AlbumArt/JamesBrownLiveAtTheApollo.jpg",
    "revision": "08af06b25edc7e1c569928814049b55c"
  },
  {
    "url": "images/AlbumArt/JohnPrine-min.jpg",
    "revision": "8fb49e48d224105e34479dd1fc9b4e1f"
  },
  {
    "url": "images/AlbumArt/JohnPrine.jpg",
    "revision": "5e7b8af558036e1d44e441d0d87f4c2b"
  },
  {
    "url": "images/AlbumArt/JohnWesleyHarding-min.jpg",
    "revision": "b408e07ac1e36a4ddadb4b461f65c409"
  },
  {
    "url": "images/AlbumArt/JohnWesleyHarding.jpg",
    "revision": "cbd2fca16750abca28fb459c14fbc817"
  },
  {
    "url": "images/AlbumArt/Kala-min.jpg",
    "revision": "a50ad5f5b0c700db54af412380d56cf1"
  },
  {
    "url": "images/AlbumArt/Kala.jpg",
    "revision": "001e4bd82374d5a75943b81c4bdb95fc"
  },
  {
    "url": "images/AlbumArt/KickOutTheJams-min.jpg",
    "revision": "7fb81e61b0fa0de98398df55f2566da4"
  },
  {
    "url": "images/AlbumArt/KickOutTheJams.jpg",
    "revision": "911356d2ad9953d466c29153421358aa"
  },
  {
    "url": "images/AlbumArt/KidA-min.jpg",
    "revision": "eb8c6d72db69d748ba10913b07e513dc"
  },
  {
    "url": "images/AlbumArt/KidA.jpg",
    "revision": "c893af99e3a51549fc4c0f34aeb67b18"
  },
  {
    "url": "images/AlbumArt/KindOfBlue-min.jpg",
    "revision": "4cc68d22c96e5a75739c54b5615dfa5d"
  },
  {
    "url": "images/AlbumArt/KindOfBlue.jpg",
    "revision": "c049f2152ed429ce8d27d433a4b48812"
  },
  {
    "url": "images/AlbumArt/LadySoul-min.jpg",
    "revision": "aabb913df52fb0615c42711eeb462761"
  },
  {
    "url": "images/AlbumArt/LadySoul.jpg",
    "revision": "83aeb3ba1f18a76ddb740fbcddef4e56"
  },
  {
    "url": "images/AlbumArt/LateForTheSky-min.jpg",
    "revision": "6fa402ca1f5ff9835ab24a2c7df8b8c5"
  },
  {
    "url": "images/AlbumArt/LateForTheSky.jpg",
    "revision": "e35af4e6237f0aaad14fc725d6575633"
  },
  {
    "url": "images/AlbumArt/LateRegistration-min.jpg",
    "revision": "47bd48e4fe1d10d17de9dd3069d4f4c1"
  },
  {
    "url": "images/AlbumArt/LateRegistration.jpg",
    "revision": "a3f03bc17218a62333e757df108a7434"
  },
  {
    "url": "images/AlbumArt/LAWoman-min.jpg",
    "revision": "ee05d32cefa1e898d9fbf861a0c77ad6"
  },
  {
    "url": "images/AlbumArt/LAWoman.jpg",
    "revision": "b93a6ee606bd95c5740736bb3c20307c"
  },
  {
    "url": "images/AlbumArt/LaylaAndOtherAssortedLoveSongs-min.jpg",
    "revision": "f872c1f82043bfd9597c8ffe54ae114a"
  },
  {
    "url": "images/AlbumArt/LaylaAndOtherAssortedLoveSongs.jpg",
    "revision": "54d7f6160b8f392e719c6eb160408e5d"
  },
  {
    "url": "images/AlbumArt/LedZeppelin-min.jpg",
    "revision": "a5127abc58649be3bd7c722990467f45"
  },
  {
    "url": "images/AlbumArt/LedZeppelin.jpg",
    "revision": "55af7d6ad197407632a808d69948cae8"
  },
  {
    "url": "images/AlbumArt/LedZeppelinII-min.jpg",
    "revision": "fbcbfce3ad25ed7da43ac6e726a5a6eb"
  },
  {
    "url": "images/AlbumArt/LedZeppelinII.jpg",
    "revision": "6e03e0e39b024aabb570a9113d6f281c"
  },
  {
    "url": "images/AlbumArt/LedZeppelinUntitled-min.jpg",
    "revision": "1deecb44cfb182cf201bb93ebc79fc54"
  },
  {
    "url": "images/AlbumArt/LedZeppelinUntitled.jpg",
    "revision": "b000f20342d5730a04e692d717ec296e"
  },
  {
    "url": "images/AlbumArt/LetItBe-min.jpg",
    "revision": "0c39486914141b34f457106d5cc571fc"
  },
  {
    "url": "images/AlbumArt/LetItBe.jpg",
    "revision": "14e92687d6f3aae313ba2f2da3745294"
  },
  {
    "url": "images/AlbumArt/LetItBe2-min.jpg",
    "revision": "b9f1ad48ebf82e54d912c755681322ee"
  },
  {
    "url": "images/AlbumArt/LetItBe2.jpg",
    "revision": "b74f1ce0a29c316600e55c37b54ab0c4"
  },
  {
    "url": "images/AlbumArt/LetItBleed-min.jpg",
    "revision": "ce7a82e4d11e6c30da6181b06c186409"
  },
  {
    "url": "images/AlbumArt/LetItBleed.jpg",
    "revision": "382064ac797fb15c35746cc5f5be2a38"
  },
  {
    "url": "images/AlbumArt/LetsGetItOn-min.jpg",
    "revision": "a6be606c302fa1ed38cf77297ba2ff62"
  },
  {
    "url": "images/AlbumArt/LetsGetItOn.jpg",
    "revision": "cd05c24fdae52085a6d30f337c3f5408"
  },
  {
    "url": "images/AlbumArt/LicensedToIll-min.jpg",
    "revision": "c4c151caf96298702575cbf88ea6bbbb"
  },
  {
    "url": "images/AlbumArt/LicensedToIll.jpg",
    "revision": "4afc3923584524826f0ebb154bd1f9c0"
  },
  {
    "url": "images/AlbumArt/LifeAfterDeath-min.jpg",
    "revision": "2210b597c04856396626c543cc041c34"
  },
  {
    "url": "images/AlbumArt/LifeAfterDeath.jpg",
    "revision": "fd599c7f7b3877c769bf8dfcc9850a00"
  },
  {
    "url": "images/AlbumArt/LikeAPrayer-min.jpg",
    "revision": "fe15b8410b5805a97d8c28ff933b61c9"
  },
  {
    "url": "images/AlbumArt/LikeAPrayer.jpg",
    "revision": "e0c39116c9bb53c6c6fe0be293489e9b"
  },
  {
    "url": "images/AlbumArt/LiveAtLeeds-min.jpg",
    "revision": "bd374528c0f75afebd7042e1f057fc1d"
  },
  {
    "url": "images/AlbumArt/LiveAtLeeds.jpg",
    "revision": "2ef9d638bfa170d1cb607c07005034ae"
  },
  {
    "url": "images/AlbumArt/LiveAtTheHarlemSquareClub1963-min.jpg",
    "revision": "0a9feec1f4028451ddefdd0a4d5fda51"
  },
  {
    "url": "images/AlbumArt/LiveAtTheHarlemSquareClub1963.jpg",
    "revision": "cf774b0c4e403dfae5c78ea3846b321b"
  },
  {
    "url": "images/AlbumArt/LiveAtTheRegal-min.jpg",
    "revision": "16844950eac8fdbf5eb29f460251378c"
  },
  {
    "url": "images/AlbumArt/LiveAtTheRegal.jpg",
    "revision": "3fe80635892e8cd151767f9c82ef2758"
  },
  {
    "url": "images/AlbumArt/LiveDead-min.jpg",
    "revision": "47ff6b2b2ff9d00389337cd647e8174d"
  },
  {
    "url": "images/AlbumArt/LiveDead.jpg",
    "revision": "480d3a84e8d094d3c2c408aba08d6514"
  },
  {
    "url": "images/AlbumArt/LiveInCookCountyJail-min.jpg",
    "revision": "376435394710127fc6d44e0472171850"
  },
  {
    "url": "images/AlbumArt/LiveInCookCountyJail.jpg",
    "revision": "0c49711041b65722d6451bf20c2bb2d8"
  },
  {
    "url": "images/AlbumArt/LiveThroughThis-min.jpg",
    "revision": "265bbd021d5e569c4e01fe3f70f0ab70"
  },
  {
    "url": "images/AlbumArt/LiveThroughThis.jpg",
    "revision": "2bb5fef4c6f300b71af8bd870c8b678f"
  },
  {
    "url": "images/AlbumArt/Loaded-min.jpg",
    "revision": "78d56bda27f60027e5661e7f142b2aaf"
  },
  {
    "url": "images/AlbumArt/Loaded.jpg",
    "revision": "d304bd5ad7b029da7967e662cfafb5ff"
  },
  {
    "url": "images/AlbumArt/Look-KaPyPy-min.jpg",
    "revision": "cfd68ec39951305d18de51f727191ee5"
  },
  {
    "url": "images/AlbumArt/Look-KaPyPy.jpg",
    "revision": "a6f6ceb5dc40559873dd1a4b1bd121af"
  },
  {
    "url": "images/AlbumArt/LosAngeles-min.jpg",
    "revision": "f04d3f83e18746b3b8d65f7dd8292e46"
  },
  {
    "url": "images/AlbumArt/LosAngeles.jpg",
    "revision": "e8367357ea009e716142b7f28f3014a3"
  },
  {
    "url": "images/AlbumArt/LouderThanBombs-min.jpg",
    "revision": "3ed56c87b4e0e3fc0839a5ac1daf2fbb"
  },
  {
    "url": "images/AlbumArt/LouderThanBombs.jpg",
    "revision": "2b192324547e46c082b84b90ddb4c4fc"
  },
  {
    "url": "images/AlbumArt/LoveAndTheft-min.jpg",
    "revision": "3467ad05f93189381429b0715a2ba811"
  },
  {
    "url": "images/AlbumArt/LoveAndTheft.jpg",
    "revision": "758474c70f0bc57f2fdd691143fa9250"
  },
  {
    "url": "images/AlbumArt/LoveItToDeath-min.jpg",
    "revision": "a1ce2a1d40ff47df52a847f9f014903c"
  },
  {
    "url": "images/AlbumArt/LoveItToDeath.jpg",
    "revision": "034c197a91f8f3121ef820d618a72947"
  },
  {
    "url": "images/AlbumArt/Loveless-min.jpg",
    "revision": "659c252372be108705672d32432c33c6"
  },
  {
    "url": "images/AlbumArt/Loveless.jpg",
    "revision": "8fe2672212e208539366104b5eab557e"
  },
  {
    "url": "images/AlbumArt/Low-min.jpg",
    "revision": "9a52a6e9b76e532eb7457ce50067bb34"
  },
  {
    "url": "images/AlbumArt/Low.jpg",
    "revision": "a547a040480faefe54ae8db8f05d795b"
  },
  {
    "url": "images/AlbumArt/LynyrdSkynyrd-min.jpg",
    "revision": "2206515bae3b7e895a3e901039863cb7"
  },
  {
    "url": "images/AlbumArt/LynyrdSkynyrd.jpg",
    "revision": "c945656a094754ca81b91436ca490d07"
  },
  {
    "url": "images/AlbumArt/MaggotBrain-min.jpg",
    "revision": "29125c9b8aff574c10b8de5ec630d7ae"
  },
  {
    "url": "images/AlbumArt/MaggotBrain.jpg",
    "revision": "91c5b90c194295f5e8ab8bda1acaf009"
  },
  {
    "url": "images/AlbumArt/MarqueeMoon-min.jpg",
    "revision": "9eb4a92c5517139745f3d04eee5ce3c0"
  },
  {
    "url": "images/AlbumArt/MarqueeMoon.jpg",
    "revision": "0e12318b6c1880459eda6638804efb70"
  },
  {
    "url": "images/AlbumArt/MasterOfPuppets-min.jpg",
    "revision": "11735eac43966c1fb82f009faaccef8a"
  },
  {
    "url": "images/AlbumArt/MasterOfPuppets.jpg",
    "revision": "a06c57f675de0f5828a175bcaa1dd198"
  },
  {
    "url": "images/AlbumArt/MasterOfReality-min.jpg",
    "revision": "064781c8168cd1568927edd81abf716a"
  },
  {
    "url": "images/AlbumArt/MasterOfReality.jpg",
    "revision": "6f3388b6cb2eef913ba874998d4394d5"
  },
  {
    "url": "images/AlbumArt/MeatIsMurder-min.jpg",
    "revision": "c8b50efe118a67a8dae5691481dca713"
  },
  {
    "url": "images/AlbumArt/MeatIsMurder.jpg",
    "revision": "c773ea8378c1e6497671a9d51b2297de"
  },
  {
    "url": "images/AlbumArt/MeetTheBeatles-min.jpg",
    "revision": "624b80431931d71afa077a0cb63c7fe9"
  },
  {
    "url": "images/AlbumArt/MeetTheBeatles.jpg",
    "revision": "9212ef65a892fb008eb64f62849fd0f6"
  },
  {
    "url": "images/AlbumArt/MetalBox-min.jpg",
    "revision": "4780e4041a25650b7ef669f3e7086d61"
  },
  {
    "url": "images/AlbumArt/MetalBox.jpg",
    "revision": "8fc8a582f1f64e745cd31d5cb11fe303"
  },
  {
    "url": "images/AlbumArt/Metallica-min.jpg",
    "revision": "364d6885a97d7a6de218c7e4b6cde2d0"
  },
  {
    "url": "images/AlbumArt/Metallica.jpg",
    "revision": "ba2b5aa07f3e1e6797d074af5a558c43"
  },
  {
    "url": "images/AlbumArt/MoaninInTheMoonlight-min.jpg",
    "revision": "4d1cf199461dd10986c8b34f2cb7b15a"
  },
  {
    "url": "images/AlbumArt/MoaninInTheMoonlight.jpg",
    "revision": "6a97a3ef958f04b6016d7f8861884815"
  },
  {
    "url": "images/AlbumArt/MobyGrape-min.jpg",
    "revision": "0fec1ac9146d02250eba74b2f5671ba3"
  },
  {
    "url": "images/AlbumArt/MobyGrape.jpg",
    "revision": "bbe8b0c727efe9e4861c15c98162d468"
  },
  {
    "url": "images/AlbumArt/ModernSoundsInCountryAndWesternMusic-min.jpg",
    "revision": "f0ddfbb10ba30f563a67f07ba058d477"
  },
  {
    "url": "images/AlbumArt/ModernSoundsInCountryAndWesternMusic.jpg",
    "revision": "318e52b0f3652ea4759d23f4966205bd"
  },
  {
    "url": "images/AlbumArt/ModernTimes-min.jpg",
    "revision": "a1574530dfe6969b63d1b01a7abef356"
  },
  {
    "url": "images/AlbumArt/ModernTimes.jpg",
    "revision": "1de043eeae97bf6ab44a86f7e6746a69"
  },
  {
    "url": "images/AlbumArt/Moondance-min.jpg",
    "revision": "b6b4e2fc2da67c393cb21f0c97d32eb8"
  },
  {
    "url": "images/AlbumArt/Moondance.jpg",
    "revision": "c17b5210387ff27ea088eaa3895204a9"
  },
  {
    "url": "images/AlbumArt/MoreSongsAboutBuildingsAndFood-min.jpg",
    "revision": "aef72fad86652c018d7acb60c3755c2b"
  },
  {
    "url": "images/AlbumArt/MoreSongsAboutBuildingsAndFood.jpg",
    "revision": "fc5264382c01da45e29518f077d27747"
  },
  {
    "url": "images/AlbumArt/MothershipConnection-min.jpg",
    "revision": "e0ca5b8e5b46473d3c532be360441ca1"
  },
  {
    "url": "images/AlbumArt/MothershipConnection.jpg",
    "revision": "0d257cdbeb7416b1aa11bf632f6a9d07"
  },
  {
    "url": "images/AlbumArt/Mott-min.jpg",
    "revision": "5ea08501d843fd0a76bd1ed82bbe7646"
  },
  {
    "url": "images/AlbumArt/Mott.jpg",
    "revision": "1d33db3efc482023bce9724234da5b54"
  },
  {
    "url": "images/AlbumArt/MrTambourineMan-min.jpg",
    "revision": "4692a72b7bb94d5a28b6f33cf4a11523"
  },
  {
    "url": "images/AlbumArt/MrTambourineMan.jpg",
    "revision": "12b14b7400b609ed4fba1eccd3adb091"
  },
  {
    "url": "images/AlbumArt/MTVUnpluggedInNewYork-min.jpg",
    "revision": "173ccd62f0b4d796842e1eb8f0658019"
  },
  {
    "url": "images/AlbumArt/MTVUnpluggedInNewYork.jpg",
    "revision": "df67d3e246d1a4850f7504f0aed692e1"
  },
  {
    "url": "images/AlbumArt/MuddyWatersAtNewport1960-min.jpg",
    "revision": "5da789ed2080df05fb726ab7eb9c3060"
  },
  {
    "url": "images/AlbumArt/MuddyWatersAtNewport1960.jpg",
    "revision": "1c75d59af134a01ae95fad04c3cef892"
  },
  {
    "url": "images/AlbumArt/MuleVariations-min.jpg",
    "revision": "a1b770a1eedfcfbe7a8e8699dc03a776"
  },
  {
    "url": "images/AlbumArt/MuleVariations.jpg",
    "revision": "4a33fdbf4365793233dcd68a50faae2f"
  },
  {
    "url": "images/AlbumArt/Murmur-min.jpg",
    "revision": "b3e9d7a79bffd7aa24a7500109b19e6c"
  },
  {
    "url": "images/AlbumArt/Murmur.jpg",
    "revision": "8d85824984b6ef42c6cad850904f20f4"
  },
  {
    "url": "images/AlbumArt/MusicFromBigPink-min.jpg",
    "revision": "3c4050ca065116e28b624f876e6f2e08"
  },
  {
    "url": "images/AlbumArt/MusicFromBigPink.jpg",
    "revision": "d21718f1e9e421b683131e23ab3891fb"
  },
  {
    "url": "images/AlbumArt/MusicOfMyMind-min.jpg",
    "revision": "9afe15827ca4963636adc827f835d699"
  },
  {
    "url": "images/AlbumArt/MusicOfMyMind.jpg",
    "revision": "495b4874a7e6025031e20264be21ab54"
  },
  {
    "url": "images/AlbumArt/MyAimIsTrue-min.jpg",
    "revision": "3522d1d68fe971a9966a3943c4a0b4cc"
  },
  {
    "url": "images/AlbumArt/MyAimIsTrue.jpg",
    "revision": "f17816b1f7453e4d0b905f4c88d9c85b"
  },
  {
    "url": "images/AlbumArt/MyBeautifulDarkTwistedFantasy-min.jpg",
    "revision": "cbb26fc2330f87142b6a4e86e108ab8f"
  },
  {
    "url": "images/AlbumArt/MyBeautifulDarkTwistedFantasy.jpg",
    "revision": "ac73921820ea2b7471092352804b7a1b"
  },
  {
    "url": "images/AlbumArt/MyGeneration-min.jpg",
    "revision": "c59e6a237becb8e6ab7b5e409169bce2"
  },
  {
    "url": "images/AlbumArt/MyGeneration.jpg",
    "revision": "12a5b0c11ede09692f7888445b51374c"
  },
  {
    "url": "images/AlbumArt/MyLife-min.jpg",
    "revision": "ab335782d9aa4807a2764367b7fb59f3"
  },
  {
    "url": "images/AlbumArt/MyLife.jpg",
    "revision": "4ff69b8839a0912049c387c7db762fa3"
  },
  {
    "url": "images/AlbumArt/NattyDread-min.jpg",
    "revision": "8fe8b25358bee1ea79b9303e75f8e9da"
  },
  {
    "url": "images/AlbumArt/NattyDread.jpg",
    "revision": "f98775739c76138b77979f8a20b7faf8"
  },
  {
    "url": "images/AlbumArt/Nebraska-min.jpg",
    "revision": "a8e8c3407f5a719684d3d2fa9a9d204f"
  },
  {
    "url": "images/AlbumArt/Nebraska.jpg",
    "revision": "670b23be52ec20d6c36f55cc1f03dc89"
  },
  {
    "url": "images/AlbumArt/Nevermind-min.jpg",
    "revision": "9228230247f34c25a51f2e3a7535016e"
  },
  {
    "url": "images/AlbumArt/Nevermind.jpg",
    "revision": "ae251e1f6f2d41a679b162fd46857b35"
  },
  {
    "url": "images/AlbumArt/NeverMindTheBollocks-min.jpg",
    "revision": "a026ecfb1ae8a4a0bc1ef9e80d8f7b65"
  },
  {
    "url": "images/AlbumArt/NeverMindTheBollocks.jpg",
    "revision": "b43dbabcc91a4a2dc0410a3985638f39"
  },
  {
    "url": "images/AlbumArt/NewDayRising-min.jpg",
    "revision": "9dc80e2769d6cc62726609062dc0543f"
  },
  {
    "url": "images/AlbumArt/NewDayRising.jpg",
    "revision": "5aafc3a4b3cf6b7fb5a66f6e1b61ed3b"
  },
  {
    "url": "images/AlbumArt/NewOrleansPiano-min.jpg",
    "revision": "69cf2f80623baedcc15fe20c92c19052"
  },
  {
    "url": "images/AlbumArt/NewOrleansPiano.jpg",
    "revision": "5870e83fa4bcb3beb269de94ba66ee02"
  },
  {
    "url": "images/AlbumArt/NewYorkDolls-min.jpg",
    "revision": "12e1cb7218d1b24bf6b9545292e9eec3"
  },
  {
    "url": "images/AlbumArt/NewYorkDolls.jpg",
    "revision": "5781a3dcb6156698aad61ab85b0e8af1"
  },
  {
    "url": "images/AlbumArt/NickOfTime-min.jpg",
    "revision": "fd6c216457db32048f4aa825f4761592"
  },
  {
    "url": "images/AlbumArt/NickOfTime.jpg",
    "revision": "8a7574d395e22caa34e2eec1b4ac437b"
  },
  {
    "url": "images/AlbumArt/Nightbirds-min.jpg",
    "revision": "e5145ea266d95b714b31542c325777a9"
  },
  {
    "url": "images/AlbumArt/Nightbirds.jpg",
    "revision": "a1c1559feb5d6b317c0a1c2eb6182fee"
  },
  {
    "url": "images/AlbumArt/NothingsShocking-min.jpg",
    "revision": "8be6bc8ac7495bf86db83b9a38af259f"
  },
  {
    "url": "images/AlbumArt/NothingsShocking.jpg",
    "revision": "59057ceb48089f979aa1fb2c38353e7e"
  },
  {
    "url": "images/AlbumArt/Now-min.jpg",
    "revision": "1f8ece4332ad1517eb6a7ba29d094ac2"
  },
  {
    "url": "images/AlbumArt/Now.jpg",
    "revision": "b417de803113dac89e26eedb15496f84"
  },
  {
    "url": "images/AlbumArt/NuggetsOriginalArtyfactsFromTheFirstPsychedelic-min.jpg",
    "revision": "9ac8c674bdbf78a8357750b10eecb4cb"
  },
  {
    "url": "images/AlbumArt/NuggetsOriginalArtyfactsFromTheFirstPsychedelic.jpg",
    "revision": "b0a0c79bae8bc8cb481108292bd9d5ea"
  },
  {
    "url": "images/AlbumArt/Odelay-min.jpg",
    "revision": "e3913fd7421cae552dca4855e4f52664"
  },
  {
    "url": "images/AlbumArt/Odelay.jpg",
    "revision": "bf9f182dc139876e5fb636677c300a61"
  },
  {
    "url": "images/AlbumArt/OdesseyAndOracle-min.jpg",
    "revision": "3acc50b42a05a0050d55f3b845f5bc82"
  },
  {
    "url": "images/AlbumArt/OdesseyAndOracle.jpg",
    "revision": "78945a7229658145b8a0eda9c4da7fd3"
  },
  {
    "url": "images/AlbumArt/OffTheWall-min.jpg",
    "revision": "43735f4b0e298ba1a6f44f6467572d94"
  },
  {
    "url": "images/AlbumArt/OffTheWall.jpg",
    "revision": "50ffdfc6fdafd5c70338e6ac950a5c54"
  },
  {
    "url": "images/AlbumArt/OKComputer-min.jpg",
    "revision": "caa33d142b52460bd4ecfa2d6472d051"
  },
  {
    "url": "images/AlbumArt/OKComputer.jpg",
    "revision": "95da7453716d028b9a705048d256a86a"
  },
  {
    "url": "images/AlbumArt/OneNationUnderAGroove-min.jpg",
    "revision": "350fdc71688b2cc7b1b91c18568e2e72"
  },
  {
    "url": "images/AlbumArt/OneNationUnderAGroove.jpg",
    "revision": "5586967f28a5b43e0606fa906b2e550f"
  },
  {
    "url": "images/AlbumArt/OnlyBuilt4CubanLinx-min.jpg",
    "revision": "ae9834d803eb0d792e6131b184253a38"
  },
  {
    "url": "images/AlbumArt/OnlyBuilt4CubanLinx.jpg",
    "revision": "f466ffd66e3b7f55a9da85b20f631eec"
  },
  {
    "url": "images/AlbumArt/OracularSpectacular-min.jpg",
    "revision": "03fb3e941353401437614ea73679c6bd"
  },
  {
    "url": "images/AlbumArt/OracularSpectacular.jpg",
    "revision": "381d90f6dec116cbaf3bc73ba1c5d704"
  },
  {
    "url": "images/AlbumArt/OtisBlue-min.jpg",
    "revision": "34cee527297391729d15f05841ed006b"
  },
  {
    "url": "images/AlbumArt/OtisBlue.jpg",
    "revision": "942760c5938c3a1d67045acc6df961de"
  },
  {
    "url": "images/AlbumArt/OutlandosDAmour-min.jpg",
    "revision": "15c5046030607d9bdb723c2eedef6575"
  },
  {
    "url": "images/AlbumArt/OutlandosDAmour.jpg",
    "revision": "0d7c08b3f172d411b2bf48a2e38b97be"
  },
  {
    "url": "images/AlbumArt/OutOfOurHeads-min.jpg",
    "revision": "743e6b82fbbfe6237d689b6b5b08f40f"
  },
  {
    "url": "images/AlbumArt/OutOfOurHeads.jpg",
    "revision": "c2a2e3f3a9b407a77659c696dc0d7c26"
  },
  {
    "url": "images/AlbumArt/PaidInFull-min.jpg",
    "revision": "89ce7bcdbfa3e65884176db4d0c46ef2"
  },
  {
    "url": "images/AlbumArt/PaidInFull.jpg",
    "revision": "855d0aa497c9eb7463d71f6e01bbcc03"
  },
  {
    "url": "images/AlbumArt/ParallelLines-min.jpg",
    "revision": "bb26cedf2698bf77881493aa5f54ea7b"
  },
  {
    "url": "images/AlbumArt/ParallelLines.jpg",
    "revision": "df3f16264ac96c4ba6093bb16aa7e237"
  },
  {
    "url": "images/AlbumArt/Paranoid-min.jpg",
    "revision": "ec2299e3f559213aa172272fdf2fbf7d"
  },
  {
    "url": "images/AlbumArt/Paranoid.jpg",
    "revision": "69977e950d24008f61eed2f28a9543ae"
  },
  {
    "url": "images/AlbumArt/ParsleySageRosemaryAndThyme-min.jpg",
    "revision": "1d904817d87b0012d13314572fe78c5b"
  },
  {
    "url": "images/AlbumArt/ParsleySageRosemaryAndThyme.jpg",
    "revision": "7d56b78f5b4b6cf55d54109e8ff30c71"
  },
  {
    "url": "images/AlbumArt/PaulsBoutique-min.jpg",
    "revision": "a2ef3b961705ca1c73cf3b5e30c95c39"
  },
  {
    "url": "images/AlbumArt/PaulsBoutique.jpg",
    "revision": "5ebe24555eed7111e73704bf8f01327a"
  },
  {
    "url": "images/AlbumArt/PaulSimon-min.jpg",
    "revision": "b3908663595b4d3b157cc435330ba4dc"
  },
  {
    "url": "images/AlbumArt/PaulSimon.jpg",
    "revision": "c69c965d73f755d74d52e4af83ccb87b"
  },
  {
    "url": "images/AlbumArt/Pearl-min.jpg",
    "revision": "3a614b94bbadd6ee89c6bdece7af5fa7"
  },
  {
    "url": "images/AlbumArt/Pearl.jpg",
    "revision": "9302516f4d9e96ec5e920bced0b9a9d0"
  },
  {
    "url": "images/AlbumArt/PetSounds-min.jpg",
    "revision": "74a3eb65a09148a84f4a2e3e19ce019e"
  },
  {
    "url": "images/AlbumArt/PetSounds.jpg",
    "revision": "1802f21187332f988faee188a0ba1d7d"
  },
  {
    "url": "images/AlbumArt/PhilSpectorsChristmasAlbum-min.jpg",
    "revision": "e287f606b84160eb5dc2a6ab1c5b057c"
  },
  {
    "url": "images/AlbumArt/PhilSpectorsChristmasAlbum.jpg",
    "revision": "fde9763f233ccd47764a9dc7aae67647"
  },
  {
    "url": "images/AlbumArt/PhysicalGraffiti-min.jpg",
    "revision": "91feb82cd251c88dca23c203c1fb3c58"
  },
  {
    "url": "images/AlbumArt/PhysicalGraffiti.jpg",
    "revision": "6506ac3896960fc5a3f7d7570283dfae"
  },
  {
    "url": "images/AlbumArt/PinkFlag-min.jpg",
    "revision": "c66274393d4e0fe852d52c95af947de6"
  },
  {
    "url": "images/AlbumArt/PinkFlag.jpg",
    "revision": "25db059accea55164d0e4e70c1e380e3"
  },
  {
    "url": "images/AlbumArt/PinkMoon-min.jpg",
    "revision": "b629611973113576694329c6c31e7b86"
  },
  {
    "url": "images/AlbumArt/PinkMoon.jpg",
    "revision": "11b6de29a7991ab8fc71787114782d0e"
  },
  {
    "url": "images/AlbumArt/PlasticOnoBand-min.jpg",
    "revision": "ea5de8f19e1f8cc064823aaf8f734f2d"
  },
  {
    "url": "images/AlbumArt/PlasticOnoBand.jpg",
    "revision": "c64c88d68e879a12697621cc34a0722d"
  },
  {
    "url": "images/AlbumArt/Play-min.jpg",
    "revision": "9e4e23ee859b22e6ced0a7339daf493e"
  },
  {
    "url": "images/AlbumArt/Play.jpg",
    "revision": "ecdefdb746eed0950ab06796cda51bb8"
  },
  {
    "url": "images/AlbumArt/PleasePleaseMe-min.jpg",
    "revision": "c00ff7c0f6c7c969ec1bb3a3f0fd21aa"
  },
  {
    "url": "images/AlbumArt/PleasePleaseMe.jpg",
    "revision": "1c17e4510d7cfbd131b25e6c8a09395b"
  },
  {
    "url": "images/AlbumArt/PortraitOfALegend-min.jpg",
    "revision": "039b97ad05935d89d4171d2022933fad"
  },
  {
    "url": "images/AlbumArt/PortraitOfALegend.jpg",
    "revision": "83274914bd893c48acd487fdcfef5f11"
  },
  {
    "url": "images/AlbumArt/Post-min.jpg",
    "revision": "f329674e325237c02fae8d5c97b3b4f1"
  },
  {
    "url": "images/AlbumArt/Post.jpg",
    "revision": "b5855da2efa683006bbec8c8096674f3"
  },
  {
    "url": "images/AlbumArt/PresentingTheFabulousRonettesFeaturingVeronica-min.jpg",
    "revision": "b3936159177c8b5624fdedb77ec0b457"
  },
  {
    "url": "images/AlbumArt/PresentingTheFabulousRonettesFeaturingVeronica.jpg",
    "revision": "1aa3d95ca7d5c551dc60b7c032759530"
  },
  {
    "url": "images/AlbumArt/Pretenders-min.jpg",
    "revision": "be51cc437e3fa4af9ec94dd3fe632c99"
  },
  {
    "url": "images/AlbumArt/Pretenders.jpg",
    "revision": "ee218b4806415c9da5d115e9241795b5"
  },
  {
    "url": "images/AlbumArt/PretzelLogic-min.jpg",
    "revision": "65dca891c32baf28ad9d706e7de7c011"
  },
  {
    "url": "images/AlbumArt/PretzelLogic.jpg",
    "revision": "4d3f78098ddf3d28c02b514d472db85c"
  },
  {
    "url": "images/AlbumArt/Psychocandy-min.jpg",
    "revision": "03e32b3f4a0431422201d08bcfa79792"
  },
  {
    "url": "images/AlbumArt/Psychocandy.jpg",
    "revision": "dbe6021662d1a627b3cd323e432bfcc4"
  },
  {
    "url": "images/AlbumArt/PurpleRain-min.jpg",
    "revision": "8373a920dfa7e5c5e91f585f2b26e328"
  },
  {
    "url": "images/AlbumArt/PurpleRain.jpg",
    "revision": "822ece7045261f4bd93b5fbd54001798"
  },
  {
    "url": "images/AlbumArt/QAreWeNotMenAWeAreDevo-min.jpg",
    "revision": "4f6d8aec6fd75ce13ca57c05cb60731b"
  },
  {
    "url": "images/AlbumArt/QAreWeNotMenAWeAreDevo.jpg",
    "revision": "359143c2e46b89d6f13a0d0f5de07ddb"
  },
  {
    "url": "images/AlbumArt/Quadrophenia-min.jpg",
    "revision": "222500998bc261c1404eb2a185eede54"
  },
  {
    "url": "images/AlbumArt/Quadrophenia.jpg",
    "revision": "2f0eaa782ab3ca3b009c821908bf4503"
  },
  {
    "url": "images/AlbumArt/Radio-min.jpg",
    "revision": "ad681589c9557823f00b86852d8c7782"
  },
  {
    "url": "images/AlbumArt/Radio.jpg",
    "revision": "ad76d7cf5d610699cc6e35f127c27102"
  },
  {
    "url": "images/AlbumArt/RadioCity-min.jpg",
    "revision": "bdf5a340b4da9ddd906530e88f4ebc1c"
  },
  {
    "url": "images/AlbumArt/RadioCity.jpg",
    "revision": "bf26bdba8672b7d1a37b3a91ba350b0b"
  },
  {
    "url": "images/AlbumArt/RageAgainstTheMachine-min.jpg",
    "revision": "79a0ded6231d98f74f41ef4f29cf8667"
  },
  {
    "url": "images/AlbumArt/RageAgainstTheMachine.jpg",
    "revision": "b3f6e0cf35c6ae6799601cbf5c0a9ab4"
  },
  {
    "url": "images/AlbumArt/RainDogs-min.jpg",
    "revision": "8bf9cd22024acd95c00bcf8082c429e9"
  },
  {
    "url": "images/AlbumArt/RainDogs.jpg",
    "revision": "396cb74cba3e9ad63ae62c4800a78892"
  },
  {
    "url": "images/AlbumArt/RaisingHell-min.jpg",
    "revision": "4d03788ed5f2509a5a1d36c0cfc4e805"
  },
  {
    "url": "images/AlbumArt/RaisingHell.jpg",
    "revision": "8f400da05810acb43442ad0937ffeef3"
  },
  {
    "url": "images/AlbumArt/Ramones-min.jpg",
    "revision": "2e6992c8ad14de7ad7b291308148a316"
  },
  {
    "url": "images/AlbumArt/Ramones.jpg",
    "revision": "eb5ffeea2a5faef3f64cd1d686315223"
  },
  {
    "url": "images/AlbumArt/RawPower-min.jpg",
    "revision": "f9d0883ac9f9aa3947404d44a44766c9"
  },
  {
    "url": "images/AlbumArt/RawPower.jpg",
    "revision": "cfd87a7e09ea2b36d88a2b144723f8e0"
  },
  {
    "url": "images/AlbumArt/RayOfLight-min.jpg",
    "revision": "20c8bd7e7190bfe74f7e4641c55baa15"
  },
  {
    "url": "images/AlbumArt/RayOfLight.jpg",
    "revision": "4c3267418b9cab3cf52ddd23cf99d818"
  },
  {
    "url": "images/AlbumArt/ReadyToDie-min.jpg",
    "revision": "305da7924dc4491c0414e9a4f9042d67"
  },
  {
    "url": "images/AlbumArt/ReadyToDie.jpg",
    "revision": "481503cf8b80dd1837171d128ffe8810"
  },
  {
    "url": "images/AlbumArt/ReasonableDoubt-min.jpg",
    "revision": "5b83e58674f222ac22a4c95545839be7"
  },
  {
    "url": "images/AlbumArt/ReasonableDoubt.jpg",
    "revision": "1d2b55c1432abba3224f20b0a8af4750"
  },
  {
    "url": "images/AlbumArt/RedHeadedStranger-min.jpg",
    "revision": "f5cd43292741ac94ea162f0a9594b3f4"
  },
  {
    "url": "images/AlbumArt/RedHeadedStranger.jpg",
    "revision": "42cd66933f89c4461b0f735d3a639f26"
  },
  {
    "url": "images/AlbumArt/ReggattaDeBlanc-min.jpg",
    "revision": "3ae5f129200d3306c8e777896938dded"
  },
  {
    "url": "images/AlbumArt/ReggattaDeBlanc.jpg",
    "revision": "8ef0e01b88ae2c85a931c9498284f9ea"
  },
  {
    "url": "images/AlbumArt/Rejuvenation-min.jpg",
    "revision": "465ae3f2ccdbfc8e3a927b04e4ef0991"
  },
  {
    "url": "images/AlbumArt/Rejuvenation.jpg",
    "revision": "b72be11f4fcb5a3beeb8968623943001"
  },
  {
    "url": "images/AlbumArt/RemainInLight-min.jpg",
    "revision": "b134732e0e7d176049193d992ab96d15"
  },
  {
    "url": "images/AlbumArt/RemainInLight.jpg",
    "revision": "c60fcaccbd5250909b40ec4493c94f61"
  },
  {
    "url": "images/AlbumArt/Revolver-min.jpg",
    "revision": "b42bea991a6cb2fe73659a5f8f764ce9"
  },
  {
    "url": "images/AlbumArt/Revolver.jpg",
    "revision": "00b96edf6f06dce926dae62db79dd806"
  },
  {
    "url": "images/AlbumArt/RhythmNation1814-min.jpg",
    "revision": "7a36ce9637133f98ef1734ae5c2504ea"
  },
  {
    "url": "images/AlbumArt/RhythmNation1814.jpg",
    "revision": "895d285dd46b718a85571fd540393c7b"
  },
  {
    "url": "images/AlbumArt/RidOfMe-min.jpg",
    "revision": "179ed24576d5793282c60874966c23f8"
  },
  {
    "url": "images/AlbumArt/RidOfMe.jpg",
    "revision": "586a4be1d8cec62ab364508d76fe4e79"
  },
  {
    "url": "images/AlbumArt/RocketToRussia-min.jpg",
    "revision": "b3ef6e19fbc53ff1d3adf2003eb53c1b"
  },
  {
    "url": "images/AlbumArt/RocketToRussia.jpg",
    "revision": "4160e93feb94dcf99cbd43c1b080bbd4"
  },
  {
    "url": "images/AlbumArt/Rocks-min.jpg",
    "revision": "8fccc89bbfc659b242a7eb47997cb52b"
  },
  {
    "url": "images/AlbumArt/Rocks.jpg",
    "revision": "11c9a260d97d6f085917267394766fda"
  },
  {
    "url": "images/AlbumArt/RubberSoul-min.jpg",
    "revision": "b16424438a93d3488937cad277290efb"
  },
  {
    "url": "images/AlbumArt/RubberSoul.jpg",
    "revision": "04ae98378b416d1f9fd25312332e7ccd"
  },
  {
    "url": "images/AlbumArt/Rumours-min.jpg",
    "revision": "def475352b33b336d0c77d1d92a76ba4"
  },
  {
    "url": "images/AlbumArt/Rumours.jpg",
    "revision": "ecc084f963b2a22291072d81f4561371"
  },
  {
    "url": "images/AlbumArt/RumSodomyAndTheLash-min.jpg",
    "revision": "e475aee8df08398939a5a6a59d0081a2"
  },
  {
    "url": "images/AlbumArt/RumSodomyAndTheLash.jpg",
    "revision": "4df8ac51695e4751a6d228f598994ca5"
  },
  {
    "url": "images/AlbumArt/Run-DMC-min.jpg",
    "revision": "6f5881c9e36bb326c0637a823a386091"
  },
  {
    "url": "images/AlbumArt/Run-DMC.jpg",
    "revision": "b6ebe4aca162b47381b59444b81cfd1c"
  },
  {
    "url": "images/AlbumArt/RustNeverSleeps-min.jpg",
    "revision": "ff821923578685f0ca531e55283d9e19"
  },
  {
    "url": "images/AlbumArt/RustNeverSleeps.jpg",
    "revision": "c90dd1036c5236bae2a6560d4d8009f9"
  },
  {
    "url": "images/AlbumArt/SailAway-min.jpg",
    "revision": "2b5aec7e4326e3af41c18cda79bfd501"
  },
  {
    "url": "images/AlbumArt/SailAway.jpg",
    "revision": "1e8be7aec6ab4b8822dd23ceeec47704"
  },
  {
    "url": "images/AlbumArt/Sandinista-min.jpg",
    "revision": "fa17757a0d2e1237571ff03d23e9722f"
  },
  {
    "url": "images/AlbumArt/Sandinista.jpg",
    "revision": "521fc5775a0e58ea287d44fe781b6a8b"
  },
  {
    "url": "images/AlbumArt/Santana-min.jpg",
    "revision": "6191db69491875ba97349e56da60149a"
  },
  {
    "url": "images/AlbumArt/Santana.jpg",
    "revision": "7395cd3df6fe4d90dafb8b72af52c094"
  },
  {
    "url": "images/AlbumArt/SaturdayNightFever-min.jpg",
    "revision": "74c33ad3ce5fcc3ac7168c3e8e2cd443"
  },
  {
    "url": "images/AlbumArt/SaturdayNightFever.jpg",
    "revision": "eb9ada73ceb142773bd4e580fd725dea"
  },
  {
    "url": "images/AlbumArt/SeaChange-min.jpg",
    "revision": "50156425966dee9319ef704a9a0da355"
  },
  {
    "url": "images/AlbumArt/SeaChange.jpg",
    "revision": "46f82a94813d6494028d6fc6a62f1f53"
  },
  {
    "url": "images/AlbumArt/SgtPepper-min.jpg",
    "revision": "0e64d8965422ad6ef8662fe305eed34f"
  },
  {
    "url": "images/AlbumArt/SgtPepper.jpg",
    "revision": "029a9772d85d914c938d5f6996191e37"
  },
  {
    "url": "images/AlbumArt/ShesSoUnusual-min.jpg",
    "revision": "c756b6d2a2eb016565560ae1f563201b"
  },
  {
    "url": "images/AlbumArt/ShesSoUnusual.jpg",
    "revision": "d4615fb7cbc40fb40c71629e97ced822"
  },
  {
    "url": "images/AlbumArt/ShootOutTheLight-min.jpg",
    "revision": "262c686370d38bbc63198d5e4a4c3919"
  },
  {
    "url": "images/AlbumArt/ShootOutTheLight.jpg",
    "revision": "0d78fe09c9baa3c38127930653bdac7b"
  },
  {
    "url": "images/AlbumArt/SiameseDream-min.jpg",
    "revision": "57817e7fbf1874ee8e2c122ba263fa7d"
  },
  {
    "url": "images/AlbumArt/SiameseDream.jpg",
    "revision": "0678ec2490790a88531b7f3c4a97aebb"
  },
  {
    "url": "images/AlbumArt/SignOTheTimes-min.jpg",
    "revision": "d20d7536207db2437756f3e1e5b55420"
  },
  {
    "url": "images/AlbumArt/SignOTheTimes.jpg",
    "revision": "bbd44abc4c59800a3974e79a5c9048bc"
  },
  {
    "url": "images/AlbumArt/SinglesGoingSteady-min.jpg",
    "revision": "c48510d2e1c4e77fd979322940b8e212"
  },
  {
    "url": "images/AlbumArt/SinglesGoingSteady.jpg",
    "revision": "d8d155a7ac7f1bee60fb35c2a2785829"
  },
  {
    "url": "images/AlbumArt/Siren-min.jpg",
    "revision": "2965b84d449aab671d9de0953240e3e5"
  },
  {
    "url": "images/AlbumArt/Siren.jpg",
    "revision": "129d804aa0f52e3368e75e0c35d04333"
  },
  {
    "url": "images/AlbumArt/SketchesOfSpain-min.jpg",
    "revision": "8813f647ae8eee4f450358ff0c089535"
  },
  {
    "url": "images/AlbumArt/SketchesOfSpain.jpg",
    "revision": "120ced839b851af2964a4118733feae2"
  },
  {
    "url": "images/AlbumArt/SlantedAndEnchanted-min.jpg",
    "revision": "02d419424948656e9772f8fc61f78d31"
  },
  {
    "url": "images/AlbumArt/SlantedAndEnchanted.jpg",
    "revision": "319f5a692dc4689e8bf248f6a0c92e58"
  },
  {
    "url": "images/AlbumArt/Sleepless-min.jpg",
    "revision": "c8ca28da64605a1adf63ab4a80fff66d"
  },
  {
    "url": "images/AlbumArt/Sleepless.jpg",
    "revision": "61db594d5b4103ffd948c2dea7caf33e"
  },
  {
    "url": "images/AlbumArt/Slowhand-min.jpg",
    "revision": "35e3e8cf72d4055d6f2088aa7a0cff69"
  },
  {
    "url": "images/AlbumArt/Slowhand.jpg",
    "revision": "8416287c58f606b0e6a2ece6c93e2c1f"
  },
  {
    "url": "images/AlbumArt/SlyAndTheFamilyStone-min.jpg",
    "revision": "986d28c0747d887caea80b53d35511f2"
  },
  {
    "url": "images/AlbumArt/SlyAndTheFamilyStone.jpg",
    "revision": "5b33deb8c8fcd1ce2352e073d100a681"
  },
  {
    "url": "images/AlbumArt/Smile-min.jpg",
    "revision": "e661148f698a078a37e8a2c4d9c29aa8"
  },
  {
    "url": "images/AlbumArt/Smile.jpg",
    "revision": "3f0273b33c475e8b5170e31608898861"
  },
  {
    "url": "images/AlbumArt/So-min.jpg",
    "revision": "ab2858e034101b9ee6f84acd602698b9"
  },
  {
    "url": "images/AlbumArt/So.jpg",
    "revision": "656e8b081d6c0d8bbb41398e55748e10"
  },
  {
    "url": "images/AlbumArt/SomeGirls-min.jpg",
    "revision": "4761ca3c28d4cb6004c4dcb2061d65ff"
  },
  {
    "url": "images/AlbumArt/SomeGirls.jpg",
    "revision": "512da850274458ce23640d443fe32851"
  },
  {
    "url": "images/AlbumArt/SomethingElseByTheKinks-min.jpg",
    "revision": "1d3c8e61d5d8e3f130f2e918e3d3dbde"
  },
  {
    "url": "images/AlbumArt/SomethingElseByTheKinks.jpg",
    "revision": "34350451548a32770005d31fa289e1d5"
  },
  {
    "url": "images/AlbumArt/SongsForSwinginLovers-min.jpg",
    "revision": "1e5b527104b3ae7246b0ed65c0d808c5"
  },
  {
    "url": "images/AlbumArt/SongsForSwinginLovers.jpg",
    "revision": "9739e5a49733353417942d45bab98f6d"
  },
  {
    "url": "images/AlbumArt/SongsInTheKeyOfLife-min.jpg",
    "revision": "80aac98f900edca11cb71dbe5a2e51c1"
  },
  {
    "url": "images/AlbumArt/SongsInTheKeyOfLife.jpg",
    "revision": "ab311ef417073cad39e4392d20617a20"
  },
  {
    "url": "images/AlbumArt/SongsOfLoveAndHate-min.jpg",
    "revision": "e6d3d83aa8bbc3edaff0e0552b538e9c"
  },
  {
    "url": "images/AlbumArt/SongsOfLoveAndHate.jpg",
    "revision": "5811609c32bd8270c737506d0344fdd7"
  },
  {
    "url": "images/AlbumArt/SoundOfSilver-min.jpg",
    "revision": "8f89243934203608d88f7fd7e9a31b50"
  },
  {
    "url": "images/AlbumArt/SoundOfSilver.jpg",
    "revision": "9780de35616cd0dd8ef5bf9dab609e84"
  },
  {
    "url": "images/AlbumArt/SqueezingOutSparks-min.jpg",
    "revision": "e2b82a55d857075d4e41e34ca86f6e95"
  },
  {
    "url": "images/AlbumArt/SqueezingOutSparks.jpg",
    "revision": "1a0dc2288017b38f323d07046dcfa5e2"
  },
  {
    "url": "images/AlbumArt/Stand-min.jpg",
    "revision": "2b0c5edd199ea20b1893a6495dec44fc"
  },
  {
    "url": "images/AlbumArt/Stand.jpg",
    "revision": "459c0fd5cb4d340287d061d7d2670e6f"
  },
  {
    "url": "images/AlbumArt/StanGetz-min.jpg",
    "revision": "26b6e706c5d9fdcc38693e21697dba03"
  },
  {
    "url": "images/AlbumArt/StanGetz.jpg",
    "revision": "273d653957c3b2b0c1a5a32d965438ce"
  },
  {
    "url": "images/AlbumArt/Stankonia-min.jpg",
    "revision": "7078908241577469a4a50ef6f26f0b84"
  },
  {
    "url": "images/AlbumArt/Stankonia.jpg",
    "revision": "a7a8d75ef30e1dbe366c5f3df9f9b06e"
  },
  {
    "url": "images/AlbumArt/Stardust-min.jpg",
    "revision": "8861bd95c7c51c13b4bed6c7149983ad"
  },
  {
    "url": "images/AlbumArt/Stardust.jpg",
    "revision": "a8e6c657f4dd662db0811793216194ae"
  },
  {
    "url": "images/AlbumArt/StarTime-min.jpg",
    "revision": "6dfdf76ce867c48ecd280b0daa512168"
  },
  {
    "url": "images/AlbumArt/StarTime.jpg",
    "revision": "964fbec6223504abfebda4014f4c29e3"
  },
  {
    "url": "images/AlbumArt/StationToStation-min.jpg",
    "revision": "97e10018fcae843cd95276f525abb07c"
  },
  {
    "url": "images/AlbumArt/StationToStation.jpg",
    "revision": "402cccde078a7d449e8ac9f110a8591e"
  },
  {
    "url": "images/AlbumArt/StickyFingers-min.jpg",
    "revision": "0f4060f425f37df1cfbe95fc21fc3bcc"
  },
  {
    "url": "images/AlbumArt/StickyFingers.jpg",
    "revision": "f52cd9393866fe78374f5726d0c09828"
  },
  {
    "url": "images/AlbumArt/StopMakingSense-min.jpg",
    "revision": "ece2cc36e19050a799f101d678271594"
  },
  {
    "url": "images/AlbumArt/StopMakingSense.jpg",
    "revision": "064d477859dc43771043f9414261492d"
  },
  {
    "url": "images/AlbumArt/StoriesFromTheCityStoriesFromTheSea-min.jpg",
    "revision": "c6d3d2e614bfcbd724b005446d861be9"
  },
  {
    "url": "images/AlbumArt/StoriesFromTheCityStoriesFromTheSea.jpg",
    "revision": "02e776b193dcee5e9b08f54cc2b5dae3"
  },
  {
    "url": "images/AlbumArt/StraightOuttaCompton-min.jpg",
    "revision": "e5510bac42feb06b7ba5c7100202b986"
  },
  {
    "url": "images/AlbumArt/StraightOuttaCompton.jpg",
    "revision": "3668d0c8c597d4364694a7cd39410bf8"
  },
  {
    "url": "images/AlbumArt/StrangeDays-min.jpg",
    "revision": "82cdc93f04f960ffa91937fbd7034b5b"
  },
  {
    "url": "images/AlbumArt/StrangeDays.jpg",
    "revision": "3376d99685bc4adb65259d6aee7736b9"
  },
  {
    "url": "images/AlbumArt/StrictlyBusiness-min.jpg",
    "revision": "375e7a60df25027e408691b9508331c0"
  },
  {
    "url": "images/AlbumArt/StrictlyBusiness.jpg",
    "revision": "566705e1851799341dfe7f03aef418b3"
  },
  {
    "url": "images/AlbumArt/Substance-min.jpg",
    "revision": "3ff02a6c0463ad51efbeee8f8a2e6ed6"
  },
  {
    "url": "images/AlbumArt/Substance.jpg",
    "revision": "390d8919d13b191e4413bfed1118b120"
  },
  {
    "url": "images/AlbumArt/Suicide-min.jpg",
    "revision": "2eccf8baad31be6339dad904ed4b03a5"
  },
  {
    "url": "images/AlbumArt/Suicide.jpg",
    "revision": "4cc4c877075a9a80b39123e2cb24c188"
  },
  {
    "url": "images/AlbumArt/SuperFly-min.jpg",
    "revision": "2a25a30856cb02423a86f4cef7005b5d"
  },
  {
    "url": "images/AlbumArt/SuperFly.jpg",
    "revision": "e83e5359839f9d552bbb635f8f0e69db"
  },
  {
    "url": "images/AlbumArt/Superunknown-min.jpg",
    "revision": "9dfc227d705dc17bf34db89f11c3ce1f"
  },
  {
    "url": "images/AlbumArt/Superunknown.jpg",
    "revision": "639cfcb8381b471771bfe3f22db5bdf6"
  },
  {
    "url": "images/AlbumArt/SurferRosa-min.jpg",
    "revision": "bf4677a8ba68c1912b3ff764c750bf53"
  },
  {
    "url": "images/AlbumArt/SurferRosa.jpg",
    "revision": "79439f67834fa1f7ccb7403aa05ce1d6"
  },
  {
    "url": "images/AlbumArt/SurrealisticPillow-min.jpg",
    "revision": "23e3adbe3a92c2ef9fdd7531557837e2"
  },
  {
    "url": "images/AlbumArt/SurrealisticPillow.jpg",
    "revision": "c55fbcfe3d0b1d11768a5998236bd0be"
  },
  {
    "url": "images/AlbumArt/SweetBabyJames-min.jpg",
    "revision": "30040440b52ad0c028c08519cc96e471"
  },
  {
    "url": "images/AlbumArt/SweetBabyJames.jpg",
    "revision": "9d468883c071a27529306b7cece49da0"
  },
  {
    "url": "images/AlbumArt/SweetheartOfTheRadio-min.jpg",
    "revision": "36a74d3623e4be9ff882a399cc01bad9"
  },
  {
    "url": "images/AlbumArt/SweetheartOfTheRadio.jpg",
    "revision": "734e61273fbbf19f8220a50372c17704"
  },
  {
    "url": "images/AlbumArt/Synchronicity-min.jpg",
    "revision": "909e7c34172f82f25b3ebb140c19b675"
  },
  {
    "url": "images/AlbumArt/Synchronicity.jpg",
    "revision": "b5650f32c56c9e4f338643b469323dae"
  },
  {
    "url": "images/AlbumArt/TalkingBook-min.jpg",
    "revision": "ce30836b1ac6013fbac937938eb5b4fe"
  },
  {
    "url": "images/AlbumArt/TalkingBook.jpg",
    "revision": "7988a54ad53daee4d54bfbcf28fe5749"
  },
  {
    "url": "images/AlbumArt/Tapestry-min.jpg",
    "revision": "6550e8ce33fa09b647a01af6d2d60455"
  },
  {
    "url": "images/AlbumArt/Tapestry.jpg",
    "revision": "1e2c7378b7101ab3cbce0113538e1f80"
  },
  {
    "url": "images/AlbumArt/TattooYou-min.jpg",
    "revision": "1b3cd202bd0078db529c4ba474c440d9"
  },
  {
    "url": "images/AlbumArt/TattooYou.jpg",
    "revision": "3c5c3d01a158405e350ae9b4242ce48a"
  },
  {
    "url": "images/AlbumArt/TeaForTheTillerman-min.jpg",
    "revision": "3c31faeae9e8aa80f8698d6a883646ba"
  },
  {
    "url": "images/AlbumArt/TeaForTheTillerman.jpg",
    "revision": "6b1c7ca47cbc4657ccc234b3a2748fee"
  },
  {
    "url": "images/AlbumArt/Ten-min.jpg",
    "revision": "a5cb1373331dd85f361cf2764652564a"
  },
  {
    "url": "images/AlbumArt/Ten.jpg",
    "revision": "21af9f6edc0bfdcec3a53142dd576486"
  },
  {
    "url": "images/AlbumArt/ThaCarterIII-min.jpg",
    "revision": "07ba9d0e321c23951694e4fe07bee48a"
  },
  {
    "url": "images/AlbumArt/ThaCarterIII.jpg",
    "revision": "d3e52f017371807ab785cf7515740580"
  },
  {
    "url": "images/AlbumArt/ThatsTheWayOfTheWorld-min.jpg",
    "revision": "138c7bcd84fd57342efe34ad1cf83934"
  },
  {
    "url": "images/AlbumArt/ThatsTheWayOfTheWorld.jpg",
    "revision": "da1662525c2fed2ab2cee838e609c558"
  },
  {
    "url": "images/AlbumArt/TheAllmanBrothersBandAtFillmoreEast-min.jpg",
    "revision": "9d8e76c5dfb94dfd4d774afcde2c24de"
  },
  {
    "url": "images/AlbumArt/TheAllmanBrothersBandAtFillmoreEast.jpg",
    "revision": "c15bc7e21859fbab8fbf485c566f3db3"
  },
  {
    "url": "images/AlbumArt/TheAnthology-min.jpg",
    "revision": "a47ad4545d5814799cdf5671b3f8e15d"
  },
  {
    "url": "images/AlbumArt/TheAnthology.jpg",
    "revision": "6f83e4865037a83daabb6b5373eef1bf"
  },
  {
    "url": "images/AlbumArt/TheAnthology196-1977-min.jpg",
    "revision": "9bf9e8b9fcc15ace0bcd446d1d33cfb7"
  },
  {
    "url": "images/AlbumArt/TheAnthology196-1977.jpg",
    "revision": "150dc8764ad6bd3837bd425b3e53c987"
  },
  {
    "url": "images/AlbumArt/TheB52s-min.jpg",
    "revision": "d3728d9a484c7b581e053b81d432b4b2"
  },
  {
    "url": "images/AlbumArt/TheB52s.jpg",
    "revision": "bbf762f7d4ecd3b7e2ec9367352c34ab"
  },
  {
    "url": "images/AlbumArt/TheBand-min.jpg",
    "revision": "e7b508d7ce10aa37fb432617860e354f"
  },
  {
    "url": "images/AlbumArt/TheBand.jpg",
    "revision": "59673606668f89c73ab410ec192443d4"
  },
  {
    "url": "images/AlbumArt/TheBasementTapes-min.jpg",
    "revision": "87a7e4131fed2998c59fff1c0a98c7ac"
  },
  {
    "url": "images/AlbumArt/TheBasementTapes.jpg",
    "revision": "c837ad1ddd7c7cbb77c7f91136471fc1"
  },
  {
    "url": "images/AlbumArt/TheBeachBoysToday-min.jpg",
    "revision": "d652c2131c49a272b74efc6b4270408b"
  },
  {
    "url": "images/AlbumArt/TheBeachBoysToday.jpg",
    "revision": "6b1bf796f01bf81feccf40ffaf126fff"
  },
  {
    "url": "images/AlbumArt/TheBeatles-min.jpg",
    "revision": "df349d4b0ce5d3bba4f47ceef00129e4"
  },
  {
    "url": "images/AlbumArt/TheBeatles.jpg",
    "revision": "13efef493d5fabd9f296bd0c93915c86"
  },
  {
    "url": "images/AlbumArt/TheBends-min.jpg",
    "revision": "a982df46f7c26029d50918abb9365f17"
  },
  {
    "url": "images/AlbumArt/TheBends.jpg",
    "revision": "38816013c18140b04a8a10715250475b"
  },
  {
    "url": "images/AlbumArt/TheBestOfBobMarleyAndTheWailers-min.jpg",
    "revision": "0d8bbf62eb29b1419eb2d6ece93a2e8f"
  },
  {
    "url": "images/AlbumArt/TheBestOfBobMarleyAndTheWailers.jpg",
    "revision": "9b1fd51ebd212efdfe13c2a2b8cbc3b5"
  },
  {
    "url": "images/AlbumArt/TheBestOfIkeAndTinaTurner-min.jpg",
    "revision": "ae26d17532e5f23bf143f502bb945f34"
  },
  {
    "url": "images/AlbumArt/TheBestOfIkeAndTinaTurner.jpg",
    "revision": "2e11f521b97838fff9a2ccc166d1a9c4"
  },
  {
    "url": "images/AlbumArt/TheBestOfLittleWalter-min.jpg",
    "revision": "c86e40d3a0d6db1072ee6603450daaf2"
  },
  {
    "url": "images/AlbumArt/TheBestOfLittleWalter.jpg",
    "revision": "34d0296ec620b1e6dcaecb447f65fe35"
  },
  {
    "url": "images/AlbumArt/TheBestOfTheGirlGroupsVolume1-min.jpg",
    "revision": "a5483f6844f00267c7bb5c6d80a4ee80"
  },
  {
    "url": "images/AlbumArt/TheBestOfTheGirlGroupsVolume1.jpg",
    "revision": "ccd39ba03a333f40d791697b320e8e3f"
  },
  {
    "url": "images/AlbumArt/TheBlackAlbum-min.jpg",
    "revision": "6589ec63785932965e05bc928c631024"
  },
  {
    "url": "images/AlbumArt/TheBlackAlbum.jpg",
    "revision": "e7d8c0b5fffcbb54358293f425a88a19"
  },
  {
    "url": "images/AlbumArt/TheBlueprint-min.jpg",
    "revision": "b4599451d2bc975e1adbc25a65d9d585"
  },
  {
    "url": "images/AlbumArt/TheBlueprint.jpg",
    "revision": "1284d578e216ef05690a8e90c2c03ce1"
  },
  {
    "url": "images/AlbumArt/TheCars-min.jpg",
    "revision": "a90c8747a691c906e40c92be1dcd3ded"
  },
  {
    "url": "images/AlbumArt/TheCars.jpg",
    "revision": "34e77a5c2a848310ff9ae0cc01317d91"
  },
  {
    "url": "images/AlbumArt/TheChirpingCrickets-min.jpg",
    "revision": "0335742c2501d62df5bc1be5672836f3"
  },
  {
    "url": "images/AlbumArt/TheChirpingCrickets.jpg",
    "revision": "ce4f1f48decbb42171f990daa64d6e39"
  },
  {
    "url": "images/AlbumArt/TheChronic-min.jpg",
    "revision": "4f120e88afe062e64253d77c04dc49fa"
  },
  {
    "url": "images/AlbumArt/TheChronic.jpg",
    "revision": "2baeaecdcb1f3e4139ba519a54fe7b3b"
  },
  {
    "url": "images/AlbumArt/TheClash-min.jpg",
    "revision": "0b03792e82408233cc6f7fa7eb022577"
  },
  {
    "url": "images/AlbumArt/TheClash.jpg",
    "revision": "3e420e6b36df8e46cfb0cb056de428e2"
  },
  {
    "url": "images/AlbumArt/TheClassicJackieWilson-min.jpg",
    "revision": "28ffeed0ef785eeeeef1284075840346"
  },
  {
    "url": "images/AlbumArt/TheClassicJackieWilson.jpg",
    "revision": "c23f1f3b0828ec4d0a6ef2b61cb2ebed"
  },
  {
    "url": "images/AlbumArt/TheCollegeDropout-min.jpg",
    "revision": "cd067ded3dc56ff3875bc411685c9184"
  },
  {
    "url": "images/AlbumArt/TheCollegeDropout.jpg",
    "revision": "ae99ff197e169d4515ab7b2351dda1f8"
  },
  {
    "url": "images/AlbumArt/TheCompleteRecordings-min.jpg",
    "revision": "fe4f37bc669331fba265c52d8b5881ba"
  },
  {
    "url": "images/AlbumArt/TheCompleteRecordings.jpg",
    "revision": "36ac330939a14f55bfe6d4f0edb61036"
  },
  {
    "url": "images/AlbumArt/TheDarkSideOfTheMoon-min.jpg",
    "revision": "f9cf219da27c50bcc5a79d027b9c0a8a"
  },
  {
    "url": "images/AlbumArt/TheDarkSideOfTheMoon.jpg",
    "revision": "67363992d559b850784d2be16fa38c87"
  },
  {
    "url": "images/AlbumArt/TheDefinitiveCollection-min.jpg",
    "revision": "0e36954df842286cd6c848a964a42d06"
  },
  {
    "url": "images/AlbumArt/TheDefinitiveCollection.jpg",
    "revision": "c2299c2668c822a39f79b878bf449635"
  },
  {
    "url": "images/AlbumArt/TheDockOfTheBay-min.jpg",
    "revision": "37ebfd1b34d36129903f7ad14a74ff3b"
  },
  {
    "url": "images/AlbumArt/TheDockOfTheBay.jpg",
    "revision": "b353de5c4a54419be64c08c257d2c42b"
  },
  {
    "url": "images/AlbumArt/TheDoors-min.jpg",
    "revision": "0110a64857de06eb2570e897bb47bc95"
  },
  {
    "url": "images/AlbumArt/TheDoors.jpg",
    "revision": "cb02e98e7e08c88540c4314a60fce7ce"
  },
  {
    "url": "images/AlbumArt/TheDownwardSpiral-min.jpg",
    "revision": "fc7d1bd6d5fbded0d610c7ad4d1d69b1"
  },
  {
    "url": "images/AlbumArt/TheDownwardSpiral.jpg",
    "revision": "b8146d37f9cd9c5dc3980223dd2a496c"
  },
  {
    "url": "images/AlbumArt/TheDriftersGoldenHits-min.jpg",
    "revision": "d171159ef4c421c9267623c5f4b91d06"
  },
  {
    "url": "images/AlbumArt/TheDriftersGoldenHits.jpg",
    "revision": "912ab24814a79aadc8c28d4f9663ed0b"
  },
  {
    "url": "images/AlbumArt/TheEndOfTheInnocence-min.jpg",
    "revision": "dcd9e5aeb57f52bddc8b8cc4f3aff6db"
  },
  {
    "url": "images/AlbumArt/TheEndOfTheInnocence.jpg",
    "revision": "a5e888cc1308b66ea468adc337163723"
  },
  {
    "url": "images/AlbumArt/TheFreewheelinBobDylan-min.jpg",
    "revision": "5157c0ac0e034db94d55143ad1d2b95b"
  },
  {
    "url": "images/AlbumArt/TheFreewheelinBobDylan.jpg",
    "revision": "525906217839e44afa182d3321ff098b"
  },
  {
    "url": "images/AlbumArt/TheGeniusOfRayCharles-min.jpg",
    "revision": "6cd846e2a4e77533989eb8c257b5329b"
  },
  {
    "url": "images/AlbumArt/TheGeniusOfRayCharles.jpg",
    "revision": "1d7a51d1b8da4275f00c5d9b57472315"
  },
  {
    "url": "images/AlbumArt/TheGreat28-min.jpg",
    "revision": "dec90c9d7ad13b4c4e0c2af6d48283c6"
  },
  {
    "url": "images/AlbumArt/TheGreat28.jpg",
    "revision": "287a923c5662bc6497136706cf038cdd"
  },
  {
    "url": "images/AlbumArt/TheGuildPalaceOfSkin-min.jpg",
    "revision": "d19dd3cac00d8c7e155d2cd3578ed1d8"
  },
  {
    "url": "images/AlbumArt/TheGuildPalaceOfSkin.jpg",
    "revision": "8bc53a0a0cfaa4b4a2728e180c984dc0"
  },
  {
    "url": "images/AlbumArt/TheHarderTheyCome-min.jpg",
    "revision": "e37a9f59bf585d03793904043f3171ed"
  },
  {
    "url": "images/AlbumArt/TheHarderTheyCome.jpg",
    "revision": "31ffcea34c7c9b6d34df6e86b6c4d8fb"
  },
  {
    "url": "images/AlbumArt/TheHeartOfSaturdayNight-min.jpg",
    "revision": "fe158fb5a36ebdbc0364f1d9fb380849"
  },
  {
    "url": "images/AlbumArt/TheHeartOfSaturdayNight.jpg",
    "revision": "986ea6eee5a4fac726e64b64a528e112"
  },
  {
    "url": "images/AlbumArt/TheImmaculateCollection-min.jpg",
    "revision": "52fc86f2c47f02b34b4bc06ab3c6ecbc"
  },
  {
    "url": "images/AlbumArt/TheImmaculateCollection.jpg",
    "revision": "647197e956d7fb8547dcecd85b70fb6d"
  },
  {
    "url": "images/AlbumArt/TheIndestructibleBeatOfSoweto-min.jpg",
    "revision": "bcb3500d394073e48b641eb6acc57664"
  },
  {
    "url": "images/AlbumArt/TheIndestructibleBeatOfSoweto.jpg",
    "revision": "17de7c670423d1368cdf8bd5d0e3679d"
  },
  {
    "url": "images/AlbumArt/TheJoshuaTree-min.jpg",
    "revision": "4ca2bf87c3cb94a0bea07bbd5d34a185"
  },
  {
    "url": "images/AlbumArt/TheJoshuaTree.jpg",
    "revision": "12d3dba4a6741d7cc79bc493f5d2e0aa"
  },
  {
    "url": "images/AlbumArt/TheKinkKronikles-min.jpg",
    "revision": "f4c625fb1ea0c9cc43540b03a5abae0f"
  },
  {
    "url": "images/AlbumArt/TheKinkKronikles.jpg",
    "revision": "ac7514aa5bd47f07a04ae5158a0ad10f"
  },
  {
    "url": "images/AlbumArt/TheKinksAreTheVillageGreenPreservationSociety-min.jpg",
    "revision": "f67213b67d0bed829b83890ab3b72a15"
  },
  {
    "url": "images/AlbumArt/TheKinksAreTheVillageGreenPreservationSociety.jpg",
    "revision": "464b71330d169b3557f8434228df600c"
  },
  {
    "url": "images/AlbumArt/TheLowEndTheory-min.jpg",
    "revision": "3c63440c523e14b690855e65cec22d6a"
  },
  {
    "url": "images/AlbumArt/TheLowEndTheory.jpg",
    "revision": "95583aef2dd9663215110e60cc2b7d85"
  },
  {
    "url": "images/AlbumArt/TheMarshallMathersLP-min.jpg",
    "revision": "f59bd7aa780c7cf5865080f1160fd07f"
  },
  {
    "url": "images/AlbumArt/TheMarshallMathersLP.jpg",
    "revision": "d9a512a1595dac6f06a5ef129ac146f9"
  },
  {
    "url": "images/AlbumArt/TheMiseducationOfLaurynHill-min.jpg",
    "revision": "66b3cf3b81c185bc04bfdaf239d053f6"
  },
  {
    "url": "images/AlbumArt/TheMiseducationOfLaurynHill.jpg",
    "revision": "122b24a42f704f5870e89e7d3ba41a92"
  },
  {
    "url": "images/AlbumArt/TheModernLovers-min.jpg",
    "revision": "cbd992b8b2e988b0027a5758756420fd"
  },
  {
    "url": "images/AlbumArt/TheModernLovers.jpg",
    "revision": "5b68febe04d811184d66c3ab53aae41a"
  },
  {
    "url": "images/AlbumArt/TheNeilDiamondCollection-min.jpg",
    "revision": "941f17b49a3945e40fd63db0085af2b6"
  },
  {
    "url": "images/AlbumArt/TheNeilDiamondCollection.jpg",
    "revision": "24be2da3f2551c3b43642a770a43c2a2"
  },
  {
    "url": "images/AlbumArt/TheNightTripper-min.jpg",
    "revision": "8db65abd33063265cd8654ad86073f32"
  },
  {
    "url": "images/AlbumArt/TheNightTripper.jpg",
    "revision": "be5c74c0d611652eebe416500b2fafd3"
  },
  {
    "url": "images/AlbumArt/TheNotoriousByrdBrothers-min.jpg",
    "revision": "94a0373249d2b2faba1567a8d0300a53"
  },
  {
    "url": "images/AlbumArt/TheNotoriousByrdBrothers.jpg",
    "revision": "3b80eddb4a9c43ac38092da6e1255989"
  },
  {
    "url": "images/AlbumArt/TheOtisReddingDictionaryOfSoulCompleteAndUnbelievable-min.jpg",
    "revision": "ba6e422975359d9546db3c8270588d0c"
  },
  {
    "url": "images/AlbumArt/TheOtisReddingDictionaryOfSoulCompleteAndUnbelievable.jpg",
    "revision": "4ec0b25e697e4790989778ea2303dbc7"
  },
  {
    "url": "images/AlbumArt/ThePaulButterfieldBluesBand-min.jpg",
    "revision": "99483f47ae3eb3d1f8c8917f661446d9"
  },
  {
    "url": "images/AlbumArt/ThePaulButterfieldBluesBand.jpg",
    "revision": "ce05c1a2982659f535dafb4d4db0ede6"
  },
  {
    "url": "images/AlbumArt/ThePiperAtTheGatesOfDawn-min.jpg",
    "revision": "47da7af71e1fe9a1fb3e1412e738c601"
  },
  {
    "url": "images/AlbumArt/ThePiperAtTheGatesOfDawn.jpg",
    "revision": "1526caebef90f835d221a39296512317"
  },
  {
    "url": "images/AlbumArt/ThePretender-min.jpg",
    "revision": "f3b6bc64053126a9c31aa4d6d6c8b8f4"
  },
  {
    "url": "images/AlbumArt/ThePretender.jpg",
    "revision": "6dc961bd906efbc6a24ff44496d5347d"
  },
  {
    "url": "images/AlbumArt/TheQueenIsDead-min.jpg",
    "revision": "69c8b6947a1ba06573b2266fb269655a"
  },
  {
    "url": "images/AlbumArt/TheQueenIsDead.jpg",
    "revision": "94a83a8a4cb0f43f793fed7530d18c98"
  },
  {
    "url": "images/AlbumArt/TheresARiotGoinOn-min.jpg",
    "revision": "3715bc8dd85e68e81a14d526ea8c3412"
  },
  {
    "url": "images/AlbumArt/TheresARiotGoinOn.jpg",
    "revision": "183d7a88ca6ee7f97d706a0690c469f0"
  },
  {
    "url": "images/AlbumArt/TheRiseAndFallOfZiggyStardust-min.jpg",
    "revision": "9fec6cc96aadab1bb06b3c643a0aa21a"
  },
  {
    "url": "images/AlbumArt/TheRiseAndFallOfZiggyStardust.jpg",
    "revision": "e963d53bc1f2f5e57203ae03d88b9c5d"
  },
  {
    "url": "images/AlbumArt/TheRising-min.jpg",
    "revision": "65ec291f471b2e22adef2c0ead90c7f4"
  },
  {
    "url": "images/AlbumArt/TheRising.jpg",
    "revision": "9543cbd53be0819515b5874fa3bef1e4"
  },
  {
    "url": "images/AlbumArt/TheRiver-min.jpg",
    "revision": "e47193a01960a062471fdf7a915ffc9e"
  },
  {
    "url": "images/AlbumArt/TheRiver.jpg",
    "revision": "dbe72e1ca2af01e66abc00535a14e6ff"
  },
  {
    "url": "images/AlbumArt/TheScore-min.jpg",
    "revision": "d5fe87da0d27c5cdfb351625bac1c636"
  },
  {
    "url": "images/AlbumArt/TheScore.jpg",
    "revision": "70c4d83539de9f2dc54cce8cd8fb27b2"
  },
  {
    "url": "images/AlbumArt/TheShapeOfJazzToCome-min.jpg",
    "revision": "8cff88e67d7a3607e8ad43f7ba7867cf"
  },
  {
    "url": "images/AlbumArt/TheShapeOfJazzToCome.jpg",
    "revision": "bdda15b32f0db37d8fa76ee6fb47560b"
  },
  {
    "url": "images/AlbumArt/TheSlimShadyLP-min.jpg",
    "revision": "508e8d62570fdaa061fadf3e4c00772b"
  },
  {
    "url": "images/AlbumArt/TheSlimShadyLP.jpg",
    "revision": "06cf95cf7cf3910c5833f89b074d396d"
  },
  {
    "url": "images/AlbumArt/TheSmiths-min.jpg",
    "revision": "3fe197f8fd4b03023cd3d7a05f4872c0"
  },
  {
    "url": "images/AlbumArt/TheSmiths.jpg",
    "revision": "5214cce8af88b6c00890376012d3566d"
  },
  {
    "url": "images/AlbumArt/TheStoneRoses-min.jpg",
    "revision": "1310c053cf2b326224aeb220793d7a6b"
  },
  {
    "url": "images/AlbumArt/TheStoneRoses.jpg",
    "revision": "d0b5e990eff8df0caa4267a046eec977"
  },
  {
    "url": "images/AlbumArt/TheStooges-min.jpg",
    "revision": "a4c94c19d1ccb7535f6cbb2d41b14404"
  },
  {
    "url": "images/AlbumArt/TheStooges.jpg",
    "revision": "24098a27b7effef2bd6cc027f580a137"
  },
  {
    "url": "images/AlbumArt/TheStranger-min.jpg",
    "revision": "f5c6a0f7698b20f2782231a56089b6ba"
  },
  {
    "url": "images/AlbumArt/TheStranger.jpg",
    "revision": "b000f20342d5730a04e692d717ec296e"
  },
  {
    "url": "images/AlbumArt/TheSunRecordCollection-min.jpg",
    "revision": "a19e675d9b333cc42437a27ca461434c"
  },
  {
    "url": "images/AlbumArt/TheSunRecordCollection.jpg",
    "revision": "ac2da94bc518819e332d55e34941ad3a"
  },
  {
    "url": "images/AlbumArt/TheSunSessions-min.jpg",
    "revision": "f8e1ea3369cce783851df7a2a8eaf090"
  },
  {
    "url": "images/AlbumArt/TheSunSessions.jpg",
    "revision": "8312d0741e952b90739db6d74d953e61"
  },
  {
    "url": "images/AlbumArt/TheUltimateCollection-min.jpg",
    "revision": "3cc94ff4b01f6e5e0a0b0f00587cb5f3"
  },
  {
    "url": "images/AlbumArt/TheUltimateCollection.jpg",
    "revision": "603cad1e52457f0d2a1648f42e6521fa"
  },
  {
    "url": "images/AlbumArt/TheUltimateCollection1948-1990-min.jpg",
    "revision": "156cfe85782e75d81e150599a63828da"
  },
  {
    "url": "images/AlbumArt/TheUltimateCollection1948-1990.jpg",
    "revision": "c8f5cda91445f851b9929f7688aa1948"
  },
  {
    "url": "images/AlbumArt/TheVelvetRope-min.jpg",
    "revision": "67b21f5d718d6d0a262e395d1656343e"
  },
  {
    "url": "images/AlbumArt/TheVelvetRope.jpg",
    "revision": "40e5d589d2b43bf9077976737cfd1202"
  },
  {
    "url": "images/AlbumArt/TheVelvetUnderground-min.jpg",
    "revision": "4197d0ce9dc47228dde3c23c36a5a19a"
  },
  {
    "url": "images/AlbumArt/TheVelvetUnderground.jpg",
    "revision": "160ee02e4b9767ff26a89c931f9ceeaf"
  },
  {
    "url": "images/AlbumArt/TheVelvetUnderground2-min.jpg",
    "revision": "7767daddcfeec64ee0897c6eb92a4ea9"
  },
  {
    "url": "images/AlbumArt/TheVelvetUnderground2.jpg",
    "revision": "d58883ab22a00bf9fba0f77f5f2fe76c"
  },
  {
    "url": "images/AlbumArt/TheVeryBestOfLindaRonstadt-min.jpg",
    "revision": "dc0437a244914d6db9e389cebad91835"
  },
  {
    "url": "images/AlbumArt/TheVeryBestOfLindaRonstadt.jpg",
    "revision": "5abbecc0234616275ce4a8172f9ef3c3"
  },
  {
    "url": "images/AlbumArt/TheWall-min.jpg",
    "revision": "57ff951acc673293152c1e77804620f2"
  },
  {
    "url": "images/AlbumArt/TheWall.jpg",
    "revision": "b9b44d5e1b97de2b06227a7713bfdd78"
  },
  {
    "url": "images/AlbumArt/TheWhoSellOut-min.jpg",
    "revision": "594529364f9793cb7aa5a02b520ebe14"
  },
  {
    "url": "images/AlbumArt/TheWhoSellOut.jpg",
    "revision": "357076c73c742effa7dc869e5b56d62c"
  },
  {
    "url": "images/AlbumArt/TheWildTheInnocentAndTheEStreetShuffle-min.jpg",
    "revision": "75a57417a2d0712a1b0cf6f643f80dc3"
  },
  {
    "url": "images/AlbumArt/TheWildTheInnocentAndTheEStreetShuffle.jpg",
    "revision": "b0aad414aa810d2df651801a1d5618f1"
  },
  {
    "url": "images/AlbumArt/TheWorldIsAGhetto-min.jpg",
    "revision": "e45a4893985e0c6cd2fc705b9177f7d5"
  },
  {
    "url": "images/AlbumArt/TheWorldIsAGhetto.jpg",
    "revision": "84a0791ba1b6cb63aaed0c3b1d792d9d"
  },
  {
    "url": "images/AlbumArt/ThisYearsModel-min.jpg",
    "revision": "c568439b4e101cf2ec65576fc72ea119"
  },
  {
    "url": "images/AlbumArt/ThisYearsModel.jpg",
    "revision": "69062cdf79b7c6b578798ba359d1b04a"
  },
  {
    "url": "images/AlbumArt/Thriller-min.jpg",
    "revision": "7d4525f989c28bc7f31c666a4d4a101b"
  },
  {
    "url": "images/AlbumArt/Thriller.jpg",
    "revision": "6e952a11248bf09e7a72b3bafc67cb59"
  },
  {
    "url": "images/AlbumArt/Tim-min.jpg",
    "revision": "6bdb0a7fe95cb4266d4de22e0aefb8b2"
  },
  {
    "url": "images/AlbumArt/Tim.jpg",
    "revision": "eddc95c95bfeff5409b0d35278138d73"
  },
  {
    "url": "images/AlbumArt/TimeOutOfMind-min.jpg",
    "revision": "31fd0d6f511c745ea8242ddb075e7142"
  },
  {
    "url": "images/AlbumArt/TimeOutOfMind.jpg",
    "revision": "b46a3bd30cbebff973a650596b1b9a9b"
  },
  {
    "url": "images/AlbumArt/Tommy-min.jpg",
    "revision": "91f7dccaf187035720649af57a81c72a"
  },
  {
    "url": "images/AlbumArt/Tommy.jpg",
    "revision": "b1cc1e3ba2cf862739a9ea121696a5a7"
  },
  {
    "url": "images/AlbumArt/TonightsTheNight-min.jpg",
    "revision": "07ec0a1239aeab9903120f83cf3bc838"
  },
  {
    "url": "images/AlbumArt/TonightsTheNight.jpg",
    "revision": "eff780ce90eaa37f89d0300fe9b6df64"
  },
  {
    "url": "images/AlbumArt/Touch-min.jpg",
    "revision": "9c90aa838825c201bf4b2caccf1d8abd"
  },
  {
    "url": "images/AlbumArt/Touch.jpg",
    "revision": "a0e24d82763efe8809108139ce678671"
  },
  {
    "url": "images/AlbumArt/ToysInTheAttic-min.jpg",
    "revision": "f7b160b7c49d8a728d5837e6088a5059"
  },
  {
    "url": "images/AlbumArt/ToysInTheAttic.jpg",
    "revision": "38cc054f2b823db073779dd97138847f"
  },
  {
    "url": "images/AlbumArt/TracyChapman-min.jpg",
    "revision": "3e0924837c4f73224cf1c7b33e7ee1b9"
  },
  {
    "url": "images/AlbumArt/TracyChapman.jpg",
    "revision": "de45c5e0dd34dff33ae8f329b8f818c0"
  },
  {
    "url": "images/AlbumArt/TransEuropaExpress-min.jpg",
    "revision": "727da34b9752cb7939d0162b5fb26523"
  },
  {
    "url": "images/AlbumArt/TransEuropaExpress.jpg",
    "revision": "46924aba05120521d2504747dec80125"
  },
  {
    "url": "images/AlbumArt/Transformer-min.jpg",
    "revision": "504b7f5ece88c9bed8bfddd57b187826"
  },
  {
    "url": "images/AlbumArt/Transformer.jpg",
    "revision": "98c4f8951ae2bc9439e41380fafdf8e3"
  },
  {
    "url": "images/AlbumArt/TresHombres-min.jpg",
    "revision": "5f7f4be9168f95d535118ad9520a2f17"
  },
  {
    "url": "images/AlbumArt/TresHombres.jpg",
    "revision": "d812b944d55e8435b081234826251c23"
  },
  {
    "url": "images/AlbumArt/TumbleweedConnection-min.jpg",
    "revision": "b50645d44161487fea3e832c6425241e"
  },
  {
    "url": "images/AlbumArt/TumbleweedConnection.jpg",
    "revision": "78aa0f935934ac99841fb6ac5960d62b"
  },
  {
    "url": "images/AlbumArt/TunnelOfLove-min.jpg",
    "revision": "0b929b1641b8cb792e6383cab78a9d8b"
  },
  {
    "url": "images/AlbumArt/TunnelOfLove.jpg",
    "revision": "b96877aa2a73ab16eac9d6adaacd6c2a"
  },
  {
    "url": "images/AlbumArt/TwoStepsFromTheBlues-min.jpg",
    "revision": "de3226e623d812334da26e80ff08fdd3"
  },
  {
    "url": "images/AlbumArt/TwoStepsFromTheBlues.jpg",
    "revision": "8c64b849248cb956dfc8da989db89707"
  },
  {
    "url": "images/AlbumArt/VampireWeekend-min.jpg",
    "revision": "77f1c4347c55c9a2ecc2e344f485457e"
  },
  {
    "url": "images/AlbumArt/VampireWeekend.jpg",
    "revision": "0408c3ddd095680edf4c2056b76000b8"
  },
  {
    "url": "images/AlbumArt/VanHalen-min.jpg",
    "revision": "84dd8642983e6eec503ab4320d1c544b"
  },
  {
    "url": "images/AlbumArt/VanHalen.jpg",
    "revision": "9d3a275d2f9b50f0be8588e8fec11d9b"
  },
  {
    "url": "images/AlbumArt/Violator-min.jpg",
    "revision": "c07bc0f4b782e6c25d6e054804b2b347"
  },
  {
    "url": "images/AlbumArt/Violator.jpg",
    "revision": "ffafa146d680e0031fe77c0e8f7b3612"
  },
  {
    "url": "images/AlbumArt/Vitalogy-min.jpg",
    "revision": "f016d2039dd353c106bc06bf69b29358"
  },
  {
    "url": "images/AlbumArt/Vitalogy.jpg",
    "revision": "7e65002adcd7f5ede1e3baaec62c84d8"
  },
  {
    "url": "images/AlbumArt/Volunteers-min.jpg",
    "revision": "3d3b15c18afa924bed5ada851cfd2555"
  },
  {
    "url": "images/AlbumArt/Volunteers.jpg",
    "revision": "c164c2f55a81da2654bf1615ca031aeb"
  },
  {
    "url": "images/AlbumArt/Voodoo-min.jpg",
    "revision": "12ffd0498769ccb07cd31857c540ac15"
  },
  {
    "url": "images/AlbumArt/Voodoo.jpg",
    "revision": "9375e53e104ac40626d3c893462edb9f"
  },
  {
    "url": "images/AlbumArt/War-min.jpg",
    "revision": "966e6a592b3083ca6c97087c0d5941b7"
  },
  {
    "url": "images/AlbumArt/War.jpg",
    "revision": "5eaf5ddfe2ba0960a4a2b5352e21cdb7"
  },
  {
    "url": "images/AlbumArt/Weezer-min.jpg",
    "revision": "586e2cc1de5f335068b69c934b30f4e4"
  },
  {
    "url": "images/AlbumArt/Weezer.jpg",
    "revision": "f7cd188a803117ff879a841fb580c13a"
  },
  {
    "url": "images/AlbumArt/WereOnlyInItForTheMoney-min.jpg",
    "revision": "d02ab491b502f29f50ffaf7dc0835439"
  },
  {
    "url": "images/AlbumArt/WereOnlyInItForTheMoney.jpg",
    "revision": "ecc55137967f1fa4c38438ab2c5b2caa"
  },
  {
    "url": "images/AlbumArt/WhateverPeopleSayIAmThatsWhatImNot-min.jpg",
    "revision": "9ba3cad9201a1111c82bea6540b4b5e8"
  },
  {
    "url": "images/AlbumArt/WhateverPeopleSayIAmThatsWhatImNot.jpg",
    "revision": "3286340d1a847e088ba19edf081f2e86"
  },
  {
    "url": "images/AlbumArt/WhatsGoingOn-min.jpg",
    "revision": "1471865758b69c6b78278e56d6c6c2c5"
  },
  {
    "url": "images/AlbumArt/WhatsGoingOn.jpg",
    "revision": "1c19c4f4f5711e420996a84b443fab92"
  },
  {
    "url": "images/AlbumArt/WhatsTheStoryMorningGlory-min.jpg",
    "revision": "c35bb54f122e6a8c52672eb58ffe2507"
  },
  {
    "url": "images/AlbumArt/WhatsTheStoryMorningGlory.jpg",
    "revision": "0e284076787224bd06981c67a3c509b5"
  },
  {
    "url": "images/AlbumArt/WheelsOfFire-min.jpg",
    "revision": "71a84794ff5d5742aa7a99aef15b88b0"
  },
  {
    "url": "images/AlbumArt/WheelsOfFire.jpg",
    "revision": "bbe3e3f81dbf01911da1350ea48f4338"
  },
  {
    "url": "images/AlbumArt/WhiteBloodCells-min.jpg",
    "revision": "fbbde76bbc0aab8962ae0175f22bdac5"
  },
  {
    "url": "images/AlbumArt/WhiteBloodCells.jpg",
    "revision": "da37491ecc9c4938d0af939f6e40a1d4"
  },
  {
    "url": "images/AlbumArt/WhiteLightWhiteHeat-min.jpg",
    "revision": "454277a3c76b8c59d17e7257fe6999b2"
  },
  {
    "url": "images/AlbumArt/WhiteLightWhiteHeat.jpg",
    "revision": "f529a7fbfa04089d41db17868762b572"
  },
  {
    "url": "images/AlbumArt/WhitneyHouston-min.jpg",
    "revision": "78011a584cf26f9ddec89c0930c752b7"
  },
  {
    "url": "images/AlbumArt/WhitneyHouston.jpg",
    "revision": "83b65f273bb06783967ac9f7c463aab8"
  },
  {
    "url": "images/AlbumArt/WhosNext-min.jpg",
    "revision": "7e3fadb4c9e0feedb38a5b7a7b465fc0"
  },
  {
    "url": "images/AlbumArt/WhosNext.jpg",
    "revision": "780666ac8118d05d3fc383fd0f6f13a6"
  },
  {
    "url": "images/AlbumArt/WildGift-min.jpg",
    "revision": "39ef8424cbef83b765dbe959afde3850"
  },
  {
    "url": "images/AlbumArt/WildGift.jpg",
    "revision": "cdd4832cde820020b74da447fc41a9d1"
  },
  {
    "url": "images/AlbumArt/WillyAndThePoorBoys-min.jpg",
    "revision": "0bc9193712a07061ef171f92c7151653"
  },
  {
    "url": "images/AlbumArt/WillyAndThePoorBoys.jpg",
    "revision": "828c92e950bf66885da1396e1d9f6459"
  },
  {
    "url": "images/AlbumArt/WishYouWereHere-min.jpg",
    "revision": "36f6a07089749588d1f203810ab2ad6d"
  },
  {
    "url": "images/AlbumArt/WishYouWereHere.jpg",
    "revision": "02554ddd05f9df191d10777d55590538"
  },
  {
    "url": "images/AlbumArt/WorkingmansDead-min.jpg",
    "revision": "26ae25fc3350ccc21ef229786cb417f8"
  },
  {
    "url": "images/AlbumArt/WorkingmansDead.jpg",
    "revision": "33be3cb5dae428c04a7414ed70f5aa72"
  },
  {
    "url": "images/AlbumArt/YankeeHotelFoxtrot-min.jpg",
    "revision": "cd9631bc16bfc2b091e0f2531c4062c2"
  },
  {
    "url": "images/AlbumArt/YankeeHotelFoxtrot.jpg",
    "revision": "d6564f3153d50695ac9521870c722f3e"
  },
  {
    "url": "images/AlbumArt/Yardbirds-min.jpg",
    "revision": "06c50b882d1a11655cf77b6360ee9a02"
  },
  {
    "url": "images/AlbumArt/Yardbirds.jpg",
    "revision": "74cf7cc0296bdc968d81711d47c73479"
  },
  {
    "url": "images/AlbumArt/YoungerThanYesterday-min.jpg",
    "revision": "be8c150199638efd4c0ef1637129e0fc"
  },
  {
    "url": "images/AlbumArt/YoungerThanYesterday.jpg",
    "revision": "3a6b6c8448f00ba1267df1dd3511716e"
  },
  {
    "url": "images/AlbumArt/Z-min.jpg",
    "revision": "bcde908a3c2c8cd128b635f9b7b88bf8"
  },
  {
    "url": "images/AlbumArt/Z.jpg",
    "revision": "54aab44e3022c3e47596c2df52ae2715"
  },
  {
    "url": "images/icons/120x120.png",
    "revision": "29c9cc1902b9df3e2be64d095c1309de"
  },
  {
    "url": "images/icons/152x152.png",
    "revision": "ef7049e059c79511c9200356493d2224"
  },
  {
    "url": "images/icons/167x167.png",
    "revision": "b072bc5660f640e7222a6cb5bd0ca812"
  },
  {
    "url": "images/icons/180x180.png",
    "revision": "4e489adf33d97808755c731fc080aade"
  },
  {
    "url": "images/icons/192x192.png",
    "revision": "7afb386e71e3ce1251c0a29c3631d63d"
  },
  {
    "url": "images/icons/22x22.png",
    "revision": "020eda70a691b44e59b91bbdda0acdf4"
  },
  {
    "url": "images/icons/25x25.png",
    "revision": "980d7aa3086b1729939ae18e955d8280"
  },
  {
    "url": "images/icons/29x29.png",
    "revision": "3e6842a9231654980ec2635c006513c0"
  },
  {
    "url": "images/icons/44x44.png",
    "revision": "e64ae681aeca103d23023c81b8355ade"
  },
  {
    "url": "images/icons/50x50.png",
    "revision": "ccc90ea83b6f90cde720e189372c99fd"
  },
  {
    "url": "images/icons/512x512.png",
    "revision": "866e7151596d14aef5c082b31c3b6fdb"
  },
  {
    "url": "images/icons/58x58.png",
    "revision": "bfbcfc582595288c81173196f6786dc4"
  },
  {
    "url": "images/icons/60x60.png",
    "revision": "dbb35c355e377c094cfff5cbcc9d1f27"
  },
  {
    "url": "images/icons/66x66.png",
    "revision": "caa9fce1b2fce4e208c6cb9821857d0f"
  },
  {
    "url": "images/icons/75x75.png",
    "revision": "bfa478225eca5e0573f4f11d36977337"
  },
  {
    "url": "images/icons/80x80.png",
    "revision": "c4bbdcf6212020dd4745e180f77c487e"
  },
  {
    "url": "images/icons/87x87.png",
    "revision": "08607d31e8be31ea006facdde09f3cc2"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "a1ef1b9708d1ea183a9bc3c84ae12f2b"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "46191e632fc0608fddd6807fb3c0e195"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "cb261019ea0d6deebd87ade090d74447"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "add0be3f5939bed00e3d5c25d3704b8c"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "944845293fe2d79da51210d2abef435a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "42ae7882c8e77d70b4139cefcd7a2a4d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "afe3b946a130e48a1beff91016a9ab12"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "997a884575b29116abb58e1d46a79885"
  },
  {
    "url": "index.html",
    "revision": "4e364400b43a7372c7ef1eecd1edff7b"
  },
  {
    "url": "js/app.js",
    "revision": "22ac40afa9921cc80e7b50c99e0d2360"
  },
  {
    "url": "manifest.json",
    "revision": "c8cf770e3c8b46a4bd9cf586231868c4"
  },
  {
    "url": "NoScript.html",
    "revision": "86516bd30fc49f447292460585ca1094"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
