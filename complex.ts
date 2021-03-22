class Complex{

    private _imaginary: number;
    private _real: number;

    constructor(imaginary: number, real: number) {
        this._imaginary = imaginary;
        this._real = real;
    }

    public add(complex: Complex):Complex{
        return new Complex(this._real + complex.real,this._imaginary+complex.imaginary);
    }

    public get modules():number {
        return Math.sqrt(Math.pow(this._real,2) + Math.pow(this._imaginary,2))
    }

    public get imaginary(): number {
        return this._imaginary;
    }

    public set imaginary(value: number) {
        this._imaginary = value;
    }

    public get real(): number {
        return this._real;
    }

    public set real(value: number) {
        this._real = value;
    }

    public toString = () : string => {
        return `${this.real} + ${this.imaginary}i`;
    }
}
console.log("XD");

let num1 = new Complex(1,1);
console.log(num1.toString());

let num2 = new Complex(2,5);
console.log(num2.toString());

console.log(num1.add(num2).toString());



