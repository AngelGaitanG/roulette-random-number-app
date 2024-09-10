import { Injectable } from "@nestjs/common";

@Injectable()
export class RouletteService {


    getRandomNumber():number {

        return Math.floor(Math.random() * 100) + 1;
    }

}