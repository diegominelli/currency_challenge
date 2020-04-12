export class CurrencyBase {
   constructor(
    public money_name: string, //
    public country?: string, // optional
    public flag_img?: string, // optional
    public id?: number // optional
   ){}
}
