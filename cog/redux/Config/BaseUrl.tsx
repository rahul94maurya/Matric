import axios from 'axios'

export const loadGetApi  = async() => 
    await axios.get("https://api.instantwebtools.net/v1/airlines")
