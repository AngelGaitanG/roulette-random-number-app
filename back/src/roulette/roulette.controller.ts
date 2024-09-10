import { Controller, Post } from "@nestjs/common";
import { RouletteService } from "./roulette.service";

@Controller('roulette')
export class RouletteController {
    constructor(
        private readonly rouletteService: RouletteService
    ){}

    @Post('')
    getRandomNumber(): {number: number}{
        const result = this.rouletteService.getRandomNumber()
        return {number: result}
    }
}