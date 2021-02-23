import { Request, Response } from "express";
import { CameraRepo } from "../repositories/camera-repository";
import { CameraEntity } from "../entities/camera-entity";

export let getAllCameras = async (req: Request, res: Response) => {
    let cameraRepo: CameraRepo = new CameraRepo();

    console.log("Received GetAllCameras ==> GET");

    cameraRepo.getAllCameras().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });


};

export let saveCamera = async (req: Request, res: Response) => {
    let cameraRepo: CameraRepo = new CameraRepo();

    console.log("Received SaveCamera ==> POST");
    console.log(req.body);

    let camera:CameraEntity = new CameraEntity();
    camera.cameraName = req.body.cameraName;
    camera.description = req.body.description;
    camera.make = req.body.make;
    camera.price = req.body.price;

    cameraRepo.saveCamera(camera).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};