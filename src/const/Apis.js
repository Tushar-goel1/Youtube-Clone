const API_KEY=process.env.API_KEYS
const Youtube_Video_API=
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`

export const YOUTUBE_SEARCH_API=
`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_SEARCH_Video=`https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}`

export default Youtube_Video_API;