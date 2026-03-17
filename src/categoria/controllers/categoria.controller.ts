import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categoria } from "../entities/categoria.entity";


@Controller('/categorias')
export class CategoriaController{

    constructor(private readonly categoriaService: CategoriaService){}

    //CONSULTAR TODOS As CATEGORIAS
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]>{
        return this.categoriaService.findAll();
    }

    //PROCURAR POR NOME
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Categoria[]>{
        return this.categoriaService.findByNome(nome);
    }

    //PROCURAR POR ID
    @Get('/:id')
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.categoriaService.findById(id); 
    }

    //CRIAR CATEGORIA
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    //ATUALIZAR CATEGORIA
    @Put('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() categoria: Categoria) {
    return this.categoriaService.update(id, categoria);
    }


    //DELETAR
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) 
    remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.remove(id);
    }

    


}