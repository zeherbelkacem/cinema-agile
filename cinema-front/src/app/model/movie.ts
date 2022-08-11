import { Time } from "@angular/common";
import { Category } from "./category";
import { FileHandle } from "./imageFileHandle";

export interface Movie {
    id: number;
    title: string;
    description: string;
    production: string;
    releaseDate: Date;
    duration: Time;
    //image: File;
    imageModel: FileHandle;
    category: Category;

}
