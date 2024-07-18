gdjs.L3Code = {};
gdjs.L3Code.localVariables = [];
gdjs.L3Code.GDNewTiledSpriteObjects1= [];
gdjs.L3Code.GDNewTiledSpriteObjects2= [];
gdjs.L3Code.GDDoorClosedObjects1= [];
gdjs.L3Code.GDDoorClosedObjects2= [];
gdjs.L3Code.GDDoorOpenedObjects1= [];
gdjs.L3Code.GDDoorOpenedObjects2= [];
gdjs.L3Code.GDMouthObjects1= [];
gdjs.L3Code.GDMouthObjects2= [];
gdjs.L3Code.GDPlateObjects1= [];
gdjs.L3Code.GDPlateObjects2= [];
gdjs.L3Code.GDBorderObjects1= [];
gdjs.L3Code.GDBorderObjects2= [];


gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.L3Code.GDBorderObjects1});
gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L3Code.GDMouthObjects1});
gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.L3Code.GDBorderObjects1});
gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L3Code.GDMouthObjects1});
gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDDoorOpenedObjects1Objects = Hashtable.newFrom({"DoorOpened": gdjs.L3Code.GDDoorOpenedObjects1});
gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L3Code.GDMouthObjects1});
gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDDoorClosedObjects1Objects = Hashtable.newFrom({"DoorClosed": gdjs.L3Code.GDDoorClosedObjects1});
gdjs.L3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L3Code.GDMouthObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.L3Code.GDMouthObjects1.length !== 0 ? gdjs.L3Code.GDMouthObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.L3Code.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L3Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDBorderObjects1Objects, gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDMouthObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.L3Code.GDBorderObjects1 */
/* Reuse gdjs.L3Code.GDMouthObjects1 */
{for(var i = 0, len = gdjs.L3Code.GDMouthObjects1.length ;i < len;++i) {
    gdjs.L3Code.GDMouthObjects1[i].separateFromObjectsList(gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDBorderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorOpened"), gdjs.L3Code.GDDoorOpenedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L3Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDMouthObjects1Objects, gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDDoorOpenedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorClosed"), gdjs.L3Code.GDDoorClosedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L3Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDMouthObjects1Objects, gdjs.L3Code.mapOfGDgdjs_9546L3Code_9546GDDoorClosedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.L3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.L3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.L3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.L3Code.GDDoorClosedObjects1.length = 0;
gdjs.L3Code.GDDoorClosedObjects2.length = 0;
gdjs.L3Code.GDDoorOpenedObjects1.length = 0;
gdjs.L3Code.GDDoorOpenedObjects2.length = 0;
gdjs.L3Code.GDMouthObjects1.length = 0;
gdjs.L3Code.GDMouthObjects2.length = 0;
gdjs.L3Code.GDPlateObjects1.length = 0;
gdjs.L3Code.GDPlateObjects2.length = 0;
gdjs.L3Code.GDBorderObjects1.length = 0;
gdjs.L3Code.GDBorderObjects2.length = 0;

gdjs.L3Code.eventsList0(runtimeScene);

return;

}

gdjs['L3Code'] = gdjs.L3Code;
