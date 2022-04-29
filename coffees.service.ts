/* eslint-disable prettier/prettier */
import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
        id: 1,
        name: "Franck's black",
        brand: "Franck's",
        flavors: ["Coffee", "Caffeine"],
        },
    ]

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        const coffee = this.coffees.find(item => item.id === +id)
        if(!coffee) {
            throw new NotFoundException(`Coffee id #${id} not found`)
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        return this.coffees.push(createCoffeeDto)
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id)
        if(existingCoffee) {
            //update exissting
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id)
        if(coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1)
        }
    }
}
