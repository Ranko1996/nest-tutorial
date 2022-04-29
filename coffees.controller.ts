/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update.coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeservice: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        //const { limit, offset } = paginationQuery
        return this.coffeeservice.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id)
        return this.coffeeservice.findOne('' + id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeeservice.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeservice.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.coffeeservice.remove(id);
    }
}
