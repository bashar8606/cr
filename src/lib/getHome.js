import strapiFetch from "@/utils/strapiFetch";

const options = {
    method: 'GET',
    cache: 'no-store', 
    next: {
        revalidate: 0, 
    }
};

export async function getHomeData() {
    const url = `pages/6`;
    const urlParamsObject = null
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}

