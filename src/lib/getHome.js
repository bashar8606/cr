import strapiFetch from "@/utils/strapiFetch";

const options = {
    method: 'GET',
    // headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    // },
    next: {
        revalidate: 60 * 60 * 24, // data will be cached for 1 day
    }
};


export async function getHomeData() {
    const url = `pages/6`;
    const urlParamsObject = null
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}

