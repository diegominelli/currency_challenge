// model prototype

export class Currency {
  constructor(
    public money_name: string, //
    public rate: number,
    public country?: string, // optional
    public flag_img?: string, // optional
    public id?: number // optional
  ) { }
}
