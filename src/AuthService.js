import buffer from 'buffer';
import _ from 'lodash';


export class AuthService {

    // getAuthInfo(result) {
    //     AsyncStorage.multiGet([authKey, userKey], (err, val) => {

    //         if(err) {
    //             return result();
    //         }

    //         if(!val) {
    //             return result();
    //         }

    //         var zippedObj = _.zipObject(val);

    //         if(!zippedObj[authKey]) {
    //             return result();
    //         }

    //         var authInfo = {
    //             header: {
    //                 Authorization: 'Basic ' + zippedObj[authKey]
    //             },
    //             user: JSON.parse(zippedObj[userKey]),
    //         };

    //         return result(authInfo);
    //     });
    // }

    login(credentials, callback) {
        var b = new buffer.Buffer("ssreact:sssecret");
        var encodedAuth = b.toString('base64');

        var body = {
            'username': credentials.username,
            'password': credentials.password,
            'grant_type': 'password',
            'scope': 'ssapi'
        }

        var formBodyEncoded = [];

        for (var property in body) {    
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(body[property]);
            formBodyEncoded.push(encodedKey + "=" + encodedValue);
        }

        formBodyEncoded = formBodyEncoded.join("&");

        fetch('http://localhost:5003/connect/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + encodedAuth,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBodyEncoded
        })
        .then((response) => {
            console.log(response);
            if (response.status >= 200 && response.status < 300)
                return response;
            
            console.log(response);

            throw {
                badCredentials: response.status == 400,
                unknownError: response.status != 400
            };  
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
             console.log(result);
             return callback({success: true});                                    
        })
        .catch((err) => {
            return callback(err);
        });
    }
}
