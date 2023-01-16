import { default as urlData } from "../config/url.json";

export class urlDataProvider {
    private Url: string;
    
    constructor(Enviornment: string) {
        this.Url = urlData[Enviornment].url;
    }

    get url() {
        return this.Url;
    }
}