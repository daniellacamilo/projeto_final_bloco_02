import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller("/produtos")
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) { }

  //CONSULTAR TODOS OS PRODUTOS
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }

  //CONSULTAR PRODUTO POR ID
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.ProdutoService.findById(id);
  }

  //CONSULTAR PRODUTO POR DESCRIÇÃO
  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findAllBydescricao(@Param('descricao') descricao: string): Promise<Produto[]> {
    return this.ProdutoService.findAllByDescricao(descricao);
  }

  //CRIAR PRODUTO
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tema: Produto): Promise<Produto> {
    return this.ProdutoService.create(tema);
  }

  //ATUALIZAR PRODUTO
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto): Promise<Produto> {
    return this.ProdutoService.update(produto);
  }

  //DELETAR PRODUTO
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ProdutoService.Delete(id);
  }

}