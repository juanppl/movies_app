export class Serie {
    constructor(
        public original_name: string,
        public genre_ids: number[],
        public name: string,
        public popularity: number,
        public origin_country: string[],
        public vote_count: number,
        public first_air_date: Date,
        public backdrop_path: string,
        public original_language: string,
        public id: number,
        public vote_average: number,
        public overview: string,
        public poster_path: string,
    ){}
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSerie(json: string): Serie {
        return JSON.parse(json);
    }

    public static serieToJson(value: Serie): string {
        return JSON.stringify(value);
    }
}


