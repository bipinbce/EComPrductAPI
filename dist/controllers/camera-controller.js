"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const camera_repository_1 = require("../repositories/camera-repository");
const camera_entity_1 = require("../entities/camera-entity");
exports.getAllCameras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cameraRepo = new camera_repository_1.CameraRepo();
    console.log("Received GetAllCameras ==> GET");
    cameraRepo.getAllCameras().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.saveCamera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cameraRepo = new camera_repository_1.CameraRepo();
    console.log("Received SaveCamera ==> POST");
    console.log(req.body);
    let camera = new camera_entity_1.CameraEntity();
    camera.cameraName = req.body.cameraName;
    camera.description = req.body.description;
    camera.make = req.body.make;
    camera.price = req.body.price;
    cameraRepo.saveCamera(camera).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
//# sourceMappingURL=camera-controller.js.map