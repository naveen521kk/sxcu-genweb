import 'bootstrap';
//import './scss/app.scss';
import { validate } from 'jquery-validation';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

$("#mainform").validate({
    rules: {
        subdomain: {
            required: true,
            url: true,
            normalizer: function (value) {
                var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                var regex = new RegExp(expression);
                var url = value;
                if (url.match(regex)) {
                    console.log(url);
                    return url;
                } else {
                    return "";
                }
            },
        },
        token: {
            required: false,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        collection: {
            required: false,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        collection_token: {
            required: false,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        noembed: {
            required: false,
            normalizer: function (value) {
                console.log(value)
                return value

            },
        }
    },
});
