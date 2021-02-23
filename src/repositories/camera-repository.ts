import { CameraEntity } from "../entities/camera-entity";
import { getManager } from "typeorm";

export class CameraRepo {

    getAllCameras() {
        // get Camera repository and find all Cameras
        return getManager().getRepository(CameraEntity).find();
    }

    saveCamera(camera: CameraEntity) { 
          return getManager().getRepository(CameraEntity).save(camera);
    }

}