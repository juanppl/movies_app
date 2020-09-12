export class SerieDetail {
    constructor(
        public backdrop_path: string,
        public created_by: CreatedBy[],
        public episode_run_time: number[],
        public first_air_date: Date,
        public genres: Genre[],
        public homepage: string,
        public id: number,
        public in_production: boolean,
        public languages: string[],
        public last_air_date: Date,
        public last_episode_to_air: TEpisodeToAir,
        public name: string,
        public next_episode_to_air: TEpisodeToAir,
        public networks: Network[],
        public number_of_episodes: number,
        public number_of_seasons: number,
        public origin_country: string[],
        public original_language: string,
        public original_name: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public production_companies: Network[],
        public seasons: Season[],
        public status: string,
        public type: string,
        public vote_average: number,
        public vote_count: number,
    ) { }
}

export class CreatedBy {
    constructor(
        public id: number,
        public credit_id: string,
        public name: string,
        public gender: number,
        public profile_path: null
    ) { }
}

export class Genre {
    constructor(
        public id: number,
        public name: string
    ) { }
}

export class TEpisodeToAir {
    constructor(
        public air_date: Date,
        public episode_number: number,
        public id: number,
        public name: string,
        public overview: string,
        public production_code: string,
        public season_number: number,
        public show_id: number,
        public still_path: null | string,
        public vote_average: number,
        public vote_count: number
    ) { }
}

export class Network {
    constructor(
        public name: string,
        public id: number,
        public logo_path: null | string,
        public origin_country: string
    ) { }
}

export class Season {
    constructor(
        public air_date: Date,
        public episode_count: number,
        public id: number,
        public name: string,
        public overview: string,
        public poster_path: string,
        public season_number: number
    ) { }
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSerie(json: string): SerieDetail {
        return JSON.parse(json);
    }

    public static serieToJson(value: SerieDetail): string {
        return JSON.stringify(value);
    }
}