import fs from 'fs'

export const ParseJsonFile = (datapath: string) => {
    let data = fs.readFileSync(datapath, "utf-8");
    return JSON.parse(data)
}
