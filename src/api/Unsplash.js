import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 12mh9WFZ9SBy1TkzsF3At0iieHfjmQxIEMwcROmnX5w'
    }
})
