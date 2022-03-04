export default class Weather {
  public date: Date;

  public temperatureC: number;

  public temperatureF: number;

  public summary: string;

  public main: string;

  constructor(date: Date, temperatureC: number, summary: string, main: string) {
    this.date = date;

    this.temperatureC = temperatureC;

    this.temperatureF = 32 + Math.round(temperatureC / 0.5556);

    this.summary = summary;

    this.main = main;
  }

  public get() {
    return this;
  }
}
