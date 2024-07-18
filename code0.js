gdjs.L1Code = {};
gdjs.L1Code.localVariables = [];
gdjs.L1Code.GDTitleObjects1= [];
gdjs.L1Code.GDTitleObjects2= [];
gdjs.L1Code.GDStartObjects1= [];
gdjs.L1Code.GDStartObjects2= [];
gdjs.L1Code.GDNewSpriteObjects1= [];
gdjs.L1Code.GDNewSpriteObjects2= [];
gdjs.L1Code.GDNewSprite2Objects1= [];
gdjs.L1Code.GDNewSprite2Objects2= [];
gdjs.L1Code.GDDoorClosedObjects1= [];
gdjs.L1Code.GDDoorClosedObjects2= [];
gdjs.L1Code.GDDoorOpenedObjects1= [];
gdjs.L1Code.GDDoorOpenedObjects2= [];
gdjs.L1Code.GDMouthObjects1= [];
gdjs.L1Code.GDMouthObjects2= [];
gdjs.L1Code.GDPlateObjects1= [];
gdjs.L1Code.GDPlateObjects2= [];
gdjs.L1Code.GDBorderObjects1= [];
gdjs.L1Code.GDBorderObjects2= [];


gdjs.L1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "S-jazz.mp3", 0, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L2", false);
}}

}


};

gdjs.L1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.L1Code.GDTitleObjects1.length = 0;
gdjs.L1Code.GDTitleObjects2.length = 0;
gdjs.L1Code.GDStartObjects1.length = 0;
gdjs.L1Code.GDStartObjects2.length = 0;
gdjs.L1Code.GDNewSpriteObjects1.length = 0;
gdjs.L1Code.GDNewSpriteObjects2.length = 0;
gdjs.L1Code.GDNewSprite2Objects1.length = 0;
gdjs.L1Code.GDNewSprite2Objects2.length = 0;
gdjs.L1Code.GDDoorClosedObjects1.length = 0;
gdjs.L1Code.GDDoorClosedObjects2.length = 0;
gdjs.L1Code.GDDoorOpenedObjects1.length = 0;
gdjs.L1Code.GDDoorOpenedObjects2.length = 0;
gdjs.L1Code.GDMouthObjects1.length = 0;
gdjs.L1Code.GDMouthObjects2.length = 0;
gdjs.L1Code.GDPlateObjects1.length = 0;
gdjs.L1Code.GDPlateObjects2.length = 0;
gdjs.L1Code.GDBorderObjects1.length = 0;
gdjs.L1Code.GDBorderObjects2.length = 0;

gdjs.L1Code.eventsList0(runtimeScene);

return;

}

gdjs['L1Code'] = gdjs.L1Code;
