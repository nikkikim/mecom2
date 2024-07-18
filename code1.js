gdjs.L2Code = {};
gdjs.L2Code.localVariables = [];
gdjs.L2Code.GD_95951TileGB2Objects1= [];
gdjs.L2Code.GD_95951TileGB2Objects2= [];
gdjs.L2Code.GD_95951TileGB2Objects3= [];
gdjs.L2Code.GDD1Objects1= [];
gdjs.L2Code.GDD1Objects2= [];
gdjs.L2Code.GDD1Objects3= [];
gdjs.L2Code.GDD2Objects1= [];
gdjs.L2Code.GDD2Objects2= [];
gdjs.L2Code.GDD2Objects3= [];
gdjs.L2Code.GDD3Objects1= [];
gdjs.L2Code.GDD3Objects2= [];
gdjs.L2Code.GDD3Objects3= [];
gdjs.L2Code.GDyum1Objects1= [];
gdjs.L2Code.GDyum1Objects2= [];
gdjs.L2Code.GDyum1Objects3= [];
gdjs.L2Code.GDyum2Objects1= [];
gdjs.L2Code.GDyum2Objects2= [];
gdjs.L2Code.GDyum2Objects3= [];
gdjs.L2Code.GDyum3Objects1= [];
gdjs.L2Code.GDyum3Objects2= [];
gdjs.L2Code.GDyum3Objects3= [];
gdjs.L2Code.GDDoorClosedObjects1= [];
gdjs.L2Code.GDDoorClosedObjects2= [];
gdjs.L2Code.GDDoorClosedObjects3= [];
gdjs.L2Code.GDDoorOpenedObjects1= [];
gdjs.L2Code.GDDoorOpenedObjects2= [];
gdjs.L2Code.GDDoorOpenedObjects3= [];
gdjs.L2Code.GDMouthObjects1= [];
gdjs.L2Code.GDMouthObjects2= [];
gdjs.L2Code.GDMouthObjects3= [];
gdjs.L2Code.GDPlateObjects1= [];
gdjs.L2Code.GDPlateObjects2= [];
gdjs.L2Code.GDPlateObjects3= [];
gdjs.L2Code.GDBorderObjects1= [];
gdjs.L2Code.GDBorderObjects2= [];
gdjs.L2Code.GDBorderObjects3= [];


gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.L2Code.GDBorderObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L2Code.GDMouthObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDBorderObjects1Objects = Hashtable.newFrom({"Border": gdjs.L2Code.GDBorderObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L2Code.GDMouthObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDD1Objects1Objects = Hashtable.newFrom({"D1": gdjs.L2Code.GDD1Objects1});
gdjs.L2Code.asyncCallback12895260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.L2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("yum1"), gdjs.L2Code.GDyum1Objects3);

{for(var i = 0, len = gdjs.L2Code.GDyum1Objects3.length ;i < len;++i) {
    gdjs.L2Code.GDyum1Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDMouthObjects3.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}gdjs.L2Code.localVariables.length = 0;
}
gdjs.L2Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.L2Code.localVariables);
/* Don't save Mouth as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.L2Code.GDyum1Objects2) asyncObjectsList.addObject("yum1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.L2Code.asyncCallback12895260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.L2Code.asyncCallback17611756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.L2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("D1"), gdjs.L2Code.GDD1Objects2);

gdjs.copyArray(runtimeScene.getObjects("yum1"), gdjs.L2Code.GDyum1Objects2);
{for(var i = 0, len = gdjs.L2Code.GDD1Objects2.length ;i < len;++i) {
    gdjs.L2Code.GDD1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDyum1Objects2.length ;i < len;++i) {
    gdjs.L2Code.GDyum1Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.L2Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.L2Code.localVariables.length = 0;
}
gdjs.L2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.L2Code.localVariables);
for (const obj of gdjs.L2Code.GDD1Objects1) asyncObjectsList.addObject("D1", obj);
for (const obj of gdjs.L2Code.GDMouthObjects1) asyncObjectsList.addObject("Mouth", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.L2Code.asyncCallback17611756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L2Code.GDMouthObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDD2Objects1Objects = Hashtable.newFrom({"D2": gdjs.L2Code.GDD2Objects1});
gdjs.L2Code.asyncCallback17524300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.L2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("yum2"), gdjs.L2Code.GDyum2Objects3);

{for(var i = 0, len = gdjs.L2Code.GDyum2Objects3.length ;i < len;++i) {
    gdjs.L2Code.GDyum2Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDMouthObjects3.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}gdjs.L2Code.localVariables.length = 0;
}
gdjs.L2Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.L2Code.localVariables);
/* Don't save Mouth as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.L2Code.GDyum2Objects2) asyncObjectsList.addObject("yum2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.L2Code.asyncCallback17524300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.L2Code.asyncCallback8125540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.L2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("D2"), gdjs.L2Code.GDD2Objects2);

gdjs.copyArray(runtimeScene.getObjects("yum2"), gdjs.L2Code.GDyum2Objects2);
{for(var i = 0, len = gdjs.L2Code.GDD2Objects2.length ;i < len;++i) {
    gdjs.L2Code.GDD2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDyum2Objects2.length ;i < len;++i) {
    gdjs.L2Code.GDyum2Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.L2Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.L2Code.localVariables.length = 0;
}
gdjs.L2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.L2Code.localVariables);
for (const obj of gdjs.L2Code.GDD2Objects1) asyncObjectsList.addObject("D2", obj);
for (const obj of gdjs.L2Code.GDMouthObjects1) asyncObjectsList.addObject("Mouth", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.L2Code.asyncCallback8125540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L2Code.GDMouthObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDD3Objects1Objects = Hashtable.newFrom({"D3": gdjs.L2Code.GDD3Objects1});
gdjs.L2Code.asyncCallback8198332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.L2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("yum3"), gdjs.L2Code.GDyum3Objects3);

{for(var i = 0, len = gdjs.L2Code.GDyum3Objects3.length ;i < len;++i) {
    gdjs.L2Code.GDyum3Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDMouthObjects3.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}gdjs.L2Code.localVariables.length = 0;
}
gdjs.L2Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.L2Code.localVariables);
/* Don't save Mouth as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.L2Code.GDyum3Objects2) asyncObjectsList.addObject("yum3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.L2Code.asyncCallback8198332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.L2Code.asyncCallback10957004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.L2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("D3"), gdjs.L2Code.GDD3Objects2);

gdjs.copyArray(runtimeScene.getObjects("yum3"), gdjs.L2Code.GDyum3Objects2);
{for(var i = 0, len = gdjs.L2Code.GDD3Objects2.length ;i < len;++i) {
    gdjs.L2Code.GDD3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDyum3Objects2.length ;i < len;++i) {
    gdjs.L2Code.GDyum3Objects2[i].hide(false);
}
}
{ //Subevents
gdjs.L2Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.L2Code.localVariables.length = 0;
}
gdjs.L2Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.L2Code.localVariables);
for (const obj of gdjs.L2Code.GDD3Objects1) asyncObjectsList.addObject("D3", obj);
for (const obj of gdjs.L2Code.GDMouthObjects1) asyncObjectsList.addObject("Mouth", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.L2Code.asyncCallback10957004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L2Code.GDMouthObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDDoorOpenedObjects1Objects = Hashtable.newFrom({"DoorOpened": gdjs.L2Code.GDDoorOpenedObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects = Hashtable.newFrom({"Mouth": gdjs.L2Code.GDMouthObjects1});
gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDDoorClosedObjects1Objects = Hashtable.newFrom({"DoorClosed": gdjs.L2Code.GDDoorClosedObjects1});
gdjs.L2Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("D1"), gdjs.L2Code.GDD1Objects1);
gdjs.copyArray(runtimeScene.getObjects("D2"), gdjs.L2Code.GDD2Objects1);
gdjs.copyArray(runtimeScene.getObjects("D3"), gdjs.L2Code.GDD3Objects1);
gdjs.copyArray(runtimeScene.getObjects("yum1"), gdjs.L2Code.GDyum1Objects1);
gdjs.copyArray(runtimeScene.getObjects("yum2"), gdjs.L2Code.GDyum2Objects1);
gdjs.copyArray(runtimeScene.getObjects("yum3"), gdjs.L2Code.GDyum3Objects1);
{for(var i = 0, len = gdjs.L2Code.GDD1Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDD1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDD2Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDD2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDD3Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDD3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDyum1Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDyum1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDyum2Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDyum2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.L2Code.GDyum3Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDyum3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.L2Code.GDMouthObjects1.length !== 0 ? gdjs.L2Code.GDMouthObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.L2Code.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDBorderObjects1Objects, gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.L2Code.GDBorderObjects1 */
/* Reuse gdjs.L2Code.GDMouthObjects1 */
{for(var i = 0, len = gdjs.L2Code.GDMouthObjects1.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects1[i].separateFromObjectsList(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDBorderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("D1"), gdjs.L2Code.GDD1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects, gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDD1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10412588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.L2Code.GDD1Objects1 */
/* Reuse gdjs.L2Code.GDMouthObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "S-eating.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.L2Code.GDMouthObjects1.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.L2Code.GDD1Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDD1Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.L2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("D2"), gdjs.L2Code.GDD2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects, gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDD2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11157620);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.L2Code.GDD2Objects1 */
/* Reuse gdjs.L2Code.GDMouthObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "S-eating.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.L2Code.GDMouthObjects1.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.L2Code.GDD2Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDD2Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.L2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("D3"), gdjs.L2Code.GDD3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects, gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDD3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12895940);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.L2Code.GDD3Objects1 */
/* Reuse gdjs.L2Code.GDMouthObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "S-eating.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.L2Code.GDMouthObjects1.length ;i < len;++i) {
    gdjs.L2Code.GDMouthObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.L2Code.GDD3Objects1.length ;i < len;++i) {
    gdjs.L2Code.GDD3Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.L2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorOpened"), gdjs.L2Code.GDDoorOpenedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects, gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDDoorOpenedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorClosed"), gdjs.L2Code.GDDoorClosedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouth"), gdjs.L2Code.GDMouthObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDMouthObjects1Objects, gdjs.L2Code.mapOfGDgdjs_9546L2Code_9546GDDoorClosedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L3", false);
}}

}


};

gdjs.L2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.L2Code.GD_95951TileGB2Objects1.length = 0;
gdjs.L2Code.GD_95951TileGB2Objects2.length = 0;
gdjs.L2Code.GD_95951TileGB2Objects3.length = 0;
gdjs.L2Code.GDD1Objects1.length = 0;
gdjs.L2Code.GDD1Objects2.length = 0;
gdjs.L2Code.GDD1Objects3.length = 0;
gdjs.L2Code.GDD2Objects1.length = 0;
gdjs.L2Code.GDD2Objects2.length = 0;
gdjs.L2Code.GDD2Objects3.length = 0;
gdjs.L2Code.GDD3Objects1.length = 0;
gdjs.L2Code.GDD3Objects2.length = 0;
gdjs.L2Code.GDD3Objects3.length = 0;
gdjs.L2Code.GDyum1Objects1.length = 0;
gdjs.L2Code.GDyum1Objects2.length = 0;
gdjs.L2Code.GDyum1Objects3.length = 0;
gdjs.L2Code.GDyum2Objects1.length = 0;
gdjs.L2Code.GDyum2Objects2.length = 0;
gdjs.L2Code.GDyum2Objects3.length = 0;
gdjs.L2Code.GDyum3Objects1.length = 0;
gdjs.L2Code.GDyum3Objects2.length = 0;
gdjs.L2Code.GDyum3Objects3.length = 0;
gdjs.L2Code.GDDoorClosedObjects1.length = 0;
gdjs.L2Code.GDDoorClosedObjects2.length = 0;
gdjs.L2Code.GDDoorClosedObjects3.length = 0;
gdjs.L2Code.GDDoorOpenedObjects1.length = 0;
gdjs.L2Code.GDDoorOpenedObjects2.length = 0;
gdjs.L2Code.GDDoorOpenedObjects3.length = 0;
gdjs.L2Code.GDMouthObjects1.length = 0;
gdjs.L2Code.GDMouthObjects2.length = 0;
gdjs.L2Code.GDMouthObjects3.length = 0;
gdjs.L2Code.GDPlateObjects1.length = 0;
gdjs.L2Code.GDPlateObjects2.length = 0;
gdjs.L2Code.GDPlateObjects3.length = 0;
gdjs.L2Code.GDBorderObjects1.length = 0;
gdjs.L2Code.GDBorderObjects2.length = 0;
gdjs.L2Code.GDBorderObjects3.length = 0;

gdjs.L2Code.eventsList6(runtimeScene);

return;

}

gdjs['L2Code'] = gdjs.L2Code;
