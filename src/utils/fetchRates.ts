import { client } from "../../sanity";
import { Rates } from "typings";

const query = `
*[_type == "rates"]{
    title, id , sellRate, buyRate, "imageUrl": mainImage.asset->url 
}
`
export const fetchRates = async () => {

    // console.log('Client:', client);
    // console.log('Query:', query);
    const data = await client.fetch(query);

    const rates: Rates[] = data;

    return rates;
}