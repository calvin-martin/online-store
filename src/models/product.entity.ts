import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    private name: string;
    @Column()
    private description: string;
    @Column()
    private image: string;
    @Column()
    private price: number;


    public getId(): number {
        return this.id;
    }

    public setId(value: number) {
        this.id = value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(value: string) {
        this.description = value;
    }

    public getImage(): string {
        return this.image;
    }
    public setImage(value: string) {
        this.image = value;
    }

    public getPrice(): number {
        return this.price;
    }
    public setPrice(value: number) {
        this.price = value;
    }

}