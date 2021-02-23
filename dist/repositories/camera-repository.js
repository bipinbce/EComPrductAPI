"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camera_entity_1 = require("../entities/camera-entity");
const typeorm_1 = require("typeorm");
class CameraRepo {
    getAllCameras() {
        // get Camera repository and find all Cameras
        return typeorm_1.getManager().getRepository(camera_entity_1.CameraEntity).find();
    }
    saveCamera(camera) {
        return typeorm_1.getManager().getRepository(camera_entity_1.CameraEntity).save(camera);
    }
}
exports.CameraRepo = CameraRepo;
//# sourceMappingURL=camera-repository.js.map