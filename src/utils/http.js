import axios from 'axios'

export const get = ({ url }) => {
    return axios({
        url
    })
        .then((result) => {
            return result.data
        })
        .catch((err) => {
            return err.message
        })
}

export const post = ({
    url,
    data,
}) => {
    return axios({
        method: 'POST',
        url,
        headers: {
            'Content-type': "application/x-www-form-urlencoded",
        },
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) +"&"
            }
            return ret.slice(0,-1)
        }],
        responseType: 'json',
        data: data

    })
        .then((result) => {
            return result.data
        })
        .catch(err => {
            return err.message
        })
}