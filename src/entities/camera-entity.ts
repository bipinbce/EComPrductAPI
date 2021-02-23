import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("camera")
export class CameraEntity {

    @PrimaryGeneratedColumn()
    cameraId: number;

    @Column({
        length: 100
    })
    cameraName: string;

    @Column({
        length: 200
    })
    description: string;

    @Column({
        length: 100
    })
    price: string;
    
    make: number;
}