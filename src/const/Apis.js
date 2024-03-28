const API_KEY=process.env.API_KEYS
const Youtube_Video_API=
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`

export const YOUTUBE_SEARCH_API=
`https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=`

export const YOUTUBE_COMMENTS_API=
`https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`

export default Youtube_Video_API;