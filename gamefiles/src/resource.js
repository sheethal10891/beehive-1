var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/StartScreen.png",

    CellNormal_png  : "res/Cell_Closed.png",
    CellPressed_png : "res/Cell_Empty.png",
    CellBee_png     : "res/Cell_Bee.png",
    CellHoney_png   : "res/Cell_Honey.png",
    CellCount1_png   : "res/Cell_count01.png",
    CellCount2_png   : "res/Cell_count02.png",
    CellCount3_png   : "res/Cell_count03.png",
    CellCount4_png   : "res/Cell_count04.png",
    CellCount5_png   : "res/Cell_count05.png",
    CellCount6_png   : "res/Cell_count06.png",
    CellEmpty_png :"res/Cell_Empty.png",
    Cell_Selected_png :"res/Cell_Selected.png",

    BG_png:"res/BG.png",
    Forest_BG_png:"res/ForestBG.png",
    Level_disabled_png:"res/Level_disabled.png",
    Level_enabled_png:"res/Level_enabled.png",
    Level_Selected_png:"res/Level_Selected.png"

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

