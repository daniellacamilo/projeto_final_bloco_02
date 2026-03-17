import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";



@Entity({name: 'tb_categorias'})
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: true})
    descricao: string
    
     //Relacionamento com o Produto
    @OneToMany(() => Produto,(produto)=> produto.categoria)
    produto: Produto[]; 

}