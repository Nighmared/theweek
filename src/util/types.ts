export type Week =  {
    week: Number;
    topic: string;
    emoji?: string;
  }

export type Year = {
    year: Number;
    weeks: [Week]
}

export type  TopicList = {
    years: [Year]
  }
  