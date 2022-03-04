export default class Weather {
  public date: Date;

  public temperatureC: number;

  public temperatureF: number;

  public summary: string;

  constructor(date: Date, temperatureC: number, summary: string) {
    this.date = date;

    this.temperatureC = temperatureC;

    this.temperatureF = 32 + Math.round(temperatureC / 0.5556);

    this.summary = summary;
  }

  public get() {
    return this;
  }
}
