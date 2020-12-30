const api_key = 'AIzaSyCFcPqi6pCX813PDQAHbrOjeXWDkLjVdhI'
const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${api_key}`
const latest_video_url = '&part=snippet&chart=mostPopular&maxResults=30'

export function LatestVideo(){
    const output = fetch(`${baseUrl}${latest_video_url}`, {method: 'GET'})
                    .then((data) => data.json())
    return{
        type: 'TRENDING_VIDEOS',
        payload: output
    }
}